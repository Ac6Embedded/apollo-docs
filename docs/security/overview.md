---
id: security-overview
title: Overview - Why Embedded Security
slug: /security
sidebar_label: Overview
sidebar_position: 1
last_update:
  author: 'Ayoub Bourjilat (AC6)'
  date: '2025-12-18'
---

import DocCardList from '@theme/DocCardList';

Embedded devices are increasingly connected and safety-critical. A single vulnerability can lead to safety hazards, service downtime, IP loss, or regulatory non-compliance. Building in security from the start reduces lifecycle risk and total cost of ownership.

Key drivers:

- Safety: Prevent unsafe behavior due to malicious inputs or faults.
- Compliance: Meet emerging regulations (e.g., EU Cyber Resilience Act).
- Resilience: Limit blast radius and enable secure recovery.
- Trust: Safeguard data, IP, and supply chain integrity.

Core pillars we'll build upon:

- Threat modeling and secure architecture
- Root of trust and update integrity
- Memory protection and least privilege
- Secure communication and key management
- Vulnerability handling and incident response

Next steps: start with CRA obligations for software developers. See Security > CRA > References for official links and standards.

## Explore security topics

<DocCardList
  items={[
    {type: 'link', label: 'CRA overview', href: '/docs/security/cra'},
  ]}
/>

