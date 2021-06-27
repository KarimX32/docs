# FAQ

#### How can I remove a button from a message?

A: At the moment, Discord API doesn't support that, but still you can edit your message and make the button [disabled](/d/classes/messagebutton.html#setdisabled-boolean)!

<hr>

#### I received `The interaction failed` error, why?

A: It takes time for the Discord API and your bot to make connection, so maybe you have to put the user on wait. (for that you need to defer your button)
[defer](/d/classes/buttoninteraction.html#defer-ephemeral) needs to be on clickButton Event!

<hr>

#### I received `Unknown interaction` error, why?

A: As I said earlier, it takes time for Discord API and your bot to make connection. But however, putting the user on wait has more than 1 ways ([defer](/d/classes/buttoninteraction.html#defer-ephemeral), [reply](/d/classes/buttoninteraction.html#reply), [think](/d/classes/buttoninteraction.html#think-ephemeral)) and this error means you are putting the user on wait with more than only 1 way!

<hr>

#### `button.clicker.user` returns null, why?

A: It takes time to load [User]() and [GuildMember]() so, you need to await them!

Example:
```js
await button.clicker.user
```

<hr>

#### What is an ephemeral reply type?

A: Ephemeral type, makes the message only visible to the person who clicked the button. (Ephemeral will only work with [button#reply](/d/classes/buttoninteraction.html#reply), so keep that in mind)

<hr>

#### My button is not redirecting to the URL, why?

A:

`1-)` Make sure you have the **latest** [discord.js](https://discord.js.org) client. (`npm i discord.js@latest`)

`2-)` Make sure to install the **latest** version of [discord-buttons](/). (`npm i discord-buttons@latest`)

`3-)` Make sure you have your [style](/d/classes/messagebutton.html#setstyle-style) as `url` and don't have any [id](/d/classes/messagebutton.html#setid-id) for your button!

`4-)` Make sure to set the url with [setURL](/d/classes/messagebutton.html#seturl-url) function without any kind of intrupting characters. And also make sure to have everything that a url requires in [setURL](/d/classes/messagebutton.html#seturl-url) (e.g. `https://` `http://` `.com`)

Example:
```js
button.setURL('https://google.com')
```

<hr>

#### The class/prototype returned from.... or sending [object Object], how can I solve it?

A: 

`1-)` This error can mean you didn't setup our module properly (you should require the module next to your [Client](https://discord.js.org/#/docs/main/stable/class/Client) and pass your [Client](https://discord.js.org/#/docs/main/stable/class/Client) to it)

`2-)` You are sending embeds/texts with buttons in a wrong formation

**For example:** You have an object that has same properties as [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) but the type is just object and it's not [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed).
So you can just Convert your object to [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)

Example:
```js
new MessageEmbed(YOUR_OBJECT)
```

`3-)` And if that's not the option, you maybe sending in a wrong formation.
You need to pass the embed as embed and your button as button in your object

**`P.S`**: If you have more than one button, you need to send them with [MessageActionRow](/d/classes/messageactionrow.html).

<hr>

#### Why this is not working? I'm using this repo/PR...

A: PR's and Customized Repo/PR's (even suggested in [#faq](https://discord.com/channels/748098690874474567/846758592706117702/850638180288954399)) can be buggy, and we don't support that and it's just a temporary solution.
You can use at your own risk or wait for updates.

<hr>

#### `button.clicker.user` [still](#button-clicker-user-returns-null-why) returning null

A: Try activating [intents](https://discord.com/developers/docs/topics/gateway#gateway-intents) in [Discord Developers Portal](https://discord.com/developers/applications)