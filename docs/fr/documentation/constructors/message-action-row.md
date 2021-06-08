# MessageActionRow

## Single row

```js
let button = new MessageButton()
    .setLabel("I like")
    .setEmoji("🌭")
    .setID("like_hotdog")
    
let button2 = new MessageButton()
    .setLabel("I like")
    .setEmoji("🥞")
    .setID("like_pancake")

let buttonRow = new MessageActionRow()
    .addComponent(button)
    .addComponent(button2)

message.channel.send("Hi", { component: buttonRow })
```

## Multiple rows

```js
let button = new MessageButton()
    .setLabel("I like")
    .setEmoji("🌭")
    .setID("like_hotdog")
    
let button2 = new MessageButton()
    .setLabel("I like")
    .setEmoji("🥞")
    .setID("like_pancake")

let button3 = new MessageButton()
    .setLabel("I like")
    .setEmoji("🍕")
    .setID("like_pizza")

let buttonRow = new MessageActionRow()
    .addComponent(button);

let buttonRow2 = new MessageActionRow()
    .addComponent(button2)
    .addComponent(button3);
    
message.channel.send("Hi", { components: [ buttonRow, buttonRow2 ] });
```
<br>

| Method | Value |
| ------------- |:-------------:|
| .addComponent() | Adds a button to the row. |
| .addComponents([])  | Adds multime components (Array) |

## Full Example

```js
const { MessageButton, MessageActionRow } = require("discord-buttons")

client.on('message', async (message) => {
    if (message.content.startsWith('!button')) {
        let button = new MessageButton()
            .setLabel("I like")
            .setEmoji("🌭")
            .setID("like_hotdog")
            .setStyle("red")
            
        let button2 = new MessageButton()
            .setLabel("I like")
            .setEmoji("🥞")
            .setID("like_pancake")
            .setStyle("grey")
        
        let buttonRow = new MessageActionRow()
            .addComponent(button)
        
        let buttonRow2 = new MessageActionRow()
            .addComponent(button2)
            
        message.channel.send("Hi", { components: [ buttonRow, buttonRow2 ] });
    }
});

```
