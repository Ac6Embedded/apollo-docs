---
id: cra-developer-requirements
slug: /security/cra/developer-requirements
title: Utvecklarens krav och ansvar
sidebar_position: 2.5
---

## Varför CRA ger explicita skyldigheter för utvecklare

CRA tilldelar cybersäkerhets­skyldigheter till tillverkare, importörer, distributörer och **suppliers**, men mycket av evidensen finns i utvecklingsteamens backloggar.[1] Den här sidan översätter kraven i bilaga I och artiklarna 16–24 till konkreta ansvar för utvecklingsteamen, så att firmware‑, plattforms‑ och DevOps‑ledare kan visa för auditorer att kontrollerna har ägare, mätetal och regelbundna reviews.

## Produkt‑coverage‑matris

| CRA‑klausul | Utvecklarägd aktivitet | Exempel på leverabler |
| --- | --- | --- |
| Annex I(1)(a–d) | Threat modelling, security requirements, design sign‑off | System context diagram, STRIDE‑anteckningar, dokumenterade mitigations |
| Annex I(1)(e–g) | Secure defaults, hårdning av interfaces, crypto‑profiler | Secure configuration matrix, API‑auth‑spec, crypto bill of materials |
| Annex I(1)(h–j) | Logging strategy, hooks för vulnerability handling | Event‑taxonomi, design av log‑export, PSIRT‑intake‑automation |
| Annex I(2)(a–f) | Update‑mekanism, SBOM/VEX‑automation, support‑verktyg | Diagram över update‑pipelines, SBOM‑job i CI, supportperiod‑deklaration |
| Art. 21–24 | Koordinering med leverantörer och importörer | Firmware drop schedule, evidence packet till ODM/OEM, RACI‑tabeller |

Använd matrisen när du bygger RACI‑tabeller eller skriver avtal, så att varje CRA‑klausul har en tydlig engineering‑ägare.

