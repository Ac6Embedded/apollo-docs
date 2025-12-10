---
id: cra-embedded-controls
slug: /security/cra/embedded-technical-controls
title: Innebygde tekniske kontroller
sidebar_position: 4
---

Denne siden beskriver praktiske tekniske kontroller for innebygde systemer som typisk kreves for å oppfylle CRA vedlegg I. Den skal leses sammen med [Grunnleggende sikkerhetskrav](./fundamental-security-requirements).

## Oppstart og rot av tillit

- Verifiser signerte bilder i hver oppstartsfase, forhindrer rollback.
- Plasser rot av tillit i sikre elementer (TPM, SE, eFuses, PUF).
- Dokumenter nøkkelprovisjonering og ejerskap.

## Minne- og kjørebeskyttelser

- Aktiver MPU/MMU og separasjon av privilegier per oppgave/tråd.
- Stack-canaries, ASLR der mulig, watchdogs og fail-secure tilstander.
- Designdisiplin: minst privilegium, eksplisitt livssyklus for ressurser.

## Grensesnitt og diagnostikk

- Deaktiver ubrukte periferi og lås debug-grensesnitt.
- Autentisering og autorisasjon på administrasjonsplanet.
- Sikker konfigurasjon: valider input, signer og verifiser fjernkonfig.

## Kommunikasjonssikkerhet og kryptografi

- TLS/DTLS med vurderte suites, gjensidig autentisering der mulig.
- Sertifikatvalidering (CRL/OCSP/pinning), beskytt mot nedgradering/replay.
- Nøkkelstyring: generering, lagring, rotasjon, tilbakekalling, kompromissrespons.

## Logging, monitorering og hendelser

- Hendelsestaksonomi (boot, auth, config, oppdatering, integritet).
- Tamper-evident lagring eller sikker eksport til samlere.
- Anomalideteksjon og rategrenser; integrasjon med operasjonelle runbooks.

## Oppdatering og gjenoppretting

- Signerte oppdateringer, integritetsverifisering, rollback-beskyttelse.
- Failsafe installasjon, statusfeedback, iscenesatt utrulling.
- Telemetri for å bekrefte installasjon og aktivere gjenoppretting.

## Dokumentasjon og bevis

- Konfigurasjonsmatrise, arkitekturdiagrammer, test- og pentest-rapporter.
- SBOM per release; VEX for høyprofilerte CVE-er.
- Oppdater styrings- og teknisk dossier kontinuerlig.
