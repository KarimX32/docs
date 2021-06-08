<div align="center">
<h1>Official Documentation for discord-buttons</h1>
</div>


### How to translate? 

Firstly you'll need to copy the `examplelang` folder which is located in: /docs/. Rename this folder to the corresponding language for example, es or es-ES.

Secondly you'll need to navigate to config.js which is located in: /docs/.vuepress/. Inside this file you will need to fill in the locales section:

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
      title: config["es"].title,
      description: config["es"].description
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
        selectText: config["ar"].selectText,
        lastUpdated: config["ar"].lastUpdated,
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
      '/es/': {
        label: 'Spanish',
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
          '/es/documentation/': [
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
    }
    ```

    Make sure all the links are pointing to the correct pages!
