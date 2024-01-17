// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const docusaurus = 'https://www.docusaurus.io/zh-CN/'

import {themes as prismThemes} from 'prism-react-renderer';

const projectName = 'DNote'
const github = 'https://github.com/dsx137'
const githubPagesUrl = 'https://dsx137.github.io'
const baseUrl = '/DNote'
const repo = github + baseUrl
const icon = 'img/favicon-light.svg'

const math = require('remark-math');
const katex = require('rehype-katex');
const sidebars = require('./sidebars');
const { languages } = require('prismjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: projectName,
  tagline: 'dsx137的个人笔记',
  favicon: icon,

  // Set the production url of your site here
  url: githubPagesUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
          sidebarPath: require.resolve('./sidebars.js'),
          numberPrefixParser: false,
          // editUrl: repo,
        },
        blog: {
          showReadingTime: true,
          // editUrl: repo,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: projectName,
        logo: {
          alt: 'My Site Logo',
          src: icon,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ruleSidebar',
            position: 'left',
            label: '写作规范',
          },
          {
            type: 'docSidebar',
            sidebarId: 'noteSidebar',
            position: 'left',
            label: '笔记',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Github',
            items: [
              {
                label: 'dsx137',
                href: github,
              },
              {
                label: 'DNote',
                href: repo,
              }
            ],
          },
          {
            title: 'Friends',
            items: [
              {
                label: 'CC2001',
                href: "https://c20c01.github.io",
              }
            ]
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Zhihu',
                href: "https://www.zhihu.com/people/dsxragon",
              }
            ]
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DNote, Inc. Built with <a href="${docusaurus}">Docusaurus</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['haskell','java'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },

    }),

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      ({
        hashed: true,
        language: ["en", "zh"],
      }),
    ]

  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [

  ],

  scripts: [
    {
      src: baseUrl + '/js/videoIframe.js',
      async: true,
      defer: true
    }, {
      src: baseUrl + '/js/mobileFingerMenu.js',
      async: true,
      defer: true
    }, {
      src: baseUrl + '/js/colorChangeIcon.js',
      async: true,
      defer: true
    }, {
      src: baseUrl + '/js/sidebarLinkCategoryCollapsible.js',
      async: true,
      defer: true
    }, {
      src: baseUrl + '/js/addLineOnEmptyList.js',
      async: true,
      defer: true
    }
  ]
};

module.exports = config;