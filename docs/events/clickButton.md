# clickButton

<div style="border-color: rgb(56, 132, 255);" data-key="d08019cb482048f19d4cf18b5502e1bb" class="reset-3c756112--blockHint-a7403a60"><div class="reset-3c756112--hintIcon-7c7981dd--paragraph-ae3112d0"><svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="none" style="color: rgb(56, 132, 255);" class="icon-7f6730be--text-3f89f380"><g><path d="M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11" fill-rule="evenodd"></path></g></svg></div><p class="blockParagraph-544a408c" data-key="1a331e8024c042b184b9b5e08a97043c"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="61e7edfb46bc4d46b97818b23d001eca"><span data-offset-key="61e7edfb46bc4d46b97818b23d001eca:0">When you install this package, you get a new event "clickButton", discord-buttons emits this new event, it is like the clients events</span></span></span></p></div>

First of all when we mention `client` this will be your [Discord.js Client](https://discord.js.org/#/docs/main/stable/class/Client)

```js
client.on('clickButton', async (button) => {
    //... my code
});
```

| Method       | Description           | Returns  |
| ------------- |:-------------:| -----:|
| client | The client who sent the button | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |
| id | The custom ID that you provided | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| version | The version of the button | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| token | The token of the button interaction | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| discordID | The ID provided by discord | [Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake) |
| applicationID | The ID of the interaction application | [Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake) |
| guild | The guild where the button is clicked | [Guild](https://discord.js.org/#/docs/main/stable/class/Guild) |
| channel | The channel where the button is clicked | [Channel](https://discord.js.org/#/docs/main/stable/class/Channel) |
| clicker | The button clicker | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| message | The button clicker | [Message](https://discord.js.org/#/docs/main/stable/class/User) |
| webhook | The button interaction webhook | [WebhookClient](https://discord.js.org/#/docs/main/stable/class/User) |
| replied | If the button already has an answer | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| deffered | If the button already has an answer | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |

<div style="border-color: rgb(255, 70, 66);" data-key="699be4460cd24279b652099bb2dcf3eb" class="reset-3c756112--blockHint-a7403a60"><div class="reset-3c756112--hintIcon-7c7981dd--paragraph-ae3112d0"><svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" style="color: rgb(255, 70, 66);" class="icon-7f6730be--text-3f89f380"><g><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></g></svg></div><p class="blockParagraph-544a408c" data-key="e081beb6eac645199736b01adb436291"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="4edbf483511949e69227d776cc9cb463"><span data-offset-key="4edbf483511949e69227d776cc9cb463:0">If you don't reply, when you click it will throw an error saying: "This interaction falied"</span></span></span></p></div>

## Functions

| Function | Description | Returns |
| ------------- |:-------------:| -----:|
| reply | The reply function, see [reply](#reply) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| think  | The bot will reply with "Thinking..." |  |
| defer | The bot will reply with nothing |  |

```js
// think
await button.think(); //the reply is "Thinking..."
await button.think(true); //ephemeral think reply

// defer
await button.defer(); //nothing
await button.defer(true); //if you edit the reply, the reply will be ephemeral
```

## reply

| Function | Description |
| ------------- |:-------------:|
| send | Send a reply |
| edit  | Edit the reply |
| delete | Delete the reply |
| fetch | Fetch the reply |

```js
await button.reply.send('My message'); //normal message, you can use also embed, buttons etc

await button.reply.send('My messsage', true); //ephemeral message

await button.reply.send('My message', { embed: embed, ephemeral: true }); //send embed with ephemeral message

await button.reply.edit('My new reply'); //you can use the options which are above
await button.reply.fetch(); //fetch the reply content
```

## clicker

| Method | Returns |
| ------------- |:-------------:|
| user | The <b>User</b> who clicked the button |
| member  | The <b>GuildMember</b> who clicked the button |
| fetch | Fetch the <b>User</b> and <b>GuildMember</b> |









