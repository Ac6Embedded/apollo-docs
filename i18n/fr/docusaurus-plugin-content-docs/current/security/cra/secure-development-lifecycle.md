---
id: cra-sdl
slug: /security/cra/secure-development-lifecycle
title: Cycle de développement sécurisé (SDL)
sidebar_position: 5
---

## Pourquoi un SDL

Le CRA exige que le produit soit **conçu, développé et produit** avec la cybersécurité en tête (Annexe I(1)).[1] Cela impose un **SDL** structuré, aligné sur des cadres reconnus comme **NIST SSDF** ou **IEC 62443‑4‑1**.[2][3]

Les étapes typiques :

1. Exigences et modélisation de menace,  
2. Revues d’architecture et choix de contrôles techniques,  
3. Implémentation avec garde‑fous (coding standards, analyse statique, gestion des dépendances),  
4. Vérification (tests, fuzzing, revues),  
5. Build sécurisé, signature, SBOM et préparation de la documentation technique.  

[1]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847  
[2]: https://csrc.nist.gov/pubs/sp/800/218/final  
[3]: https://webstore.iec.ch/publication/33615

