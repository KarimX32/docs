<div align="center">
<h1>Official Documentation for discord-buttons</h1>
</div>


### How to translate?   

Firstly you'll need to copy the `examplelang` folder which is located in: /docs/. Rename this folder to the corresponding language for example, `es` or `es-ES`.

Secondly you'll need to navigate to [config.js](/docs/.vuepress/config.js) which is located in: [/docs/.vuepress/](/docs/.vuepress). Inside this file you will need to fill in the locales section:

```js
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
    }
  },
  '/es/': {
      lang: 'es',
      title: config["es-ES"].title,
      description: config["es-ES"].description
  }
```
Then you will need to add the language to the theme configuration 

```js
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: true,
        nav: [
          {
            text: 'Documentation',
            link: '/d/#welcome',
          },
          {
            text: 'Github',
            link: 'https://github.com/AngeloCore/discord-buttons'
          },
        ],
        sidebar
      },
      '/ar/': {
        label: 'Arabic',
        selectText: config["ar"].selectText,
        lastUpdated: config["ar"].lastUpdated,
        nav: [
          {
            text: 'توثيق',
            link: '/ar/d/#welcome',
          },
          {
            text: 'جيثب',
            link: 'https://github.com/AngeloCore/discord-buttons'
          },
        ],
        sidebar
      },
      '/es/': {
        label: 'Spanish',
        selectText: config["es-ES"].selectText,
        lastUpdated: config["es-ES"].lastUpdated,
        nav: [
          {
            text: 'Documentation',
            link: '/d/#welcome',
          },
          {
            text: 'Github',
            link: 'https://github.com/AngeloCore/discord-buttons'
          },
        ],
        sidebar
        }
      },
    },
  ```
  After you have completed filling out certain things in [config.js](/docs/.vuepress/config.js) you'll have to fill out another file to do this head to [locales.json](/docs/.vuepress/assets/locales/locales.json). In [locales.json](/docs/.vuepress/assets/locales/locales.json) you have to add the language you're translating to. for example, if i was translating the documentation into spanish i would add:
  ```json
      "es-ES": {
        "title": "",
        "description": "",
        "lastUpdated": "",
        "selectText": ""
    }
```
Lastly you'll have to add the certain language to [sidebar.js](/docs/.vuepress/components/sidebar.js). This ensures that the content will be shown at the side. For example, i'll carry on the spanish translation to do this i'll add another section like so:
```js
  '/es/d/': [
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
  ],




```

PS. Make sure all the links are pointing to the correct pages! And make sure everything is translated and completed properly. if you need any help translating contact [jac#8056](https://discord.com/users/513417959214022690) or join the official discord-buttons server [here](https://discord.gg/src)
