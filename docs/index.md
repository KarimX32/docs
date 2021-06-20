---
home: true
heroText: null
tagline: null
actionText: null
actionLink:
---

<div align="center">
  <h1>discord-buttons</h1>
  <p>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://img.shields.io/npm/v/discord-buttons?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://img.shields.io/npm/dt/discord-buttons?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://nodei.co/npm/discord-buttons.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>
<div align="center">
  <img src="https://cdn.discordapp.com/attachments/846455339419172874/848300816288055296/Main.png">
  <br> <br>
</div>

### Installation
```sh
npm i discord-buttons
```

### Setup
```js
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
require('discord-buttons')(client);
```
#### then
```js
const disbut = require('discord-buttons');

let button = new disbut.MessageButton()
  .setLabel('This is an button')
  .setID('myid')
  .setStyle('blurple');

message.channel.send('Ayo!', button);
```

### Typescript
```ts
import disbut from 'discord-buttons';
disbut(client);
```
#### then
```js
let button = new disbut.MessageButton()
  .setLabel('This is an button')
  .setID('myid')
  .setStyle('blurple');
```

### Examples
All of our Examples and Button Styles are in [examples.md]([http://](https://github.com/AngeloCore/discord-buttons/blob/main/examples.md))
Also you can check our [Documentation](https://discord-buttons.js.org), if you have any other problems/questions, you can join our [Support Server!](https://discord.gg/5JtyYqW)

### Contact
Ask for help in our discord server: [discord.gg/src](https://discord.gg/src)
###### If don't work, use [discord.gg/5JtyYqW](https://discord.gg/5JtyYqW)