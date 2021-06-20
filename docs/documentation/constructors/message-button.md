# MessageButton

## Text Button

```js
let button = new MessageButton()
    .setLabel("I like")
    .setStyle("blurple")
    .setEmoji("🍕")
    .setID("like_button")
```

## Url Button

```js
let button = new MessageButton()
    .setLabel("Vote")
    .setStyle("url")
    .setURL("https://discord-buttons.js.org")
```
| Method       | Value           | Can use  |
| ------------- |:-------------:| -----:|
| .setLabel() | Set the button label | both buttons |
| .setStyle() | Set the button style | both buttons |
| .setEmoji() | Set the button emoji | both buttons |
| .setURL() | Set the button url   | url button |   
| .setID() | Set the button id | color button | 

### .setEmoji()

For this you must pass in an emoji. For example: 

<img src="https://i.imgur.com/HBa9tC6.png"></img>
<br>
.setEmoji('✅')

But how would you acquire an emoji? Here is how:

<img src="https://i.imgur.com/ZlHPIQl.png"></img>

> Angelo, I would like custom emojis from my server.

Look no further! Here is how to do it:

<b>1.</b> Get the emoji ID

<img src="https://i.imgur.com/cMgQgli.png"></img>

<b>2.</b> set the emoji using .setEmoji()

.setEmoji('535993902180859914')

But how would you acquire an emoji? Here is how:

<img src="https://i.imgur.com/JQJRzQ7.gif"></img>
## Full Example

```js
const { MessageButton } = require("discord-buttons")

client.on('message', async (message) => {
    if (message.content.startsWith('!button')) {
        let button = new MessageButton()
            .setLabel("Vote")
            .setStyle("url")
            .setEmoji("🍔")
            .setURL("https://discord-buttons.js.org")
        await message.channel.send(`Ayo`, button);
    }
});
```

