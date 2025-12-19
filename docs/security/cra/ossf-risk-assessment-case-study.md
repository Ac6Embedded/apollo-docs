---
id: cra-ossf-case-study
slug: /security/cra/ossf-risk-assessment
title: CRA Risk Assessment with OpenSSF Tooling (Step-by-Step Case Study)
sidebar_position: 11.5
description: End-to-end CRA-style risk assessment using OpenSSF tools (Scorecard, osv-scanner, deps.dev, Syft), with commands, CI snippets, triage, VEX notes, and evidence mapping.
last_update:
  author: 'Ayoub Bourjilat (AC6)'
  date: '2025-12-18'
---

## What this shows

- A concrete CRA-oriented risk assessment loop using OpenSSF tooling.
- How to turn outputs into Annex I/II/Part II evidence (SBOM, vuln handling, secure updates).
- Commands, CI snippets, triage examples, and evidence bundling you can replicate.

## Scenario

Product: Embedded gateway (MCUboot + Zephyr app) with companion Linux service. We need CRA evidence for:
- Annex I Part I(2)(a) "no known exploitable vulnerabilities" at release.
- Annex I Part II(1)-(2) SBOM + remediation without delay.
- Article 13(5)-(6) due diligence on third-party components.

## Toolchain (OpenSSF)

- **Scorecard**: repo/branch supply-chain posture (auth, reviews, SAST, CI hardening).
- **osv-scanner**: vuln scan of manifests + SBOM (SPDX/CycloneDX).
- **deps.dev API** (optional): dependency metadata/health, transitive resolution.
- **Syft** (or your SBOM generator): produce SPDX/CycloneDX per build/variant.

## Step-by-step (local or CI)

### 1) Generate SBOM (per build/variant)

```bash
mkdir -p reports
syft dir:. -o cyclonedx-json > reports/sbom.cdx.json
```

### 2) Scan for vulnerabilities (manifests + SBOM)

```bash
osv-scanner -r . --sbom reports/sbom.cdx.json --format json > reports/vuln-report.json
```

### 3) Supply-chain posture (Scorecard)

```bash
scorecard --repo=github.com/yourorg/yourrepo --format=json > reports/scorecard.json
```

### 4) Triage and VEX-style notes

Create `reports/vex-notes.md`:

```md
# VEX / Triage notes - release gw-1.4.0
- CVE-2023-12345 (libxyz 1.2.3) ? NOT AFFECTED (feature flag disabled; code path excluded at build)
- CVE-2024-22222 (openssl 1.1.1) ? AFFECTED, fixed by upgrading to 1.1.1w
- CVE-2024-33333 (zlib) ? UNDER INVESTIGATION (ETA 48h); mitigation: disable feature X in config.yaml
```

### 5) Update-path tests (power loss/rollback)

Example (replace with your suite):

```bash
pytest tests/update -k "power_loss or rollback" --maxfail=1 -q --disable-warnings > reports/update-tests.log
```

### 6) Bundle evidence for the release

Create/append `evidence-index.yaml`:

```yaml
release_id: "gw-1.4.0+build.512"
artifacts:
  sbom:
    file: "reports/sbom.cdx.json"
    sha256: "<sha256-of-sbom>"
  vuln_scan:
    file: "reports/vuln-report.json"
    sha256: "<sha256-of-vuln-report>"
  scorecard:
    file: "reports/scorecard.json"
    sha256: "<sha256-of-scorecard>"
  triage_notes:
    file: "reports/vex-notes.md"
    sha256: "<sha256-of-vex-notes>"
  update_tests:
    file: "reports/update-tests.log"
    sha256: "<sha256-of-update-tests>"
```

Outputs to archive with the release:
- `sbom.cdx.json` (Annex I Part II(1), Annex VII(8))
- `vuln-report.json` + triage notes/VEX (Annex I Part II(2))
- `scorecard.json` + CI policy mapping (Article 13(5-6); Annex I Part I(2)(a))
- `evidence-index.yaml` entry with hashes/paths

## Risk assessment hook (CRA style)

Update the cybersecurity risk assessment (Article 13(2)-(3)) with:
- **Assets/attack surface**: update path, crypto libs, network stacks, debug surface.
- **Findings from tools**:
  - `osv-scanner`: affected deps + CVSS/EPSS; mark exploitable vs not-applicable.
  - `scorecard`: weak checks (e.g., no branch protection, no pinned deps) ? supply-chain risk.
- **Decisions/mitigations**:
  - Patch/upgrade, or justify not-applicable (with VEX-like note).
  - Add CI gate for new PRs (fail on critical vulns; require reviews).
  - Enforce SBOM per variant; archive with release manifest.

Keep the decision log in the risk assessment and link to CRA IDs, e.g.:
- `CRA-AI-I-2a-no-known-exploitable`: vuln triage log + osv-scanner report
- `CRA-AI-II-1-sbom`: sbom.cdx.json hash/path
- `CRA-AI-I-2c-sec-updates`: update test logs + signing/rollback policy

## Mapping to CRA clauses

- **Annex I Part I(2)(a)**: `osv-scanner` + triage/VEX; scorecard supply-chain checks.
- **Annex I Part I(2)(b/j/k)**: scorecard signals (branch protection, reviews) + hardening flags in CI; threat model references.
- **Annex I Part I(2)(c)**: update mechanism tests (power loss/rollback) + signing policy.
- **Annex I Part II(1)-(2)**: SBOM per build/variant; remediation logs; advisories if fixed.
- **Article 13(5)-(6)**: due diligence on third-party deps (scan + triage + upstream report if needed).
- **Annex VII**: archive reports + decisions + test logs; keep hashes in evidence index.

## Ops checklist to keep it working

- Run on every release candidate; fail build on critical/high exploitable vulns or missing SBOM.
- Store reports + SBOM in immutable artifact store with retention.
- Add a short VEX-style note for each CVE (affected/not, why) to avoid noisy advisories.
- Re-run scans if risk assessment changes (new exposure, config change).

## Quick win PR gates

- Add CI jobs: SBOM gen + osv-scanner + scorecard; break build on policy (e.g., CRITICAL exploitable).
- Require code review + branch protection (scorecard will reflect).
- Pin dependencies; avoid floating tags.
- Keep `evidence-index.yaml` updated per release hash.

## CI example (GitHub Actions)

```yaml
name: cra-risk-assessment
on: [push]
jobs:
  cra-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install tools
        run: |
          curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
          curl -sSfL https://raw.githubusercontent.com/google/osv-scanner/main/install.sh | sh -s -- -b /usr/local/bin
          curl -sSfL https://raw.githubusercontent.com/ossf/scorecard/main/install.sh | sh -s -- -b /usr/local/bin
      - name: SBOM
        run: syft dir:. -o cyclonedx-json > reports/sbom.cdx.json
      - name: Vulnerability scan
        run: osv-scanner -r . --sbom reports/sbom.cdx.json --format json > reports/vuln-report.json
      - name: Scorecard
        run: scorecard --repo=${{ github.repository }} --format=json > reports/scorecard.json
      - name: Fail on critical exploitable vulns
        run: |
          jq '[.results[] | select(.vulns!=null) | .vulns[] | select(.severity=="CRITICAL" or .severity=="HIGH")] | length' reports/vuln-report.json | \
          awk '{ if ($1>0) { print "Critical/High vulns found"; exit 1 } }'
      - name: Upload reports
        uses: actions/upload-artifact@v4
        with:
          name: cra-evidence-${{ github.sha }}
          path: reports/
```

## Optional: quick local verification

If the tools are installed, sanity check locally:

```bash
mkdir -p reports
syft dir:. -o cyclonedx-json > reports/sbom.cdx.json
osv-scanner -r . --sbom reports/sbom.cdx.json --format json > reports/vuln-report.json
scorecard --repo=github.com/yourorg/yourrepo --format=json > reports/scorecard.json
ls -lh reports/
jq '.scorecard.version' reports/scorecard.json
jq '.results | length' reports/vuln-report.json
```

## References

- OpenSSF Scorecard: https://github.com/ossf/scorecard
- osv-scanner: https://github.com/google/osv-scanner
- deps.dev API: https://deps.dev
- Syft (SBOM): https://github.com/anchore/syft
- CRA text (EUR-Lex): https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847


