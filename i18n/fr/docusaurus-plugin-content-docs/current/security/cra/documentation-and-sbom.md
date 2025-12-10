---
id: cra-docs-sbom
slug: /security/cra/documentation-and-sbom
title: Documentation, informations utilisateur et SBOM
sidebar_position: 6
---

## Documentation technique CRA

L’Annexe VII définit le contenu du **dossier technique** pour l’évaluation de conformité et reflète les demandes de preuves des Articles 16–23.[1] Pour un produit embarqué, ce dossier comprend en général :

- description du produit et usage prévu,  
- diagrammes d’architecture et modèle de menace,  
- description des fonctions de sécurité et des hypothèses,  
- analyse de risques et cartographie vers les exigences de l’Annexe I,  
- description des processus de production/provisioning et de mise à jour,  
- rapports de tests (sécurité, fonctionnel, performance),  
- SBOM et preuves de gestion des vulnérabilités (politique CVD, VEX, incidents).  

Stockez ce dossier dans un espace versionné afin qu’il évolue avec le produit et soit prêt en cas de demande des autorités de surveillance du marché (Article 41).[1]

---

## Informations de sécurité destinées aux utilisateurs (Annexe II)

Le CRA impose aussi des **informations à fournir aux utilisateurs** pour qu’ils puissent exploiter le PDE en sécurité.[2] Par exemple :

- modalités de livraison et d’installation des mises à jour de sécurité (auto vs manuel),  
- **période de support** annoncée pour les mises à jour de sécurité,  
- **risques résiduels significatifs** qui ne peuvent pas être totalement éliminés,  
- conseils de configuration et d’exploitation sécurisée.

Ces informations se retrouvent généralement dans les fiches produit, manuels d’administration et notes de version.

---

## Attentes vis‑à‑vis des SBOM

La SBOM est devenue un élément central pour démontrer la gestion des vulnérabilités connues et la conformité aux points (c)–(f) de l’Annexe I(2).[1]

Bonnes pratiques pour les projets firmware :

- utiliser **SPDX** ou **CycloneDX** comme format d’échange,  
- générer une SBOM **par build et par variante matérielle**,  
- inclure le bootloader, le RTOS/noyau, les middlewares, piles de protocoles, bibliothèques crypto, applications, toolchain et principaux outils de build,  
- stocker les SBOM avec les artefacts de build en CI.  

Joignez des **documents VEX** pour décrire l’exploitabilité des CVE connues et référencez‑les dans vos avis clients (Articles 55–57).[1]

---

## Pack de documentation minimal

Une structure minimale utile :

1. `01-product-and-arch/` – architecture, modèle de menace, liste des fonctions de sécurité.  
2. `02-sdl-and-testing/` – description du SDL, plans de test et résultats.  
3. `03-sbom-and-vuln-handling/` – SBOM, VEX, politique CVD, incidents.  
4. `04-updates-and-provisioning/` – configuration de secure boot, provisioning de clés, flux d’update.  
5. `05-user-facing-info/` – manuels, notes de version et changements sécurité.  

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847 "Regulation (EU) 2024/2847 — Annexes I, II, VII and Articles 16–57"  
[2]: https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act-summary "CRA summary — European Commission"

