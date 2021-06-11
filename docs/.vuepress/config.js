const { description, name } = require('../../package')
const config = require("./assets/locales/locales.json");
const sidebar = require("./components/sidebar.js")



module.exports = {
  locales: {
    '/': {
      lang: 'en',
      title: config["en-US"].title,
      description: config["en-US"].description
    },
    '/ar/': {
      lang: 'ar',
      title: config["ar"].title,
      description: config["ar"].description
    },
    '/fr/': {
      lang: 'fr',
      title: config["fr-FR"].title,
      description: config["fr-FR"].description
    }
  },
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://i.imgur.com/m57ng0P.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "https://i.imgur.com/0Dfw71u.png" }],
    ['meta', { name: 'theme-color', content: '#2196f3' }],
    ['meta', { property: 'og:title', content: 'Get Started' }],
    ['meta', { property: 'og:description', content: 'Discord.js buttons' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://discord-buttons.js.org' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:image', content: 'https://i.imgur.com/Je6Rl0E.png' }],
  ],

  theme: 'jac',
  themeConfig: {
    jac: {
      logo: 'JacLogo',
    },
    smoothScroll: true,
    searchPlaceholder: 'Search',
    repo: '',
    docsDir: '',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: true,
        nav: [
          {
            text: 'Documentation',
            link: '/documentation/#welcome',
          },
          {
            text: 'Github',
            link: 'https://github.com/AngeloCore/discord-buttons'
          },
        ],
        sidebar,
      },
      '/ar/': {
        label: 'Arabic',
        selectText: config["ar"].selectText,
        lastUpdated: config["ar"].lastUpdated,
        nav: [
          {
            text: 'Documentation',
            link: '/ar/documentation/#welcome',
          },
          {
            text: 'Github',
            link: 'https://github.com/AngeloCore/discord-buttons'
          },
        ],
        sidebar
      },
      '/fr/': {
        label: 'French',
        selectText: config["fr-FR"].selectText,
        lastUpdated: config["fr-FR"].lastUpdated,
        nav: [
          {
            text: 'Documentation',
            link: '/fr/documentation/#welcome',
          },
          {
            text: 'Github',
            link: 'https://github.com/AngeloCore/discord-buttons'
          },
        ],
        sidebar
      },
    },
  },


  markdown: {
    lineNumbers: true,
  },

  plugins: [
    '@xiaopanda/vuepress-plugin-code-copy',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

