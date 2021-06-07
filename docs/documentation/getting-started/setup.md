# Setup

To use [discord-buttons](https://npmjs.com/discord-buttons), you must put this in your main file (usually index.js) after your discord.js [Client](https://discord.js.org/#/docs/main/stable/class/Client)

```js
require('discord-buttons')(client);
```
You can also do this:

```js
const disbut = require('discord-buttons');
disbut(client);
```

Then, you can use [disbut.MessageButton](../documentation/constructors/message-button) and [disbut.MessageActionRow](../documentation/constructors/message-action-row) in your main file.

> Angelo, I use a command handler!!

Look no further! Here is how you can do it:

```js
import require('discord-buttons')(client); in your main file after your client, and on the command file put:
const { MessageButton, MessageActionRow } = require('discord-buttons');
```
or:

```js
const disbut = require('discord-buttons');
```

Then you can do:

```js
let btn = new MessageButton()
//or
let btn = new disbut.MessageButton()
```

