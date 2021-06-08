const { description, name } = require('../../package')
// const sideBar = require(../sidebar.js)



module.exports = {

  title: name,
  description: description,

  locales: {
    '/': {
      lang: 'en',
      title: name,
      description: description
    },
    '/ar/': {
      lang: 'ar',
      title: name,
      description: 'أزرار Discord.js'
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

  themeConfig: {
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
        sidebar: {
          '/documentation/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                './getting-started/installation',
                './getting-started/setup',
              ]
            },
            {
              title: 'Sending Buttons',
              collapsable: false,
              children: [
                './sending-buttons/channel-send',
                './sending-buttons/message-edit',
                './sending-buttons/message-reply'
              ]
            },
            {
              title: 'Contructors',
              collapsable: false,
              children: [
                './constructors/message-button',
                './constructors/message-action-row',
              ]
            },
            {
              title: 'Events/Collectors',
              collapsable: false,
              children: [
                './events/clickButton',
                './events/createButtonCollector',
                './events/awaitButtons',
              ]
            },
            {
              title: 'Miscellaneous',
              collapsable: false,
              children: [
                './miscellaneous/examples',
                './miscellaneous/faq',
              ]
            },
          ],
        }
      },
      '/ar/': {
        label: 'Arabic',
        selectText: 'Languages',
        lastUpdated: true,
        nav: [
          {
            text: 'توثيق',
            link: '/ar/documentation/#welcome',
          },
          {
            text: 'جيثب',
            link: 'https://github.com/AngeloCore/discord-buttons'
          },
        ],
        sidebar: {
          '/ar/documentation/': [
            {
              title: 'جيثب',
              collapsable: false,
              children: [
                './getting-started/installation',
                './getting-started/setup',
              ]
            },
            {
              title: 'Sending Buttons',
              collapsable: false,
              children: [
                './sending-buttons/channel-send',
                './sending-buttons/message-edit',
                './sending-buttons/message-reply'
              ]
            },
            {
              title: 'Contructors',
              collapsable: false,
              children: [
                './constructors/message-button',
                './constructors/message-action-row',
              ]
            },
            {
              title: 'Events/Collectors',
              collapsable: false,
              children: [
                './events/clickButton',
                './events/createButtonCollector',
                './events/awaitButtons',
              ]
            },
            {
              title: 'Miscellaneous',
              collapsable: false,
              children: [
                './miscellaneous/examples',
                './miscellaneous/faq',
              ]
            },
          ],
        }
      },
    },
  },

  theme: 'jac',

  markdown: {
    lineNumbers: true,
  },

  plugins: [
    '@xiaopanda/vuepress-plugin-code-copy',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

