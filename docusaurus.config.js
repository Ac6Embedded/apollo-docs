// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import searchLocal from '@easyops-cn/docusaurus-search-local';

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
  // Use global trailingSlash per Docusaurus guidance
  trailingSlash: false,

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
    locales: ['en', 'fr', 'sv'],
    // Optional per-locale configuration
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'French',
        direction: 'ltr',
      },
      sv: {
        label: 'Svenska',
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
        },
      }),
    ],
  ],
  plugins: [
    [
      searchLocal,
      {
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        docsDir: 'docs',
        language: ['en', 'fr', 'sv'],
      },
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
      mermaid: {
        options: {
          flowchart: {
            rankSpacing: 50,
            nodeSpacing: 40,
          },
          themeVariables: {
            fontSize: '14px',
          },
        },
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
            label: 'Security',
            position: 'left',
            items: [
              {label: 'Overview', to: '/docs/security/'},
              {label: 'CRA', to: '/docs/security/cra'},
            ],
          },
          // Other tracks (RTOS, CPUs, Linux) intentionally hidden until content is ready
          // Add extra navbar items (e.g. AC6 links) here if desired
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Security', to: '/docs/security/' },
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
        copyright: `Copyright ${new Date().getFullYear()} AC6. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {name: 'keywords', content: 'embedded security, CRA, RTOS, AC6 training'},
        {name: 'description', content: 'Apollo by AC6: embedded security, CRA guidance, RTOS and Linux fundamentals.'},
        {property: 'og:title', content: 'Apollo | Embedded Security & CRA Guidance'},
        {property: 'og:description', content: 'Learn embedded security, CRA timelines, RTOS, and Linux best practices.'},
      ],
    }),
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
