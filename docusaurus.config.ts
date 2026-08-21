import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Colombia Geo API',
  tagline:
    'API REST de datos geográficos de Colombia. Consulta departamentos, ciudades y municipios de forma rápida, sencilla y accesible.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://colombia-geo-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  staticDirectories: ['static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'gabrielceh', // Usually your GitHub org/user name.
  // projectName: 'colombia-geo-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/colombia-geo-doc-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Colombia Geo API',

      logo: {
        alt: 'Colombia Geo API',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          // selector de idioma
          type: 'localeDropdown',
          position: 'right',
        },
        // {
        //   href: 'https://mis-docs.com',
        //   label: 'API',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
            {
              label: 'Departamentos',
              to: '/docs/departments',
            },
            {
              label: 'Ciudades',
              to: '/docs/cities',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'Búsqueda',
              to: '/docs/search',
            },
            {
              label: 'Paginación',
              to: '/docs/pagination',
            },
            {
              label: 'Respuestas',
              to: '/docs/responses',
            },
            {
              label: 'Infraestructura',
              to: '/docs/infrastructure',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Colombia Geo API. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
