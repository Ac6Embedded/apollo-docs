---
id: cra-references
slug: /security/cra/references
title: CRA‑referanser og ressurser
sidebar_position: 99
---

## Hvordan bruke disse referansene

Denne siden samler **autoritative kilder** og **støttestandarder** for CRA‑materialet.

- Bruk **CRA‑primærkildene** for å verifisere tolkninger eller grense‑tilfeller.  
- Bruk lenkene til **veiledning og standardisering** for å følge utviklingen av harmoniserte standarder (PT1/PT2/PT3, vertikale produktstandarder).  
- Bruk standardene for **SDL, sårbarhetshåndtering, SBOM og IoT‑baselines** som teknisk støtte for designvalg i CRA‑dokumentasjonen.  

Hver side i denne CRA‑serien lenker hit når den baserer seg på en av disse eksterne kildene.

## CRA‑primærkilder

- Regulation (EU) 2024/2847 — Cyber Resilience Act  
  - Utgiver: Official Journal of the EU (EUR‑Lex)  
  - URL: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847  
  - Kort: Bindende lovtekst for CRA.  
- Cyber Resilience Act — Kommisjonens side  
  - Utgiver: Europakommisjonen (DG CONNECT)  
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act  
  - Kort: Hovedside med offisiell oversikt og oppdateringer.  
- CRA — Sammendrag av lovteksten  
  - Utgiver: Europakommisjonen  
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-summary  
  - Kort: Forklarer scope, plikter og vedlegg i enklere språk.  
- CRA — Conformity assessment  
  - Utgiver: Europakommisjonen  
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-conformity-assessment  
  - Kort: Egenvurdering vs. tredjepart; kategorier important/critical.  
- CRA — Standardisation  
  - Utgiver: Europakommisjonen  
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-standardisation  
  - Kort: Standardiseringsoppdrag til ESOs (CEN/CENELEC/ETSI) for harmoniserte standarder.  
- CRA — Reporting obligations  
  - Utgiver: Europakommisjonen  
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting  
  - Kort: Tidligvarsling og hendelsesrapportering til ENISA.  

## CRA‑veiledning

- CRA Implementation FAQ  
  - Utgiver: Europakommisjonen  
  - URL: https://ec.europa.eu/newsroom/dae/redirection/document/122331  
  - Kort: Avklaringer om scope, FOSS‑behandling, rapportering.  
- STAN4CRA — ESO‑portal for CRA‑standardisering  
  - Utgiver: CEN/CENELEC/ETSI  
  - URL: https://www.stan4cra.eu/  
  - Kort: Samler leveranser og aktiviteter knyttet til CRA‑standardisering.  
- ETSI Cyber Security — CRA‑seksjon  
  - Utgiver: ETSI  
  - URL: https://www.etsi.org/technologies/cyber-security#mytoc5  
  - Kort: ETSI‑aktiviteter og utkast som er relevante for CRA.  

## Developer Security Practices (SDL)

- NIST SP 800‑218 — Secure Software Development Framework (SSDF) v1.1  
  - Utgiver: NIST  
  - URL: https://csrc.nist.gov/pubs/sp/800/218/final  
  - Kort: Outcome‑basert SDL, tilpasset CRA Annex I‑krav gjennom livssyklusen.  
- IEC 62443‑4‑1 — Secure product development lifecycle requirements  
  - Utgiver: IEC  
  - URL: https://webstore.iec.ch/publication/33615  
  - Kort: SDL‑krav for industrielle/embedded produkter.  

## Sårbarhetshåndtering

- ISO/IEC 29147 — Vulnerability disclosure  
  - Utgiver: ISO/IEC JTC 1/SC 27  
  - URL: https://www.iso.org/standard/72311.html  
  - Kort: Praktisk rammeverk for koordinert sårbarhets­avsløring (CVD).  
- ISO/IEC 30111 — Vulnerability handling processes  
  - Utgiver: ISO/IEC JTC 1/SC 27  
  - URL: https://www.iso.org/standard/69725.html  
  - Kort: Prosesser for mottak, triage og utbedring av sårbarheter.  

## SBOM og VEX

- SPDX Specification (ISO/IEC 5962)  
  - Utgiver: Linux Foundation / ISO  
  - URL: https://spdx.dev/specifications/  
  - Kort: SBOM‑format for programvarekomponenter.  
- CycloneDX Specification (ECMA‑424)  
  - Utgiver: OWASP / Ecma International  
  - URL: https://cyclonedx.org/specification/overview/  
  - Kort: SBOM med støtte for hardware/tjenester og VEX‑modell.  
- Vulnerability Exploitability eXchange (VEX)  
  - Utgiver: CISA  
  - URL: https://www.cisa.gov/sbom/vex  
  - Kort: Format for å kommunisere hvorvidt kjente sårbarheter er utnyttbare.  

## Embedded / IoT‑baselines

- ETSI EN 303 645 — Cyber Security for Consumer IoT  
  - Utgiver: ETSI  
  - URL: https://www.etsi.org/deliver/etsi_en/303600_303699/303645/02.01.01_60/en_303645v020101p.pdf  
  - Kort: Baseline‑kontroller for tilkoblede forbrukerenheter.  
- IEC 62443‑4‑2 — Technical security requirements for IACS components  
  - Utgiver: IEC  
  - URL: https://webstore.iec.ch/publication/34421  
  - Kort: Tekniske krav til embedded/industrielle komponenter.  
- ENISA — Baseline Security Recommendations for IoT  
  - Utgiver: ENISA  
  - URL: https://www.enisa.europa.eu/publications/baseline-security-recommendations-for-iot  
  - Kort: Praktiske anbefalinger for IoT/embedded‑sikkerhet.  

## Notat om harmoniserte standarder (desember 2025)

Per desember 2025 er CRA‑harmoniserte standarder ennå ikke sitert i Official Journal. Kommisjonens standardiseringsoppdrag til ESOs pågår. Inntil sitering kan produsenter lene seg på robuste internasjonale/Europeiske standarder (f.eks. IEC 62443‑4‑1/‑4‑2, ETSI EN 303 645) og etablerte rammeverk (som NIST SSDF). Kommisjonen kan innføre **common specifications** hvis nødvendig (CRA art. 27).
