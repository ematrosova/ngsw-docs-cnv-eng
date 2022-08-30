const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Genomenal',
    url: 'https://genomenal.com',
    baseUrl: '/ngsw-docs-cnv-en/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'genomenal', // Usually your GitHub org/user name.
    projectName: 'ngsw-docs-cnv-en', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    homePageId: 'intro',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // editUrl: 'https://github.com/RoadRoller/ngsw-docs-ru/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Genomenal Logo',
          src: 'img/app-logo.svg',
		  srcDark: 'img/app-logo-white.svg',
		  href: 'https://genomenal.com',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
		copyright: `© 2019-2021 Novel Software Systems. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
	  algolia: {
          apiKey: 'dbf798e1335cbc57fae603c4eb582fe4',
          indexName: 'ngsw-cnv-en',
          appId: 'DZAOFCP7KJ',
      }
    }),
});
