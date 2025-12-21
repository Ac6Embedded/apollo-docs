# AC6 Apollo Docs

AC6 Apollo Docs is the official documentation site for AC6. It centralizes AC6 training and product guidance across multiple tracks:

- Security (CRA, secure boot, vendor-specific guides)
- RTOS (determinism, isolation, integration patterns)
- CPUs (architecture fundamentals for embedded)
- Linux (boot, device trees, hardening, diagnostics)

Site: https://apollo.ac6-training.com

## Prerequisites

- Node.js `>= 20`
- Yarn (via Corepack or a global install)

To enable Yarn via Corepack:

```powershell
corepack enable
corepack prepare yarn@stable --activate
```

## Install

```powershell
yarn
```

## Run Locally

```powershell
yarn start
```

Starts the dev server and opens the site. Edits hot-reload without restarting.

## Build

```powershell
yarn build
```

Generates static assets in the `build` directory for hosting.

## Preview Build Locally

```powershell
yarn serve
```

Serves the production build locally (useful to verify a release).

## Deploy

This project is configured for Docusaurus deploys. For GitHub Pages:

- Using SSH

```powershell
USE_SSH=true yarn deploy
```

- Using HTTPS

```powershell
GIT_USER=<your-github-username> yarn deploy
```

Deploy builds the site and pushes it to the `gh-pages` branch. The site is also configured for the custom domain `apollo.ac6-training.com`.

## Internationalization

Sources with:

```powershell
yarn write-translations
```

## About AC6

AC6 provides training and expertise for embedded systems. Learn more at https://ac6-training.com and follow us on LinkedIn, X/Twitter, and YouTube.
