---
id: cra-fundamentals
slug: /security/cra/fundamental-security-requirements
title: Grundlegende Sicherheitsanforderungen
sidebar_position: 3
---

## Überblick über die Anforderungen der Anlage I

In Anlage I definiert der CRA wesentliche Cybersicherheitsanforderungen an Produkte mit digitalen Elementen. Für Embedded‑Teams ist es hilfreich, sie in **praxisnahe Themenblöcke** zu gliedern: Secure Design, Updates, Schwachstellenmanagement, Dokumentation und Support.[1]

---

## Secure Design und sichere Defaults

- Sichere Standard‑Konfigurationen vorsehen (keine globalen Default‑Passwörter, minimale offenliegende Ports, begrenzte Dienste),  
- Fähigkeiten jedes Komponenten‑Typs auf das Notwendige begrenzen (Least Privilege),  
- gefährliche Zustände auch bei Fehlern oder bösartigen Eingaben vermeiden.  

Damit adressieren Sie v. a. Anlage I(1)(a–d).

---

## Datenverarbeitung und Vertraulichkeit

- Vertraulichkeit und Integrität der verarbeiteten, gespeicherten und übertragenen Daten schützen,  
- unnötige Datensammlung – insbesondere personenbezogener Daten – vermeiden,  
- Datenflüsse, Speicherorte und angewandte Schutzmaßnahmen (Verschlüsselung, Access Control) dokumentieren.  

---

## Sichere Update‑Mechanismen

- Einen robusten Update‑Mechanismus bereitstellen, der Schwachstellen während des gesamten Supportzeitraums beheben kann,  
- Updates vor Installation authentifizieren und Integrität prüfen (Signatur, Hash, Vertrauenskette),  
- Verhalten bei Fehlern (Rollback, degradierter Modus, Alarme) dokumentieren.  

Dies ist Kern von Anlage I(2)(a–c).

---

## Schwachstellenmanagement und Support

- Prozesse einrichten, um Schwachstellen zu empfangen, zu bewerten und zu beheben (CVD, PSIRT),  
- Supportzeitraum klar definieren und gegenüber Kunden kommunizieren,  
- Advisories und Updates rechtzeitig veröffentlichen, insbesondere bei kritischen Schwachstellen.  

Hier geht es um Anlage I(2)(d–f) und die Artikel 53–57.

---

## Dokumentation und Transparenz

- Technische Doku pflegen, die Architektur, Sicherheitskontrollen und Abhängigkeiten beschreibt (siehe [Documentation & SBOM](./documentation-and-sbom)),  
- Nutzern Informationen zu Updates, Restrisiken und sicherer Konfiguration bereitstellen (Anlage II),  
- Entscheidungs‑ und Begründungsspuren aufbewahren, um die Konformitätsbewertung zu erleichtern.  

---

## Anforderungen mit Engineering‑Tasks verknüpfen

Damit die Anforderungen tatsächlich umgesetzt werden, sollten Sie sie direkt mit Issues, Epics oder technischen Requirements verknüpfen, z. B.:

- `CRA-I1-default-creds-removed` — Entfernen dokumentierter Default‑Credentials,  
- `CRA-I2-update-rollback-prevention` — Anti‑Rollback‑Mechanismus auf Zielhardware getestet,  
- `CRA-I2-vuln-intake-process` — formalisierter Vulnerability‑Intake‑Prozess.  

So wird die Konformität im Audit leichter nachweisbar und die Verbindung zur **Developer Checklist** klar.

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847 "Regulation (EU) 2024/2847 — Annex I"

