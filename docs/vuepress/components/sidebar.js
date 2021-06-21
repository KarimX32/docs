const sidebar = {
  '/d/': [
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
};
