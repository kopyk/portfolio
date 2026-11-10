// @ts-check
// Docs: https://docusaurus.io/docs/api/docusaurus-config
//
// The home page is static/index.html, a hand-written page that Docusaurus
// copies to the site root unchanged. Everything under /docs is built from
// the Markdown in docs/. Links back to the home page use "pathname:///" so
// the browser loads the static page instead of asking the docs router for it.

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jordan Yan',
  tagline: 'Technical writer: regulated, safety and compliance documentation.',
  favicon: 'assets/favicon.svg',

  future: {v4: true},

  url: 'https://www.jordanyan.com',
  baseUrl: '/',
  organizationName: 'kopyk',
  projectName: 'portfolio',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },

  // English is the source. Spanish is switched on so the translation
  // workflow is real: see docs/process/writing-for-translation.md.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-US'},
      es: {label: 'Español', htmlLang: 'es'},
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/kopyk/portfolio/blob/main/',
        },
        blog: false,
        pages: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'description',
          content:
            'Writing samples by Jordan Yan: family safety guides, a compliance explainer, a policy and procedure set, and a documentation update process.',
        },
        {name: 'author', content: 'Jordan Yan'},
      ],
      colorMode: {respectPrefersColorScheme: true},
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
      navbar: {
        title: 'Jordan Yan',
        logo: {
          alt: '',
          src: 'assets/favicon.svg',
          width: 28,
          height: 28,
          href: 'pathname:///',
          target: '_self',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'samples', position: 'left', label: 'Writing samples'},
          {href: 'pathname:///#experience', target: '_self', label: 'Experience', position: 'left'},
          {type: 'localeDropdown', position: 'right'},
          {href: 'https://github.com/kopyk/portfolio', label: 'Source', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {label: 'Home', href: 'pathname:///', target: '_self'},
          {label: 'Source and change log', href: 'https://github.com/kopyk/portfolio'},
          {label: 'LinkedIn', href: 'https://www.linkedin.com/in/jordanxyan/'},
        ],
        copyright: `© ${new Date().getFullYear()} Jordan Yan. Samples are original work. Company and product names in them are fictional unless a page says otherwise.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['lua'],
      },
    }),
};

export default config;
