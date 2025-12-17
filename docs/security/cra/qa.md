---
id: cra-qa
slug: /security/cra/qa
title: CRA Q&A
sidebar_position: 11
---

## Our interpretation of the legal text

This Q&A is for practical guidance to help engineering teams interpret the Cyber Resilience Act (Regulation (EU) 2024/2847). It reflects our technical reading of the CRA at the time of writing. It is not legal advice. CRA compliance depends on product scope, intended use, operating environment, classification (normal/important/critical), supply-chain roles, and the chosen conformity assessment route. Validate any compliance decisions with your legal counsel and, where applicable, your conformity/notified body.

Questions? Email us at info@ac6-training.com.

---

### Q1) Does the CRA require a defined support period?

Yes. The manufacturer must define a security support period, communicate its end date, and provide vulnerability handling and security updates during that period.
- **Define support period**: base it on expected use time, user expectations, product nature/purpose, operating environment, and core component support periods.[2][5]
- **Maintain the risk assessment** during the support period.[2]
- **User visibility**: end date (at least month/year) must be clear at purchase; where feasible, notify users at end of support.[6]
- **During support**: handle vulnerabilities (including components) and provide security updates.[2][8]
The CRA does not mandate a fixed number of years; duration is manufacturer-defined but must be risk/lifetime-based and documented for users and in the technical file.[2][5][6]

### Q2) Is a soldered 3rd-party compute module (MCU/firmware) a product? What about the finished device?

Often yes: the module is a PDE on its own, and the finished device is also a PDE.
- If the module is placed on the EU market separately, it fits the PDE definition because the CRA includes “software or hardware components being placed on the market separately.”[1]
- **Module obligations** (when sold separately): risk assessment, Annex I controls, vulnerability handling, technical documentation, user/integrator instructions, and the right conformity assessment route.[2][7][8]
- **Finished product obligations**: the final manufacturer remains responsible for CRA compliance of the whole product (module + your software + any remote data processing).[1][2]
- **Integration due diligence**: third-party components (including OSS) must not compromise cybersecurity; exercise due diligence.[3]
Practically, module vendors should supply security docs (SBOM, support/update policy, secure config guidance); the finished-product manufacturer must still keep a system SBOM and remediation plan covering the module stack.[7][8]

### Q3) Alternatives to secure boot to ensure the right software runs on the MPU?

CRA is technology-neutral. It requires integrity, authorised access, and secure update distribution based on risk.[2][7][8]
Common patterns:
- **Signature verification at boot/load**: RoT verifies only authorised images run (most direct integrity control).[7]
- **Measured boot + remote attestation**: device measures the boot chain; backend authorises operation for approved measurements (useful when local enforcement is constrained).[7]
- **Runtime allow-listing** (OS/hypervisor enforces signed binaries) with protected keys/config.[7]
- **Secure update pipeline**: signed updates + anti-rollback + safe recovery so trusted software is enforced over the lifecycle.[7][8][12]
Most reliable designs use cryptographic authenticity plus protected key storage; alternatives mainly shift where enforcement happens.[7]

### Q4) Must debug ports be disabled if the PDE is in a restricted area?

CRA does not say “always disable JTAG/SWD/UART.” It requires minimising attack surface and preventing unauthorised access based on risk (intended purpose, foreseeable misuse, conditions of use).[2][7]
Typical approach:
- Disable debug by default, or require strong control (crypto unlock, per-device authorisation, tamper evidence, controlled service workflow).[7]
- If debug must stay, document physical/procedural controls (access logs, roles, seals) and justify residual risk in the risk assessment and technical documentation.[2][7]
A restricted area lowers risk but does not remove the need to treat debug as security-relevant when it can enable bypass/extraction.[2][7]

### Q5) For a Linux-based product, do we have to handle kernel/userland vulnerabilities or just the app?

Include the OS. Linux (kernel + userland) is part of the shipped attack surface.[1][8]
- **Component visibility**: SBOM in a common machine-readable format (at least top-level dependencies).[8]
- **Triage**: evaluate applicability/exploitability for your configuration; remediate “without delay” relative to risk (patch/mitigate/justify).[8]
- **User-facing info**: advisories for fixed vulnerabilities with severity and remediation guidance.[8]
Practical: fix a baseline (distro, kernel config, package set), generate SBOMs per release, monitor CVEs for those versions, prioritise by exposure/reachability.[8][13]

### Q6) Can products on industrial PCs (Windows/Linux) or Raspberry Pi conform to CRA?

Yes. CRA is platform-agnostic.[1]
- Maintain SBOMs per release; track vulnerabilities in OS + packages + your app; have a documented vulnerability process.[8]
- Provide a secure update mechanism and a support period with a clear end date.[2][5][6]
- Apply hardening/attack-surface reduction (disable unused services, least privilege, strong access control, logging/monitoring).[7]
Windows compliance usually relies on controlled patch channels, locked-down configs, and asset management so you can prove what is deployed/supported.[7][8][13]

### Q6.1) When is a bus “accessible” to a user?

Risk assessment considers intended purpose and **reasonably foreseeable use**, plus conditions of use (environment, assets, time in use).[2]
If opening the enclosure with common tools is realistic, treat internal buses/headers as foreseeably accessible (insider/technician threat models) and mitigate:
- Physical (seals, locks, tamper evidence),
- Procedural (service policy, access logs),
- Technical (debug disable, authenticated maintenance mode, bus protections).[2][7]

### Q7) Our product includes lots of HW/SW we don’t control. What does CRA expect?

The manufacturer placing the PDE remains responsible, even with third-party components.[1][2]
- **Due diligence**: ensure integrated components (including OSS) do not compromise cybersecurity.[3]
- **Component vulnerability coordination**: report issues in integrated components to maintainers and remediate per Annex I Part II.[4][8]
- **Compensating controls**: isolation (MPU/TrustZone/containers), least privilege, segmentation, secure config/hardening to contain vulnerabilities you cannot immediately remove.[7]
Supplier selection, support commitments, SBOM, and update capability are the levers that make compliance possible.[3][8][13]

### Q8) Legacy serial ports (e.g., RS-232/Modbus RTU): must they be encrypted?

CRA does not mandate “encrypt RS-232.” Controls are risk-based: prevent unauthorised access, protect confidentiality/integrity where relevant, and reduce attack surface.[7]
- If physically exposed or crossing untrusted zones: add access control (locks), gateways, authentication where feasible, segmentation; consider tunnelling via a secure channel when sensitivity/control impact is high.[7]
- If inside a controlled cabinet with trusted wiring: physical controls may be acceptable, but document the assumption and how misuse is prevented/detected.[2][7]
Include the interface in threat model/risk assessment and justify controls; ignoring it is not defensible.[2][7]

### Q9) Products placed after the CRA “application date”: must they be new designs?

No. Applicability is tied to when the product is placed on the EU market. The Regulation applies from **11 December 2027**.[10]
- Products placed before 11 December 2027 are subject to CRA only if they undergo a **substantial modification** after that date.[9][11]
- Reporting obligations in Article 14 apply to all in-scope products, including those placed before 11 December 2027.[9][10]
Older designs can still be placed after 11 December 2027 if upgraded to meet Annex I and related obligations—often requiring rework for updates, logging, SBOM/vuln handling.[7][8]

---

## References

[1] Regulation (EU) 2024/2847 (CRA), Article 3(1) (PDE definition including components placed separately)  
[2] CRA, Article 13(1)-(3) (manufacturer obligations; risk assessment; intended/foreseeable use; update during support period)  
[3] CRA, Article 13(5) (due diligence for third-party components, including OSS)  
[4] CRA, Article 13(6) (reporting vulnerabilities in integrated components; remediate per Annex I Part II)  
[5] CRA, Article 13(8) (determine support period: expected time in use, user expectations, environment, component support)  
[6] CRA, Article 13(18)-(19) (user info retention; support end date at purchase; end-of-support notice where feasible)  
[7] CRA, Annex I Part I(1)-(2)(a)-(m) (essential cybersecurity requirements)  
[8] CRA, Annex I Part II(1)-(7) (vulnerability handling, SBOM, remediation timelines, advisories, CVD, secure updates)  
[9] CRA, Article 69(2)-(3) (transitional provisions; Article 14 applies to in-scope products placed before application date)  
[10] CRA, Article 71(2) (application date 11 Dec 2027; earlier application for Article 14 and Chapter IV)  
[11] CRA, Article 3 (definition of “substantial modification”)  
[12] See Annex I Part I(2)(c) and Part II(7)-(8) for secure update expectations  
[13] CRA, Article 14 (reporting), plus Annex I Part II for vulnerability handling scope
