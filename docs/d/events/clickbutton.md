# clickButton
Emitted whenever a button is clicked.

| PARAMETER      | TYPE                                                                                      | DESCRIPTION                                        |
| -------------- | -----------------------------------------------------------------------------------------  | -------------------------------------------------- |
| button         | [MessageComponent](/d/classes/messagecomponent.html)      | The [MessageComponent](/d/classes/messagecomponent.html) of the button which is clicked                       |

```js
client.on('clickButton', async (button) => {
    //Your code here...
});
```

**`P.S`**: `client` is your [discord.js client](https://discord.js.org/#/docs/main/stable/class/Client)
