// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apollo',
  tagline: 'Embedded learning space',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://apollo.ac6-training.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config (adjust if you publish to GitHub Pages).
  organizationName: 'ac6', // Usually your GitHub org/user name.
  projectName: 'apollo-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    // Default UI/content language
    defaultLocale: 'en',
    // Add additional locales here
    locales: ['en', 'fr', 'de', 'es', 'pt', 'sv', 'da', 'nb'],
    // Optional per-locale configuration
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
      },
      sv: {
        label: 'Svenska',
        direction: 'ltr',
      },
      da: {
        label: 'Dansk',
        direction: 'ltr',
      },
      nb: {
        label: 'Norsk (Bokmål)',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Apollo',
        logo: {
          alt: 'Apollo Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            to: '/docs/security/security-overview',
            position: 'left',
            label: 'Security',
          },
          // Add extra navbar items (e.g. AC6 links) here if desired
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Security', to: '/docs/security/security-overview' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@Ac6Embedded',
              },
              {
                label: 'X/Twitter',
                href: 'https://www.twitter.com/Ac6Embedded',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/ac6',
              },
            ],
          },
          {
            title: 'Training',
            items: [
              {
                label: 'More about AC6 training',
                href: 'https://ac6-training.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AC6. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
