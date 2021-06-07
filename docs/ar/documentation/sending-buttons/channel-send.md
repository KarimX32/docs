# Channel#send

### Send button with default message/embed

```js
message.channel.send("Pizza", myButton);

// Embed
message.channel.send("Pizza", {
  component: myButton,
  embed: myEmbed,
});
```

### Send multiple buttons with default message

```js
let row = new MessageActionRow().addComponent(myButton).addComponent(myButton2);

message.channel.send("Pizza", {
  component: row,
});
```

### Send multiple rows

```js
let row = new MessageActionRow().addComponent(myButton).addComponent(myButton2);

let row2 = new MessageActionRow()
  .addComponent(myButton3)
  .addComponent(myButton4);

message.channel.send("Pizza", {
  components: [row, row2],
});
```
