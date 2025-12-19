---
id: cra-qa
slug: /security/cra/qa
title: FAQ CRA
sidebar_position: 11

last_update:
  author: 'Ayoub Bourjilat (AC6)'
  date: '2025-12-19'
---

## Notre interprétation du texte juridique

Cette FAQ vise à donner des repères pratiques pour interpréter le Cyber Resilience Act (Règlement (UE) 2024/2847). Elle reflète notre lecture technique du texte à ce jour. Ce n’est pas un avis juridique. La conformité dépend du périmètre produit, de l’usage prévu, de l’environnement d’exploitation, de la classification (normal/important/critical), des rôles dans la chaîne d’approvisionnement et de la procédure d’évaluation de conformité choisie. Validez vos décisions avec votre conseil juridique et, le cas échéant, votre organisme de conformité/notifié.

Des questions ? Écrivez-nous à info@ac6-training.com.

---

### Q1) Le CRA impose-t-il une période de support définie ?

Oui. Le fabricant doit définir une période de support sécurité, en communiquer la fin et assurer le traitement des vulnérabilités et les mises à jour de sécurité pendant cette période.
- **Définir la période de support** : basée sur la durée d’usage attendue, les attentes utilisateurs, la nature/finalité du produit, l’environnement d’exploitation et les périodes de support des composants clés.[2][5]
- **Maintenir l’analyse de risque** durant la période de support.[2]
- **Visibilité utilisateur** : la date de fin (au moins mois/année) doit être claire à l’achat ; si possible, notifier les utilisateurs à la fin du support.[6]
- **Pendant le support** : traiter les vulnérabilités (y compris des composants) et fournir des mises à jour de sécurité.[2][8]
Le CRA ne fixe pas un nombre d’années unique ; la durée est définie par le fabricant mais doit être justifiée (risque/durée de vie) et documentée pour les utilisateurs et dans le dossier technique.[2][5][6]

### Q2) Un module de calcul tiers soudé (MCU/firmware) est-il un produit ? Qu’en est-il du produit fini ?

Souvent oui : le module est un PDE, et le produit fini est aussi un PDE.
- Si le module est mis sur le marché de l’UE séparément, il entre dans la définition de PDE car le CRA inclut « des composants matériels ou logiciels mis séparément sur le marché ».[1]
- **Obligations du module** (s’il est vendu séparément) : analyse de risque, contrôles de l’annexe I, traitement des vulnérabilités, documentation technique, instructions utilisateur/intégrateur, et bonne procédure de conformité.[2][7][8]
- **Obligations du produit fini** : le fabricant final reste responsable de la conformité CRA de l’ensemble (module + votre logiciel + tout traitement de données à distance).[1][2]
- **Due diligence d’intégration** : les composants tiers (dont OSS) ne doivent pas compromettre la cybersécurité ; exercez la diligence requise.[3]
En pratique, le vendeur du module devrait fournir des docs de sécurité (SBOM, politique de support/MAJ, consignes de configuration). Le fabricant du produit fini doit garder une SBOM système et un plan de remédiation couvrant la pile logicielle du module.[7][8]

### Q3) Alternatives au secure boot pour garantir l’exécution du bon logiciel sur le MPU ?

Le CRA est technologique­-neutre. Il exige intégrité, accès autorisé et distribution sécurisée des mises à jour selon le risque.[2][7][8]
Schémas courants :
- **Vérification de signature au boot/chargement** : la racine de confiance n’exécute que des images autorisées (contrôle d’intégrité direct).[7]
- **Measured boot + attestation distante** : l’appareil mesure la chaîne de démarrage ; le backend autorise uniquement les mesures approuvées (utile quand l’enforcement local est limité).[7]
- **Allow-listing à l’exécution** (OS/hyperviseur n’autorise que des binaires signés) avec clés/config protégées.[7]
- **Pipeline de mise à jour sécurisé** : mises à jour signées + anti-rollback + récupération sûre pour maintenir le logiciel de confiance sur le cycle de vie.[7][8][12]
Les designs les plus solides s’appuient sur l’authenticité cryptographique et la protection des clés ; les variantes changent surtout l’emplacement de l’enforcement.[7]

### Q4) Faut-il désactiver les ports de debug si le PDE est en zone restreinte ?

Le CRA ne dit pas « désactivez toujours JTAG/SWD/UART ». Il impose de réduire la surface d’attaque et de prévenir l’accès non autorisé selon le risque (usage prévu, usage raisonnablement prévisible, conditions d’utilisation).[2][7]
Approche typique :
- Désactiver le debug par défaut ou exiger un contrôle fort (déverrouillage cryptographique, autorisation par appareil, preuve de manipulation, processus service maîtrisé).[7]
- Si le debug reste nécessaire, documenter les contrôles physiques/procéduraux (journaux d’accès, rôles, scellés) et justifier le risque résiduel dans l’analyse de risque et la documentation technique.[2][7]
Une zone restreinte réduit le risque mais ne supprime pas la nécessité de traiter le debug comme interface sensible quand il peut permettre contournement/extraction.[2][7]

### Q5) Produit Linux : faut-il gérer les vulnérabilités kernel/userland ou seulement l’app ?

Incluez l’OS. Linux (kernel + userland) fait partie de la surface d’attaque livrée.[1][8]
- **Visibilité composants** : SBOM en format machine courant (au moins dépendances de haut niveau).[8]
- **Triage** : évaluer applicabilité/exploitabilité pour votre configuration ; remédier « sans délai » selon le risque (patch/mitigation/acceptation justifiée).[8]
- **Info utilisateur** : avis pour vulnérabilités corrigées avec sévérité et guidance.[8]
Pratique : geler un socle (distro, config noyau, packages), générer une SBOM par release, surveiller les CVE de ces versions, prioriser selon exposition/chemins atteignables.[8][13]

### Q6) Produits sur PC industriel (Windows/Linux) ou Raspberry Pi : conformes au CRA ?

Oui. Le CRA est agnostique à la plateforme.[1]
- SBOM par release ; suivre les vulnérabilités OS + packages + app ; processus documenté de gestion des vulnérabilités.[8]
- Mécanisme de mise à jour sécurisé et période de support avec date de fin claire.[2][5][6]
- Hardening/réduction de surface (services inutiles off, least privilege, contrôle d’accès fort, logs/monitoring).[7]
Sur Windows : s’appuyer sur des canaux de patch contrôlés, configurations verrouillées et gestion d’actifs pour prouver ce qui est déployé/supporté.[7][8][13]

### Q6.1) Quand un bus est-il « accessible » pour un utilisateur ?

L’analyse de risque considère l’usage prévu et **l’usage raisonnablement prévisible**, plus les conditions d’utilisation (environnement, actifs, durée d’usage).[2]
Si ouvrir le boîtier avec des outils courants est réaliste, traitez les bus/connecteurs internes comme accessibles (au moins pour l’initié/technicien) et mitigez :
- Physique (scellés, serrures, tamper evidence),
- Procédural (politique de service, journaux d’accès),
- Technique (debug off, mode maintenance authentifié, protections bus).[2][7]

### Q7) Le produit inclut beaucoup de HW/SW hors de notre contrôle. Attentes du CRA ?

Le fabricant qui met le PDE sur le marché reste responsable, même avec des composants tiers.[1][2]
- **Due diligence** : s’assurer que les composants intégrés (OSS compris) ne compromettent pas la sécurité.[3]
- **Coordination vulnérabilités composants** : signaler au mainteneur et remédier selon l’annexe I, partie II.[4][8]
- **Contrôles compensatoires** : isolation (MPU/TrustZone/containers), least privilege, segmentation, configuration/hardening pour contenir les vulnérabilités non corrigées immédiatement.[7]
Levier clés : choix fournisseurs, engagements de support, SBOM et capacité de mise à jour.[3][8][13]

### Q8) Ports série legacy (RS-232/Modbus RTU) : chiffrement obligatoire ?

Le CRA n’impose pas « chiffrez RS-232 ». Les contrôles sont basés sur le risque : empêcher l’accès non autorisé, protéger confidentialité/intégrité si pertinent, réduire la surface.[7]
- Si interface exposée ou traverse des zones non fiables : ajouter contrôle d’accès (verrous), passerelles, authentification si possible, segmentation ; envisager un tunnel sécurisé si données sensibles/impact élevé.[7]
- Si dans une armoire contrôlée avec câblage de confiance : des contrôles physiques peuvent suffire, mais documentez l’hypothèse et comment le mésusage est empêché/détecté.[2][7]
Incluez l’interface dans la threat model/analyse de risque et justifiez les contrôles ; l’ignorer n’est pas défendable.[2][7]

### Q9) Produits placés après la date d’application CRA : doivent-ils être des designs neufs ?

Non. L’applicabilité est liée à la date de mise sur le marché. Le Règlement s’applique à partir du **11 décembre 2027**.[10]
- Les produits placés avant le 11 décembre 2027 sont soumis au CRA uniquement en cas de **modification substantielle** après cette date.[9][11]
- Les obligations de notification de l’article 14 s’appliquent à tous les produits concernés, y compris ceux placés avant le 11 décembre 2027.[9][10]
Les anciens designs peuvent être placés après cette date s’ils sont mis à niveau pour respecter l’annexe I et obligations associées—souvent en retravaillant mises à jour, logs, SBOM/gestion de vulnérabilités.[7][8]

---

## Références

[1] Regulation (EU) 2024/2847 (CRA), Article 3(1) (définition de PDE incluant les composants mis séparément)  
[2] CRA, Article 13(1)-(3) (obligations fabricant ; analyse de risque ; usage prévu/prévisible ; mise à jour durant le support)  
[3] CRA, Article 13(5) (due diligence pour composants tiers, dont OSS)  
[4] CRA, Article 13(6) (signalement des vulnérabilités dans les composants intégrés ; remédiation annexe I, partie II)  
[5] CRA, Article 13(8) (détermination de la période de support : durée d’usage attendue, attentes, environnement, support composants)  
[6] CRA, Article 13(18)-(19) (info utilisateur ; date de fin de support à l’achat ; notification de fin de support si possible)  
[7] CRA, Annex I Part I(1)-(2)(a)-(m) (exigences essentielles)  
[8] CRA, Annex I Part II(1)-(7) (gestion des vulnérabilités, SBOM, remédiation, avis, CVD, mises à jour sécurisées)  
[9] CRA, Article 69(2)-(3) (dispositions transitoires ; Article 14 s’applique aux produits placés avant la date d’application)  
[10] CRA, Article 71(2) (date d’application 11 déc 2027 ; application plus tôt pour Article 14 et Chapitre IV)  
[11] CRA, Article 3 (définition de « substantial modification »)  
[12] Voir Annex I Part I(2)(c) et Part II(7)-(8) pour les attentes sur les mises à jour sécurisées  
[13] CRA, Article 14 (notification) + Annexe I Part II pour le périmètre de gestion des vulnérabilités

