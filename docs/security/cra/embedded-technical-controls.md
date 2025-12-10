---
id: cra-embedded-controls
slug: /security/cra/embedded-technical-controls
title: Embedded Technical Controls Mapping
sidebar_position: 4
---
## Purpose of this mapping

This page links CRA Annex I requirements to **actual knobs and features** in embedded systems: CPU, SoC, RTOS and update stack. Use it when designing or reviewing an architecture and cite it when mapping controls in your CRA technical file.[1] Where helpful, the text references well-recognised standards such as IEC 62443-4-2 or ETSI EN 303 645 for deeper dives.[2]

---

## Device identity and hardware root of trust

CRA requires strong identity and protection of integrity. A practical pattern:

- **Per-device identity key** burned in secure NVM or fuses.  
- TrustZone-M or secure enclave used to protect keys and perform crypto.  
- Anti-rollback and lifecycle state in tamper-resistant storage (e.g. EdgeLock secure enclave, One-Time Programmable regions).   

This satisfies confidentiality/integrity requirements and supports secure boot and updates mandated by Annex I(1)(e–g).

---

## Secure boot & update integrity

Key elements:

- Immutable boot ROM verifies the first stage bootloader.  
- Bootloader (e.g. **MCUboot** with Zephyr) verifies signed application images and enforces **version rules** to prevent rollback.  
- A/B or swap-in-place schemes with power-fail safety; well-defined rollback policy.  
- Update packages transported over **TLS/DTLS** and validated using metadata (length, hash, version, signature).   

This directly addresses CRA Annex I requirements for protection of integrity and secure update mechanisms.

---

## Memory safety and least privilege

On MCUs you rarely have an MMU but you usually have an **MPU** and privilege levels:

- Use the MPU to separate **kernel, drivers, stacks and heap**; mark code as X only, data as NX.  
- Run application code in **unprivileged mode** when the RTOS supports it (Zephyr userspace, FreeRTOS MPU port).  
- Enable compiler hardening (stack canaries, FORTIFY, control-flow protection where available).  
- For new modules, consider safer languages (Rust, SPARK, MISRA-C with static analysis).   

These controls support CRA’s requirements around minimising attack surface and preventing exploitation.

---

## Interface and debug control

The device should not be shipped with wide-open interfaces:

- Lock JTAG/SWD in production or protect with strong authentication and secure unlock procedures.  
- Expose only **minimal network services**; require authentication for management; rate-limit login and API calls.  
- Ensure configuration files and parameters are **signed or protected** so that remote configuration cannot weaken security.   

---

## Cryptography and key management

For CRA you must be able to **justify algorithm and key choices** and show they align with state of the art cryptography requirements in Annex I(1)(f).

- Use established suites (e.g. AES-GCM, ChaCha20-Poly1305, ECDHE with P-256 or X25519) and avoid obsolete protocols.  
- Implement **key rotation**, revocation and renewal for device certificates and tokens.  
- Protect time sources and certificate validation (CRL/OCSP, pinned trust anchors).   

---

## RTOS-specific practices

Good RTOS hygiene prevents many vulnerabilities:

- Use separate stacks per task and watch for stack overflow.  
- Integrate watchdog handling into the main scheduling loop.  
- Respect ISR limitations (no blocking calls, bounded work); use queues or mailboxes to defer processing.  
- Initialise security-critical services (HRoT, secure storage, logging) **before** enabling connectivity.   

---

## SBOM and supply-chain controls

CRA requires visibility into components. For embedded firmware:

- Generate an **SBOM per build** in SPDX or CycloneDX, including bootloader, RTOS, middleware, crypto libraries and toolchain.  
- Track third-party licenses and security advisories; maintain allow/deny-lists.  
- Use **VEX documents** to state whether a given CVE affects your product.   

These controls are the bridge between **technical design** and **vulnerability handling** referenced in Annex I(1)(j) and Annex I(2).

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847 "Regulation (EU) 2024/2847 — Annex I essential requirements"
[2]: https://www.iec.ch/dyn/www/f?p=103:38:0::::FSP_ORG_ID,FSP_LANG_ID:1249,25 "IEC 62443 series overview"
