---
id: cra-embedded-controls
slug: /security/cra/embedded-technical-controls
title: Technische Embedded‑Kontrollen (Mapping)
sidebar_position: 4
---

## Zweck dieses Mappings

Diese Seite verknüpft die Anforderungen der Anlage I mit **konkreten Stellschrauben** in Embedded‑Systemen: CPU, SoC, RTOS und Update‑Stack. Nutzen Sie sie bei Architekturentscheidungen oder -reviews und verweisen Sie im CRA‑Technikdossier darauf.[1] Wo sinnvoll, werden etablierte Normen wie IEC 62443‑4‑2 oder ETSI EN 303 645 genannt.[2]

---

## Geräteidentität und Hardware Root of Trust

Der CRA verlangt starke Identität und Integritätsschutz. Ein typisches Muster:

- **Geräteindividuelle Identitätsschlüssel** in sicherem NVM oder Fuses,  
- Nutzung von TrustZone‑M oder Secure Enclave zum Schutz der Schlüssel und für Kryptographie,  
- Anti‑Rollback und Lifecycle‑Zustände in manipulationsgeschütztem Speicher (z. B. Secure Enclave, OTP‑Regionen).  

Damit adressieren Sie Vertraulichkeits‑/Integritätsanforderungen und unterstützen Secure Boot sowie Updates nach Anlage I(1)(e-g).

---

## Secure Boot & Update‑Integrität

- Mehrstufige Boot‑Kette: ROM → Bootloader → Applikations‑Firmware,  
- Signaturprüfung auf jeder Stufe mit offline geschützten Root Keys,  
- Anti‑Rollback‑Mechanismen und A/B‑Slots für sichere Recovery.  

Dokumentieren Sie Algorithmen, Schlüssellängen und Rotations‑Policies im Technikdossier, um Annex I(1)(f-g) abzudecken.[1]

---

## Speicherschutz und Least Privilege

- MPU/MMU einsetzen, um Kernel, Applikationsprozesse und Kommunikations‑Stacks zu trennen,  
- Zugriff auf sensible Register, kritische Peripherie und Secret‑Speicher einschränken,  
- monolithische „Superuser‑Firmware“ vermeiden und stattdessen stark eingeschränkte Dienste mit kontrollierter IPC nutzen.  

Damit erfüllen Sie Anforderungen an **Least Privilege** und **Resilienz** nach Anlage I(1)(a-d).

---

## Sichere Kommunikation

- TLS/DTLS oder gleichwertige Mechanismen für alle exponierten Schnittstellen (WAN, LAN, Diagnose) erzwingen,  
- Zertifikate streng validieren, bei Bedarf Pinning und CRL/OCSP einsetzen,  
- Konfigurations‑Protokolle (CLI, Web, APIs) mit starker Authentifizierung und ggf. MFA schützen.  

Richten Sie TLS‑Profile an ETSI EN 303 645 oder ähnlichen Leitlinien aus, um die regulatorische Argumentation zu vereinfachen.[2]

---

## Logging und Telemetrie

- Eine **Event‑Taxonomie** definieren (Auth, Updates, kritische Fehler, Admin‑Aktionen),  
- kritische Logs lokal manipulationssicher speichern und sichere Export‑Pfade bereitstellen (z. B. syslog über TLS, gesichertes MQTT),  
- personenbezogene Daten in Logs minimieren (Datensparsamkeit).  

Logging unterstützt die Pflichten zur Erkennung, zum Schwachstellenmanagement und zur Incident‑Meldung (Anlage I und Artikel 53-57).[1]

---

## Updates und Konfiguration

- **Signierte Updates** mit Verifikation vor Installation und Recovery‑Mechanismen implementieren,  
- zeitgesteuerte oder gestaffelte Updates für industrielle Umgebungen unterstützen,  
- Management‑Schnittstellen bereitstellen, mit denen Versionen, Update‑Status und Sicherheitszustand eingesehen werden können.  

---

## Verbindung zu SBOM und Schwachstellenmanagement

- Jede Firmware‑Image‑Version einem Build‑Identifier und einer SBOM zuordnen,  
- SBOMs aktualisieren, wenn Komponenten oder Konfigurationen sich ändern,  
- VEX einsetzen, um Exploitability von CVEs mit Bezug zu Ihren Komponenten zu kommunizieren.  

Dies adressiert die Punkte (c-f) der Anlage I(2) zu Schwachstellen‑Handling und Updates.[1]

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847 "Regulation (EU) 2024/2847 — Annex I"  
[2]: https://www.etsi.org/ "ETSI standards including EN 303 645"

