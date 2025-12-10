---
id: cra-developer-requirements
slug: /security/cra/developer-requirements
title: Exigences développeur et responsabilités
sidebar_position: 2.5
---

## Pourquoi les développeurs ont des obligations explicites

Le CRA assigne des obligations de cybersécurité aux fabricants, importateurs, distributeurs et **fournisseurs**, mais la plupart des preuves se trouvent dans les backlogs d’ingénierie.[1] Cette page traduit les exigences de l’Annexe I et des Articles 16–24 en responsabilités concrètes pour les équipes de développement, afin que les responsables firmware, plateforme et DevOps puissent démontrer que les contrôles sont **attribués**, **mesurés** et **revus**.

## Matrice de couverture produit

| Clause CRA | Activité portée par les développeurs | Exemples de livrables |
| --- | --- | --- |
| Annexe I(1)(a–d) | Modélisation de menace, exigences de sécurité, validation d’architecture | Diagramme de contexte, notes STRIDE, mitigations documentées |
| Annexe I(1)(e–g) | Paramètres par défaut sécurisés, durcissement des interfaces, profils crypto | Matrice de configuration sécurisée, spec d’authentification API, crypto‑BOM |
| Annexe I(1)(h–j) | Stratégie de journalisation, points d’ancrage pour la gestion des vulnérabilités | Taxonomie d’événements, design de l’export de logs, automatisation PSIRT |
| Annexe I(2)(a–f) | Mécanisme de mise à jour, automatisation SBOM/VEX, outils de support | Diagrammes de pipelines d’update, jobs SBOM en CI, déclaration de période de support |
| Articles 21–24 | Coordination avec fournisseurs, importateurs et distributeurs | Calendrier de livraison firmware, paquet d’évidence pour ODM/OEM, matrices RACI |

Utilisez cette matrice pour élaborer RACI et contrats afin que chaque clause du CRA ait un propriétaire d’ingénierie identifiable.

---

## Garde‑fous d’architecture et de spécification

1. **Confirmation du périmètre.** Revoir la classification PDE, le statut Annexe III et l’environnement d’exploitation.  
2. **Base d’exigences de sécurité.** Convertir le modèle de menace en exigences taguées avec les clauses de l’Annexe I.  
3. **Revues d’architecture.** Organiser des revues multi‑disciplines pour l’identité, le secure boot, la sécurité des communications et le chemin de mise à jour.  

---

## Garde‑fous d’implémentation

- Règles de codage et revues formalisées (MISRA‑C, CERT C, règles Rust `unsafe`).  
- Gouvernance des dépendances (listes d’acceptation/refus, revue des bibliothèques ajoutées).  
- Analyse statique, fuzzing et tests comme barrières bloquantes en CI.  

---

## Obligations côté release engineering

- Fournir des artefacts signés, des logs de signature et des métadonnées (hash, numéro de build, référence SBOM).  
- Effectuer des répétitions de mise à jour sur banc matériel (scénarios normaux, coupures, rollback).  
- Rendre le **période de support** visible pour les opérateurs (API de management, CLI, app).  

---

## Collaboration avec la chaîne d’approvisionnement

Les Articles 21–24 attendent un transfert fluide de l’information de sécurité vers importateurs, distributeurs et OEM :  

- paquet d’évidence CRA par version (SBOM, VEX, résumé SDL, rapports de tests),  
- documentation de mise à jour sécurisée pour les partenaires,  
- partage des avis de vulnérabilité dans un cadre de divulgation coordonnée.  

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847 "Regulation (EU) 2024/2847 — Annex I and Articles 16–24"

