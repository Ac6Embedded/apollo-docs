---
id: cra-conformity-assessment
slug: /security/cra/conformity-assessment
title: Konformitetsvurdering og CE‑mærkning
sidebar_position: 8
---

## CRA og CE‑økosystemet

CRA er en **CE‑mærkningsforordning**, beslægtet med RED eller EMC: du skal vise, at produktet opfylder sine væsentlige krav, før det bringes i omsætning.[1]  

For mange indlejrede PDE’er er vejen **selv‑evaluering**; for vigtige/kritiske produkter skal en **notified body** involveres efter bilag VI/VIa.[1]

```mermaid
flowchart TD
    Scope[Bekræft PDE-klasse<br/>og status efter bilag III] --> Route{Vigtigt / kritisk?}
    Route -- Nej --> Self[Intern konformitetsvurdering<br/>Bilag VI]
    Route -- Ja --> NB[Notified body involveret<br/>Bilag VIa]
    Self --> Docs[Udarbejd teknisk dokumentation<br/>Bilag VII]
    NB --> Docs
    Docs --> DoC[Declaration of Conformity]
    DoC --> CE[CE‑mærkning & markedsføring]
```

