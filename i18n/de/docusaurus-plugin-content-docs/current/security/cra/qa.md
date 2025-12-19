---
id: cra-qa
slug: /security/cra/qa
title: CRA Q&A
sidebar_position: 11

last_update:
  author: 'Ayoub Bourjilat (AC6)'
  date: '2025-12-19'
---

## Unsere Auslegung des Rechtstextes

Dieses Q&A gibt praxisnahe Hinweise zur Auslegung des Cyber Resilience Act (Verordnung (EU) 2024/2847). Es spiegelt unseren technischen Lese­stand wider. Es ist keine Rechtsberatung. Die Konformität hängt vom Produktscope, dem vorgesehenen Gebrauch, der Betriebsumgebung, der Einstufung (normal/important/critical), den Rollen in der Lieferkette und dem gewählten Konformitätsbewertungsverfahren ab. Validieren Sie Entscheidungen mit Ihrer Rechtsberatung und ggf. mit Ihrer Konformitäts-/Notifizierten Stelle.

Fragen? Schreiben Sie uns an info@ac6-training.com.

---

### F1) Verlangt der CRA eine definierte Supportdauer?

Ja. Der Hersteller muss eine Supportperiode für Sicherheit festlegen, deren Enddatum kommunizieren und währenddessen Vulnerability Handling und Sicherheits­updates bereitstellen.
- **Supportperiode festlegen**: basierend auf erwarteter Nutzungsdauer, Nutzer­erwartungen, Art/Zweck des Produkts, Betriebsumgebung und Supportzeiten der Kern­komponenten.[2][5]
- **Risikobewertung pflegen** während der Supportperiode.[2]
- **Transparenz für Nutzer**: Enddatum (mindestens Monat/Jahr) muss beim Kauf klar sein; wo möglich, Nutzer zum Supportende benachrichtigen.[6]
- **Während des Supports**: Schwachstellen (auch in Komponenten) behandeln und Sicherheitsupdates liefern.[2][8]
Der CRA schreibt keine fixe Jahreszahl vor; die Dauer ist herstellerdefiniert, muss aber risiko-/lebenszyklus­basiert begründet und für Nutzer sowie im technischen Dossier dokumentiert werden.[2][5][6]

### F2) Ist ein eingelötetes Drittanbieter-Compute-Modul (MCU/Firmware) ein Produkt? Und das Endgerät?

Oft ja: das Modul ist ein PDE, und das Endprodukt ist ebenfalls ein PDE.
- Wird das Modul separat auf dem EU-Markt bereitgestellt, fällt es unter die PDE-Definition, da der CRA „gesondert in Verkehr gebrachte Hardware-/Software­komponenten“ einschließt.[1]
- **Modulpflichten** (bei separatem Verkauf): Risikobewertung, Annex-I-Kontrollen, Vulnerability Handling, technische Dokumentation, Benutzer-/Integrator­hinweise und das passende Konformitätsverfahren.[2][7][8]
- **Pflichten des Endprodukts**: der Endhersteller bleibt für die CRA-Konformität des Gesamtprodukts verantwortlich (Modul + eigene Software + ggf. Remote Data Processing).[1][2]
- **Integrations-Due Diligence**: Drittkomponenten (inkl. OSS) dürfen die Cybersicherheit nicht kompromittieren; üben Sie die gebotene Sorgfalt.[3]
Praktisch sollte der Modul­anbieter Security-Dokumente liefern (SBOM, Support-/Update-Policy, Secure-Config-Hinweise); der Hersteller des Endprodukts muss trotzdem eine System-SBOM und einen Remediationsplan führen, der den Modul-Stack abdeckt.[7][8]

### F3) Alternativen zu Secure Boot, um sicherzustellen, dass die richtige Software auf dem MPU läuft?

Der CRA ist technologieneutral. Er fordert Integrität, autorisierten Zugriff und sichere Update-Distribution nach Risiko.[2][7][8]
Übliche Muster:
- **Signaturprüfung beim Boot/Laden**: Root of Trust erlaubt nur autorisierte Images (direkter Integritäts­schutz).[7]
- **Measured Boot + Remote Attestation**: Gerät misst die Bootkette; Backend autorisiert nur freigegebene Messwerte (nützlich bei eingeschränkter lokaler Durchsetzung).[7]
- **Allow-Listing zur Laufzeit** (OS/Hypervisor erlaubt nur signierte Binärdateien) mit geschützten Schlüsseln/Konfigs.[7]
- **Sichere Update-Pipeline**: signierte Updates + Anti-Rollback + sichere Recovery, damit vertrauenswürdige Software über den Lebenszyklus erzwungen wird.[7][8][12]
Die verlässlichsten Designs setzen auf kryptografische Authentizität und geschützte Schlüsselspeicherung; Varianten unterscheiden sich primär im Ort der Durchsetzung.[7]

### F4) Müssen Debug-Ports deaktiviert werden, wenn das PDE in einem gesicherten Bereich steht?

Der CRA sagt nicht „JTAG/SWD/UART immer deaktivieren“. Er verlangt, die Angriffsfläche zu minimieren und unbefugten Zugriff risikobasiert zu verhindern (Verwendungszweck, vorhersehbarer Missbrauch, Nutzungsbedingungen).[2][7]
Typischer Ansatz:
- Debug standardmäßig deaktivieren oder starke Kontrolle verlangen (kryptografisches Unlock, Gerätefreigabe, Tamper-Evidence, gesteuerter Service-Workflow).[7]
- Wenn Debug nötig bleibt: physische/prozedurale Kontrollen dokumentieren (Zugriffslogs, Rollen, Siegel) und Restrisiko in Risikoanalyse und technischer Dokumentation begründen.[2][7]
Ein geschützter Bereich senkt das Risiko, ersetzt aber nicht die Behandlung von Debug als sicherheitsrelevante Schnittstelle, wenn er Umgehung/Extraktion ermöglichen kann.[2][7]

### F5) Linux-basiertes Produkt: müssen Kernel/Userland-Schwachstellen behandelt werden oder nur die App?

Das OS gehört dazu. Linux (Kernel + Userland) ist Teil der ausgelieferten Angriffsfläche.[1][8]
- **Komponenten-Sichtbarkeit**: SBOM in gängigem maschinenlesbarem Format (mindestens Top-Level-Abhängigkeiten).[8]
- **Triage**: Anwendbarkeit/Exploierbarkeit für Ihre Konfiguration bewerten; „ohne Verzögerung“ gemäß Risiko beheben (Patch/Mitigation/begründete Akzeptanz).[8]
- **Nutzerinfo**: Advisories zu behobenen Schwachstellen mit Schweregrad und Maßnahmen.[8]
Praktisch: Basis (Distro, Kernel-Config, Packages) einfrieren, SBOM pro Release erzeugen, CVEs für diese Versionen monitoren, nach Exposition/Erreichbarkeit priorisieren.[8][13]

### F6) Produkte auf Industrie-PC (Windows/Linux) oder Raspberry Pi: CRA-konform möglich?

Ja. Der CRA ist plattformagnostisch.[1]
- SBOM pro Release; Schwachstellen in OS + Paketen + App verfolgen; dokumentierten Vulnerability-Prozess haben.[8]
- Sicheren Update-Mechanismus und Supportperiode mit klarem Enddatum bereitstellen.[2][5][6]
- Hardening/Angriffsflächen­reduzierung anwenden (unnötige Dienste aus, Least Privilege, starker Zugriff, Logging/Monitoring).[7]
Unter Windows stützt sich Konformität meist auf kontrollierte Patch-Kanäle, gehärtete Konfigurationen und Asset Management, um Nachweis zu führen, was deployed/unterstützt ist.[7][8][13]

### F6.1) Wann ist ein Bus „zugänglich“ für Nutzer?

Die Risikobewertung betrachtet Zweck und **vorhersehbare Nutzung**, plus Nutzungsbedingungen (Umgebung, Schutzgüter, Nutzungsdauer).[2]
Ist das Öffnen des Gehäuses mit üblichen Werkzeugen realistisch, behandeln Sie interne Busse/Stecker als voraussichtlich zugänglich (Insider/Techniker) und mitigieren Sie:
- Physisch (Siegel, Schlösser, Tamper-Evidence),
- Prozedural (Service-Policy, Zugriffslogs),
- Technisch (Debug aus, authentifizierter Wartungsmodus, Busschutz).[2][7]

### F7) Unser Produkt enthält viel HW/SW außerhalb unseres direkten Einflusses. Was erwartet der CRA?

Der Hersteller, der das PDE in Verkehr bringt, bleibt verantwortlich – auch bei Drittkomponenten.[1][2]
- **Due Diligence**: sicherstellen, dass integrierte Komponenten (OSS eingeschlossen) die Sicherheit nicht kompromittieren.[3]
- **Koordination bei Komponenten-Schwachstellen**: an den Maintainer melden und nach Annex I Teil II remediieren.[4][8]
- **Kompensationskontrollen**: Isolation (MPU/TrustZone/Container), Least Privilege, Segmentierung, sichere Konfig/Hardening, um nicht sofort behebbare Schwachstellen einzuhegen.[7]
Hebel: Lieferantenauswahl, Supportzusagen, SBOM und Updatefähigkeit.[3][8][13]

### F8) Legacy-Seriell (z.B. RS-232/Modbus RTU): muss das verschlüsselt werden?

Der CRA verlangt nicht „verschlüsselt RS-232“. Maßnahmen sind risikobasiert: unbefugten Zugriff verhindern, Vertraulichkeit/Integrität wahren, Angriffsfläche reduzieren.[7]
- Bei physischer Exposition oder Übergang in unsichere Zonen: Zugriffskontrolle (Schlösser), Gateways, Authentifizierung wo möglich, Segmentierung; ggf. Tunneling über sicheren Kanal bei hoher Sensitivität/Kontrollwirkung.[7]
- In einem kontrollierten Schaltschrank mit vertrauenswürdiger Verkabelung können physische Kontrollen genügen, aber Annahmen und Missbrauchsschutz dokumentieren.[2][7]
Schnittstelle in Threat Model/Risikoanalyse aufnehmen und Kontrollen begründen; ignorieren ist nicht vertretbar.[2][7]

### F9) Produkte nach dem CRA-Anwendungsdatum: müssen es Neuentwicklungen sein?

Nein. Maßgeblich ist, wann das Produkt auf den EU-Markt gebracht wird. Die Verordnung gilt ab **11. Dezember 2027**.[10]
- Produkte, die vor dem 11. Dezember 2027 in Verkehr gebracht wurden, unterliegen dem CRA nur bei **wesentlicher Änderung** danach.[9][11]
- Meldepflichten nach Artikel 14 gelten für alle betroffenen Produkte, auch wenn sie vorher platziert wurden.[9][10]
Ältere Designs können nach dem 11. Dezember 2027 platziert werden, wenn sie auf Annex I u.a. gebracht wurden – oft mit Nachrüstungen für Updates, Logging, SBOM/Vuln-Handling.[7][8]

---

## Referenzen

[1] Regulation (EU) 2024/2847 (CRA), Article 3(1) (PDE-Definition inkl. getrennt in Verkehr gebrachter Komponenten)  
[2] CRA, Article 13(1)-(3) (Herstellerpflichten; Risikobewertung; vorgesehene/vernünftigerweise vorhersehbare Nutzung; Aktualisierung während der Supportperiode)  
[3] CRA, Article 13(5) (Due Diligence für Drittkomponenten inkl. OSS)  
[4] CRA, Article 13(6) (Melden von Schwachstellen in integrierten Komponenten; Remediation gem. Annex I Teil II)  
[5] CRA, Article 13(8) (Festlegung der Supportperiode: erwartete Nutzungsdauer, Nutzer­erwartungen, Umgebung, Komponenten-Support)  
[6] CRA, Article 13(18)-(19) (Nutzerinformation; Enddatum der Supportperiode beim Kauf; Support-Ende-Benachrichtigung wo möglich)  
[7] CRA, Annex I Part I(1)-(2)(a)-(m) (wesentliche Sicherheitsanforderungen)  
[8] CRA, Annex I Part II(1)-(7) (Vulnerability Handling, SBOM, Remediation, Advisories, CVD, sichere Updates)  
[9] CRA, Article 69(2)-(3) (Übergangsbestimmungen; Artikel 14 gilt für vor dem Anwendungsdatum platzierte Produkte)  
[10] CRA, Article 71(2) (Anwendungsdatum 11.12.2027; frühere Anwendung für Artikel 14 und Kapitel IV)  
[11] CRA, Article 3 (Definition „wesentliche Änderung“)  
[12] Siehe Annex I Part I(2)(c) und Part II(7)-(8) für Anforderungen an sichere Updates  
[13] CRA, Article 14 (Meldung) + Annex I Part II zum Scope des Vulnerability Handling

