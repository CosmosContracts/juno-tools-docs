// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JunoTools',
  tagline: 'Swiss Knife of Juno Network',
  url: 'https://docs.juno.tools',
  organizationName: 'deus-labs', // Github org name
  projectName: 'junotools-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@500;600,'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/deus-labs/junotools/docs/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/banner.jpeg',
      announcementBar: {
        id: 'try_it_out',
        content:
        'Try out JunoTools! <a target="_blank" rel="noopener noreferrer" href="https://daodao.zone">Launch a DAO on Juno</a>.',
        // backgroundColor: '#000',
        // textColor: '#fff',
        isCloseable: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'JunoTools Logo',
          src: 'img/junotools-dark.png',
          srcDark: 'img/junotools-light.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'start-here',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://juno.tools/',
            label: 'Launch the app!',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/JunoTools',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/deus-labs/junotools-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JunoTools. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
