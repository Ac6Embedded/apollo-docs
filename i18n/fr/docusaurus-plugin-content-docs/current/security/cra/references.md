---
id: cra-references
slug: /security/cra/references
title: References CRA et ressources
sidebar_position: 99
last_update:
  author: 'Ayoub Bourjilat (AC6)'
  date: '2025-12-18'
---

## Comment utiliser ces references

Cette page rassemble des **sources officielles** et des **standards de support** pour le parcours CRA.

- Utiliser les **sources primaires CRA** pour verifier toute interpretation legale ou cas limite.  
- Utiliser les **liens de guidance/standardisation** pour suivre l'evolution des standards harmonises (PT1/PT2/PT3, standards verticaux).  
- Utiliser les **standards SDL, vulnerabilites, SBOM, IoT baseline** comme appui technique concret pour vos decisions documentees dans le dossier technique CRA.   

Chaque page du tutoriel renvoie ici quand elle s'appuie sur l'un de ces documents externes.


## Sources primaires CRA

- Regulation (EU) 2024/2847 - Cyber Resilience Act  
  - Editeur : Journal Officiel de l'UE (EUR-Lex)  
  - URL : https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847  
  - Resume : texte legal contraignant du CRA.
- Cyber Resilience Act - Page Commission  
  - Editeur : Commission europeenne (DG CONNECT)  
  - URL : https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act  
  - Resume : hub officiel avec vue d'ensemble et mises a jour.
- CRA - Summary of the legislative text  
  - Editeur : Commission europeenne  
  - URL : https://digital-strategy.ec.europa.eu/en/policies/cra-summary  
  - Resume : resume en langage clair de la portee, obligations, annexes.
- CRA - Conformity assessment  
  - Editeur : Commission europeenne  
  - URL : https://digital-strategy.ec.europa.eu/en/policies/cra-conformity-assessment  
  - Resume : auto vs tierce partie ; categories important/critical.
- CRA - Standardisation  
  - Editeur : Commission europeenne  
  - URL : https://digital-strategy.ec.europa.eu/en/policies/cra-standardisation  
  - Resume : demande de standardisation aux ESOs (CEN/CENELEC/ETSI) pour les standards harmonises.
- CRA - Reporting obligations  
  - Editeur : Commission europeenne  
  - URL : https://digital-strategy.ec.europa.eu/en/policies/cra-reporting  
  - Resume : early warning et incident reporting vers ENISA.

## Guidance CRA

- CRA Implementation FAQ  
  - Editeur : Commission europeenne  
  - URL : https://ec.europa.eu/newsroom/dae/redirection/document/122331  
  - Resume : clarifications sur la portee, traitement FOSS, reporting.
- STAN4CRA - Portail ESO pour la standardisation CRA  
  - Editeur : CEN/CENELEC/ETSI  
  - URL : https://www.stan4cra.eu/  
  - Resume : suivi des livrables de standardisation CRA et engagement.
- ETSI Cyber Security - section CRA  
  - Editeur : ETSI  
  - URL : https://www.etsi.org/technologies/cyber-security#mytoc5  
  - Resume : activites ETSI et drafts pertinents pour le CRA.

## Pratiques securite developpeur (SDL)

- NIST SP 800-218 - Secure Software Development Framework (SSDF) v1.1  
  - Editeur : NIST  
  - URL : https://csrc.nist.gov/pubs/sp/800/218/final  
  - Resume : SDL base sur des resultats, aligne sur les controles lifecycle Annexe I.
- IEC 62443-4-1 - Exigences SDL produit securise  
  - Editeur : IEC  
  - URL : https://webstore.iec.ch/publication/33615  
  - Resume : exigences SDL pour produits industriels/embarques.

## Vulnerability handling

- ISO/IEC 29147 - Vulnerability disclosure  
  - Editeur : ISO/IEC JTC 1/SC 27  
  - URL : https://www.iso.org/standard/72311.html  
  - Resume : pratiques de divulgation coordonnee (CVD).
- ISO/IEC 30111 - Vulnerability handling processes  
  - Editeur : ISO/IEC JTC 1/SC 27  
  - URL : https://www.iso.org/standard/69725.html  
  - Resume : intake interne, triage, remediation.

## SBOM et VEX

- Specification SPDX (ISO/IEC 5962)  
  - Editeur : Linux Foundation / ISO  
  - URL : https://spdx.dev/specifications/  
  - Resume : format SBOM pour composants logiciels.
- Specification CycloneDX (ECMA-424)  
  - Editeur : OWASP / Ecma International  
  - URL : https://cyclonedx.org/specification/overview/  
  - Resume : SBOM avec support hardware/services et modele VEX.
- Vulnerability Exploitability eXchange (VEX)  
  - Editeur : CISA  
  - URL : https://www.cisa.gov/sbom/vex  
  - Resume : statut d'exploitabilite de vulnerabilites connues.

## Baselines embarque / IoT

- ETSI EN 303 645 - Cyber Security for Consumer IoT  
  - Editeur : ETSI  
  - URL : https://www.etsi.org/deliver/etsi_en/303600_303699/303645/02.01.01_60/en_303645v020101p.pdf  
  - Resume : controles de base pour devices connectes.
- IEC 62443-4-2 - Exigences techniques de securite pour composants IACS  
  - Editeur : IEC  
  - URL : https://webstore.iec.ch/publication/34421  
  - Resume : exigences techniques pour composants embarques/industriels.
- ENISA - Baseline Security Recommendations for IoT  
  - Editeur : ENISA  
  - URL : https://www.enisa.europa.eu/publications/baseline-security-recommendations-for-iot  
  - Resume : bonnes pratiques IoT/embarque.

## Notes sur les standards harmonises (Dec 2025)

- A Dec 2025, aucun standard CRA harmonise n'a encore ete cite au JO. La demande de standardisation de la Commission aux ESOs est en cours. En attendant, les manufacturers peuvent s'appuyer sur des standards internationaux/europeens robustes (ex. IEC 62443-4-1/4-2, ETSI EN 303 645) et des cadres reconnus (ex. NIST SSDF). La Commission peut adopter des common specifications si necessaire (Art. 27).  


