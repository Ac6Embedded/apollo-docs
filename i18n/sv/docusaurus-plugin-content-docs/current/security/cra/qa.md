---
id: cra-qa
slug: /security/cra/qa
title: CRA Q&A
sidebar_position: 11

last_update:
  author: 'Ayoub Bourjilat (AC6)'
  date: '2025-12-19'
---

## Vår tolkning av den juridiska texten

Detta Q&A ger praktisk vägledning för att tolka Cyber Resilience Act (Regulation (EU) 2024/2847). Det återspeglar vår tekniska läsning av CRA just nu. Det är inte juridisk rådgivning. Efterlevnad beror på produktscope, avsett bruk, driftsmiljö, klassificering (normal/important/critical), roller i leveranskedjan och vald conformity assessment-route. Bekräfta beslut med juridisk rådgivare och, vid behov, conformity/notified body.

Frågor? Mejla oss på info@ac6-training.com.

---

### F1) Kräver CRA en definierad supportperiod?

Ja. Tillverkaren ska definiera en supportperiod för säkerhet, kommunicera slutdatum och hantera sårbarheter/uppdateringar under perioden.
- **Definiera supportperiod**: basera på förväntad användningstid, användar­förväntningar, produktens natur/syfte, driftsmiljö och stödperioder för kärnkomponenter.[2][5]
- **Underhåll riskbedömningen** under supportperioden.[2]
- **Synlighet för användare**: slutdatum (minst månad/år) ska vara tydligt vid köp; där möjligt, notifiera vid end-of-support.[6]
- **Under supporten**: hantera sårbarheter (även komponenter) och ge säkerhetsuppdateringar.[2][8]
CRA anger inte ett fast antal år; längden är tillverkarbestämd men ska vara risk-/livscykelbaserad och dokumenterad för användare och technical file.[2][5][6]

### F2) Är en lödd 3rd party-computemodul (MCU/firmware) en produkt? Vad gäller för slut­enheten?

Ofta ja: modulen är ett PDE och slutprodukten är också ett PDE.
- Om modulen släpps separat på EU-marknaden omfattas den, eftersom CRA inkluderar “software or hardware components being placed on the market separately”.[1]
- **Modul­plikter** (när den säljs separat): riskbedömning, Bilaga I-kontroller, sårbarhetshantering, teknisk dokumentation, användar-/integratörsinstruktioner och rätt conformity-route.[2][7][8]
- **Slutproduktens plikter**: slutlig tillverkare ansvarar för hela produkten (modul + egen mjukvara + eventuell remote data processing).[1][2]
- **Integrations-due diligence**: tredjepartskomponenter (inkl. OSS) får inte kompromissa säkerhet; utöva due diligence.[3]
Praktiskt bör modulleverantören ge säkerhetsdokument (SBOM, support-/uppdateringspolicy, secure config-råd); slutproduktens tillverkare måste ändå ha system-SBOM och remediering som täcker modulstacken.[7][8]

### F3) Alternativ till secure boot för att säkerställa rätt mjukvara på MPU?

CRA är teknikneutral. Den kräver integritet, behörig åtkomst och säker uppdateringsdistribution baserat på risk.[2][7][8]
Vanliga mönster:
- **Signaturverifiering vid boot/load**: RoT säkerställer att bara auktoriserade bilder körs (direkt integritetskontroll).[7]
- **Measured boot + remote attestation**: enheten mäter bootkedjan; backend godkänner endast godkända mätningar (nyttigt när lokal enforcement är begränsad).[7]
- **Runtime allow-listing** (OS/hypervisor tillåter bara signerade binärer) med skyddade nycklar/konfig.[7]
- **Säker uppdateringspipeline**: signerade uppdateringar + anti-rollback + säker recovery så betrodd mjukvara upprätthålls över livscykeln.[7][8][12]
De mest tillförlitliga designerna använder kryptografisk autenticitet och skyddad nyckellagring; alternativen varierar bara enforcementplats.[7]

### F4) Måste debug-portar stängas om PDE står i ett begränsat område?

CRA säger inte “stäng alltid JTAG/SWD/UART”. Krav: minimera attackyta och förhindra obehörig åtkomst baserat på risk (avsedd användning, förutsebar missanvändning, användnings­förhållanden).[2][7]
Vanligt arbetssätt:
- Stäng debug som default eller kräv stark kontroll (kryptolåsning, per-enhetsgodkännande, tamper evidence, styrd serviceprocess).[7]
- Om debug måste finnas: dokumentera fysiska/procedurmässiga kontroller (loggar, roller, plomber) och motivera rest­risk i riskbedömning och technical documentation.[2][7]
Ett begränsat område sänker risk men tar inte bort behovet att behandla debug som säkerhetsrelevant om det kan användas för bypass/extraktion.[2][7]

### F5) Linuxbaserad produkt: måste vi hantera kernel/userland-sårbarheter eller bara appen?

Inkludera OS. Linux (kernel + userland) är del av attackytan som skeppas.[1][8]
- **Komponent­synlighet**: SBOM i vanligt maskinläsbart format (minst toppnivåberoenden).[8]
- **Triage**: bedöm tillämplighet/exploaterbarhet för er konfig; åtgärda “utan dröjsmål” i relation till risk (patch/mitigera/motivera).[8]
- **Användarinformation**: advisories för fixade sårbarheter med severitet och åtgärdsråd.[8]
Praktiskt: frys baseline (distro, kernelkonfig, packages), generera SBOM per release, bevaka CVE för dessa versioner, prioritera efter exponering/reachability.[8][13]

### F6) Kan produkter på industri-PC (Windows/Linux) eller Raspberry Pi uppfylla CRA?

Ja. CRA är plattformsneutral.[1]
- SBOM per release; spåra sårbarheter i OS + paket + app; ha en dokumenterad vuln-process.[8]
- Ha säker uppdateringsmekanism och supportperiod med tydligt slutdatum.[2][5][6]
- Applicera hardening/attackytereduktion (stäng oanvända tjänster, least privilege, stark åtkomstkontroll, loggning/monitorering).[7]
Windows-compliance bygger ofta på kontrollerade patchkanaler, låsta konfigurationer och asset management för att bevisa vad som är deployat/stöds.[7][8][13]

### F6.1) När är en buss “åtkomlig” för användare?

Riskbedömningen tar hänsyn till avsett syfte och **rimligen förutsebar användning** samt användningsförhållanden (miljö, tillgångar, användningstid).[2]
Om det är realistiskt att öppna kapsling med vanliga verktyg, behandla interna bussar/headrar som förutsebart åtkomliga (insider/tekniker) och mitigera:
- Fysiskt (plomber, lås, tamper evidence),
- Procedur (servicepolicy, accessloggar),
- Tekniskt (stäng debug, autentiserat serviceläge, buss-skydd).[2][7]

### F7) Produkten innehåller mycket HW/SW vi inte styr. Vad förväntar CRA?

Tillverkaren som placerar PDE på marknaden ansvarar ändå, även med tredjepartskomponenter.[1][2]
- **Due diligence**: säkerställ att integrerade komponenter (inkl. OSS) inte äventyrar säkerhet.[3]
- **Koordinera komponent-sårbarheter**: rapportera till underhållare och åtgärda enligt Bilaga I del II.[4][8]
- **Kompensationskontroller**: isolering (MPU/TrustZone/containers), least privilege, segmentering, säker konfig/hardening för att begränsa sårbarheter du inte kan ta bort direkt.[7]
Leverantörsval, supportåtaganden, SBOM och uppdateringsförmåga är nycklarna till efterlevnad.[3][8][13]

### F8) Äldre seriella portar (t.ex. RS-232/Modbus RTU): måste de krypteras?

CRA kräver inte “kryptera RS-232”. Kontrollerna är riskbaserade: stoppa obehörig åtkomst, skydda konfidentialitet/integritet där relevant, minska attackyta.[7]
- Om fysiskt exponerad eller går genom otillförlitliga zoner: lägg till åtkomstkontroll (lås), gateways, auth där möjligt, segmentering; överväg tunnling via säker kanal vid känslig data/stor kontrollpåverkan.[7]
- Om inne i kontrollerat skåp med tillitade kablar: fysiska kontroller kan räcka, men dokumentera antagandet och hur missbruk förhindras/upptäcks.[2][7]
Inkludera gränssnittet i threat model/riskbedömning och motivera kontroller; att ignorera det är inte försvarbart.[2][7]

### F9) Produkter som placeras efter CRA:s tillämpningsdatum: måste de vara nya designer?

Nej. Tillämpning kopplas till när produkten placeras på EU-marknaden. Förordningen gäller från **11 december 2027**.[10]
- Produkter placerade före 11 december 2027 omfattas bara om de genomgår **substantial modification** efter datumet.[9][11]
- Rapporteringsplikter i Artikel 14 gäller alla berörda produkter, även de som placerats före 11 december 2027.[9][10]
Äldre designer kan placeras efter 11 december 2027 om de uppgraderas till att möta Bilaga I m.m.—ofta krävs omarbetning för uppdateringar, loggning, SBOM/vuln-hantering.[7][8]

---

## Referenser

[1] Regulation (EU) 2024/2847 (CRA), Article 3(1) (PDE-definition inkl. komponenter placerade separat)  
[2] CRA, Article 13(1)-(3) (tillverkarplikter; riskbedömning; avsett/förutsebar användning; uppdatering under supportperiod)  
[3] CRA, Article 13(5) (due diligence för tredjepartskomponenter, inkl. OSS)  
[4] CRA, Article 13(6) (rapportera sårbarheter i integrerade komponenter; åtgärda enligt Bilaga I del II)  
[5] CRA, Article 13(8) (bestäm supportperiod: förväntad användningstid, användar­förväntningar, miljö, komponentstöd)  
[6] CRA, Article 13(18)-(19) (användarinformation; supportslut vid köp; end-of-support-notis där möjligt)  
[7] CRA, Annex I Part I(1)-(2)(a)-(m) (väsentliga cybersäkerhetskrav)  
[8] CRA, Annex I Part II(1)-(7) (sårbarhetshantering, SBOM, åtgärdstider, advisories, CVD, säkra uppdateringar)  
[9] CRA, Article 69(2)-(3) (övergångsbestämmelser; Artikel 14 gäller produkter placerade före tillämpningsdatum)  
[10] CRA, Article 71(2) (tillämpningsdatum 11 dec 2027; tidigare tillämpning för Artikel 14 och Kapitel IV)  
[11] CRA, Article 3 (definition av “substantial modification”)  
[12] Se Bilaga I del I(2)(c) och del II(7)-(8) för krav på säkra uppdateringar  
[13] CRA, Article 14 (rapportering) + Bilaga I del II för scope för sårbarhetshantering

