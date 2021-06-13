const { description, name } = require('../../package')
// const sidebar = require("./components/sidebar.js")



module.exports = {
  
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/16x16.png" }],
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
    sidebar {
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
        './sending-buttons/message-reply',
        './sending-buttons/remove-buttons'
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
  ]
 },
},

  markdown: {
    lineNumbers: true,
  },

  plugins: [
    '@xiaopanda/vuepress-plugin-code-copy',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}

