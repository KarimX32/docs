# clickButton(button)
Emitted whenever a button is clicked.

| PARAMETER      | TYPE                                                                                      | DESCRIPTION                                        |
| -------------- | -----------------------------------------------------------------------------------------  | -------------------------------------------------- |
| button         | [ButtonInteraction](/d/classes/buttoninteraction.html)      | The [ButtonInteraction](/d/classes/buttoninteraction.html) of the button which is clicked                       |

```js
client.on('clickButton', async (button) => {
    //Your code here...
});
```

**`P.S`**: `client` is your [discord.js client](https://discord.js.org/#/docs/main/stable/class/Client)