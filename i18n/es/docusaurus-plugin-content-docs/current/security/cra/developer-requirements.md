---
id: cra-developer-requirements
slug: /security/cra/developer-requirements
title: Requisitos y responsabilidades del desarrollador
sidebar_position: 2.5
---

## Por qué el CRA da obligaciones explícitas a los desarrolladores

El CRA asigna obligaciones de ciberseguridad a fabricantes, importadores, distribuidores y **proveedores**, pero gran parte de la evidencia vive en los backlogs de ingeniería.[1] Esta página traduce los requisitos del Anexo I y de los artículos 16–24 en responsabilidades concretas de los equipos de desarrollo, para que los responsables de firmware, plataforma y DevOps puedan demostrar a los auditores que los controles tienen propietario, métricas y revisión.

## Matriz de cobertura de producto

| Cláusula CRA | Actividad liderada por desarrollo | Ejemplos de entregables |
| --- | --- | --- |
| Annex I(1)(a–d) | Modelado de amenazas, requisitos de seguridad, cierre de diseño | Diagrama de contexto, notas STRIDE, mitigaciones documentadas |
| Annex I(1)(e–g) | Defaults seguros, endurecimiento de interfaces, perfiles criptográficos | Matriz de configuración segura, especificación de autenticación API, Crypto BOM |
| Annex I(1)(h–j) | Estrategia de logging, puntos de integración con gestión de vulnerabilidades | Taxonomía de eventos, diseño de exportación de logs, automatización de intake PSIRT |
| Annex I(2)(a–f) | Mecanismo de actualización, automatización SBOM/VEX, herramientas de soporte | Diagramas de pipelines de actualización, jobs SBOM en CI, declaración de periodo de soporte |
| Arts. 21–24 | Coordinación con proveedores e importadores | Calendario de entregas de firmware, paquete de evidencias para ODM/OEM, matrices RACI |

Utiliza esta matriz al definir RACI o redactar contratos para que cada cláusula CRA tenga un responsable de ingeniería claramente identificado.

