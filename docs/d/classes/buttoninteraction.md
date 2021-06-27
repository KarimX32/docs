# ButtonInteraction
extends [MessageComponentInteraction]()

<br>
<hr>

### PROPERTIES

<br>

#### .client
The client who send this button.

Returns: [Client](https://discord.js.org/#/docs/main/stable/class/Client)

<hr>


#### .id 
The custom id of this button (if provided).

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<hr>


#### .version
The version of this button.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<hr>


#### .token
The token of this button interaction.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<hr>


#### .discordID
The id which is provided by Discord for this button.

Returns: [Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake)

<hr>


#### .applicationID
The id of this interaction's application.

Returns: [Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake)

<hr>


#### .message
The message of this button.

Returns: [Message](https://discord.js.org/#/docs/main/stable/class/Message)

<hr>


#### .guild
The guild of this button.

Returns: [Guild](https://discord.js.org/#/docs/main/stable/class/Guild)

<hr>


#### .channel
The channel of this button.

Returns: [Channel](https://discord.js.org/#/docs/main/stable/class/Channel)

<hr>


#### .reply
The reply object of this button.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Reply](/d/classes/buttonreply.html)>

<hr>


#### .clicker
The user who clicked this button.

Returns: [User](https://discord.js.org/#/docs/main/stable/class/User)

<hr>


#### .webhook
The webhook of this button interaction.

Returns: [WebhookClient](https://discord.js.org/#/docs/main/stable/class/WebhookClient)

<hr>


#### .replied
If this button interaction has replied before.

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<hr>


#### .deffered
If this button interaction has replied with [defer](#defer-ephemeral) before.

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<hr>


### METHODS

<br>

#### .think(ephemeral)
The bot will reply with a `is thinking...` message.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| ephemeral         | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      |         | yes        | If the message will be ephemeral                         |

```js
await button.think(); //reply is "[BotUserame] is thinking..."
await button.think(true); //reply is the same, but ephemeral.
```

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](https://discord.js.org/#/docs/main/stable/class/Message)>

<hr>


#### .defer(ephemeral)
The bot will reply with a `is thinking...` message.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| ephemeral         | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      |         | yes        | If the **edited** message will be ephemeral                         |

```js
await button.defer(); //nothing happened.
await button.defer(true); //nothing happened. But if you edit the reply, the reply will be ephemeral
```

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](https://discord.js.org/#/docs/main/stable/class/Message)>