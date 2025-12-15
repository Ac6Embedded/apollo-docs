---
id: security-overview
slug: /security
title: Vue d'ensemble - Pourquoi la securite embarquee
sidebar_label: Vue d'ensemble
sidebar_position: 1
---
import DocCardList from '@theme/DocCardList';

Les systemes embarques sont de plus en plus connectes et critiques pour la securite. Une seule vulnerabilite peut provoquer des dangers pour les personnes, des interruptions de service, une fuite de propriete intellectuelle ou une non-conformite reglementaire. Integrer la securite des la conception reduit le risque sur tout le cycle de vie et le cout total de possession.

Facteurs cles :

- Securite fonctionnelle : eviter les comportements dangereux induits par des entrees malveillantes ou des fautes.
- Conformite : repondre aux nouvelles reglementations (par ex. l'EU Cyber Resilience Act).
- Resilience : limiter le perimetre d'impact et permettre une reprise securisee.
- Confiance : proteger les donnees, la propriete intellectuelle et l'integrite de la chaine d'approvisionnement.

Piliers principaux :

- Analyse de menace (threat modeling) et architecture securisee
- Racine de confiance, secure boot et integrite des mises a jour
- Protection memoire et moindre privilege
- Communication securisee et gestion des cles
- Gestion des vulnerabilites et reponse aux incidents

Etape suivante : explorez les obligations du CRA pour les developpeurs logiciels et leur impact sur les projets embarques. Voir Securite > CRA > References pour les liens officiels et les normes.

## Explorer les sujets securite

<DocCardList
  items={[
    {type: 'link', label: 'CRA overview', href: '/docs/security/cra'},
  ]}
/>
