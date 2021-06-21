module.exports = {
  title: "discord-buttons",
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/16x16.png" }],
    ['meta', { name: 'theme-color', content: '#2196f3' }],
    ['meta', { property: 'og:title', content: 'Get Started' }],
    ['meta', { property: 'og:description', content: 'A discord.js addon for buttons' }],
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
        link: '/d/#welcome',
      },
      {
        text: 'Github',
        link: 'https://github.com/AngeloCore/discord-buttons'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/5JtyYqW'
      },
    ],
    sidebar: {
      '/d/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            './getting-started/installation',
            './getting-started/setup',
            './getting-started/FAQ'
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          children: []
        },
        {
          title: 'Classes',
          children: [
            './classes/message',
          ]
        },
        {
          title: 'Events/Collectors',
          children: []
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
