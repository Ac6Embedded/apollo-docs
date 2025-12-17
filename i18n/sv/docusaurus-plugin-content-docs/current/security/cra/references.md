---
id: cra-references
slug: /security/cra/references
title: CRA-referenser och resurser
sidebar_position: 99
---

## Så använder du referenserna

Den här sidan samlar **auktoritativa källor** och **stödjande standarder** för CRA-guiden.

- Använd **CRA primärkällor** för att verifiera tolkningar eller gränsfall.  
- Använd **guider och standardiseringslänkar** för att följa harmoniserade standarder (PT1/PT2/PT3, vertikala produktstandarder).  
- Använd **SDL-, sårbarhets-, SBOM- och IoT-baslinestandarder** som teknisk ryggrad för beslut i din CRA technical file.  

Varje sida i serien länkar hit när den bygger på någon av dessa externa källor.


## CRA primärkällor

- Regulation (EU) 2024/2847 - Cyber Resilience Act
  - Utgivare: Official Journal of the EU (EUR-Lex)
  - URL: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847
  - Kort: Bindande lagtext för CRA.
- Cyber Resilience Act - kommissionssida
  - Utgivare: Europeiska kommissionen (DG CONNECT)
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
  - Kort: Central nav med officiell översikt och uppdateringar.
- CRA - Summary of the legislative text
  - Utgivare: Europeiska kommissionen
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-summary
  - Kort: Enkel sammanfattning av scope, skyldigheter, bilagor.
- CRA - Conformity assessment
  - Utgivare: Europeiska kommissionen
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-conformity-assessment
  - Kort: Självbedömning vs tredjepartsbedömning; important/critical-kategorier.
- CRA - Standardisation
  - Utgivare: Europeiska kommissionen
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-standardisation
  - Kort: Standardiseringsuppdrag till ESO:er (CEN/CENELEC/ETSI) för harmoniserade standarder.
- CRA - Reporting obligations
  - Utgivare: Europeiska kommissionen
  - URL: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
  - Kort: Early warning och incidentrapportering till ENISA.

## CRA-vägledning

- CRA Implementation FAQ
  - Utgivare: Europeiska kommissionen
  - URL: https://ec.europa.eu/newsroom/dae/redirection/document/122331
  - Kort: Förtydliganden om scope, FOSS-behandling, rapportering.
- STAN4CRA - ESO-portal för CRA-standardisering
  - Utgivare: CEN/CENELEC/ETSI
  - URL: https://www.stan4cra.eu/
  - Kort: Följer standardiseringsleverabler och deltagande.
- ETSI Cyber Security - CRA-avsnitt
  - Utgivare: ETSI
  - URL: https://www.etsi.org/technologies/cyber-security#mytoc5
  - Kort: ETSI-aktiviteter och utkast relevanta för CRA.

## Utvecklarpraxis (SDL)

- NIST SP 800-218 - Secure Software Development Framework (SSDF) v1.1
  - Utgivare: NIST
  - URL: https://csrc.nist.gov/pubs/sp/800/218/final
  - Kort: Utfallsbaserad SDL, alignad mot CRA bilaga I livscykelkontroller.
- IEC 62443-4-1 - Secure product development lifecycle requirements
  - Utgivare: IEC
  - URL: https://webstore.iec.ch/publication/33615
  - Kort: SDL-krav för industriella/inbyggda produkter.

## Sårbarhetshantering

- ISO/IEC 29147 - Vulnerability disclosure
  - Utgivare: ISO/IEC JTC 1/SC 27
  - URL: https://www.iso.org/standard/72311.html
  - Kort: Praktiker för Coordinated Vulnerability Disclosure (CVD).
- ISO/IEC 30111 - Vulnerability handling processes
  - Utgivare: ISO/IEC JTC 1/SC 27
  - URL: https://www.iso.org/standard/69725.html
  - Kort: Internt inflöde, triage, åtgärdsprocesser.

## SBOM och VEX

- SPDX Specification (ISO/IEC 5962)
  - Utgivare: Linux Foundation / ISO
  - URL: https://spdx.dev/specifications/
  - Kort: SBOM-format för mjukvarukomponenter.
- CycloneDX Specification (ECMA-424)
  - Utgivare: OWASP / Ecma International
  - URL: https://cyclonedx.org/specification/overview/
  - Kort: SBOM med stöd för hårdvara/tjänster och VEX-modell.
- Vulnerability Exploitability eXchange (VEX)
  - Utgivare: CISA
  - URL: https://www.cisa.gov/sbom/vex
  - Kort: Kommunicerar exploaterbarhet för kända sårbarheter.

## Embedded / IoT-baslinjer

- ETSI EN 303 645 - Cyber Security for Consumer IoT
  - Utgivare: ETSI
  - URL: https://www.etsi.org/deliver/etsi_en/303600_303699/303645/02.01.01_60/en_303645v020101p.pdf
  - Kort: Baseline-kontroller för uppkopplade enheter.
- IEC 62443-4-2 - Technical security requirements for IACS components
  - Utgivare: IEC
  - URL: https://webstore.iec.ch/publication/34421
  - Kort: Tekniska krav för inbyggda/industriella komponenter.
- ENISA - Baseline Security Recommendations for IoT
  - Utgivare: ENISA
  - URL: https://www.enisa.europa.eu/publications/baseline-security-recommendations-for-iot
  - Kort: Praktiska goda råd för IoT/inbyggda system.

## Not om harmoniserade standarder (dec 2025)

- Per december 2025 har CRA-harmoniserade standarder ännu inte citerats i OJ. Kommissionens standardiseringsuppdrag till ESO:er pågår. Tills citation sker kan tillverkare luta sig mot robusta internationella/europeiska standarder (t.ex. IEC 62443-4-1/-4-2, ETSI EN 303 645) och välkända ramverk (t.ex. NIST SSDF). Kommissionen kan anta common specifications vid behov (CRA art. 27).
