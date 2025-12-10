---
id: cra-embedded-controls
slug: /security/cra/embedded-technical-controls
title: Cartographie des contrôles techniques embarqués
sidebar_position: 4
---

## Objectif

Cette page relie les exigences de l’Annexe I à des **mécanismes concrets** dans les systèmes embarqués : CPU, SoC, RTOS, chaîne de mise à jour, etc. Utilisez‑la lors des revues d’architecture et citez‑la dans le dossier technique CRA.[1]

---

## Identité et racine de confiance matérielle

- Clé d’identité unique par dispositif stockée en NVM sécurisé ou fusibles,  
- utilisation de TrustZone‑M ou d’un enclave sécurisée pour la crypto,  
- anti‑rollback et états de cycle de vie en stockage résistant aux altérations.  

---

## Secure boot et intégrité des mises à jour

- chaîne de boot multi‑niveaux,  
- vérification de signature à chaque étape,  
- slots A/B et mécanismes de récupération.  

---

## Cloisonnement mémoire et moindre privilège

- séparation noyau / applications / piles réseau via MPU/MMU,  
- limitation de l’accès aux ressources critiques,  
- services privilégiés minimaux avec IPC contrôlée.  

---

## Communication sécurisée, journalisation et mises à jour

- TLS/DTLS ou équivalent sur toutes les interfaces exposées,  
- taxonomie d’événements, logs exportables de manière sécurisée,  
- mises à jour signées avec vérification avant installation et stratégies de rollback.  

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847 "Regulation (EU) 2024/2847 — Annex I"

