# createButtonCollector

## Message#createButtonCollector

```js
let m = await message.channel.send('Click!', button);

const filter = (button) => button.clicker.user.id === message.author.id;
const collector = m.createButtonCollector(filter, { time: 5000 }); //collector for 5 seconds

collector.on('collect', b => console.log(`Collected button with the id ${b.id}`));
collector.on('end', collected => console.log(`Collected ${collected.size} items`)); 
```
<br>

| Properties | Returns |
| ------------- |:-------------:|
| client | [Client](https://discord.js.org/#/docs/main/stable/class/Client) |
| collected | [Collection](https://discord.js.org/#/docs/collection/master/class/Collection) |
| ended | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| filter | [CollectorFilter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| message | [Message](https://discord.js.org/#/docs/main/stable/class/Message) |
| next | [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| options | [CollectorOptions](https://discord.js.org/#/docs/main/stable/typedef/CollectorOptions) |
| total |[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| users | [Collection](https://discord.js.org/#/docs/collection/master/class/Collection) |

<br>

| Methods | Returns |
| ------------- |:-------------:|
| checkEnd() | [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) |
| empty() | [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) |
| endReason() | ?[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| resetTimer([options]) | [More info](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=resetTimer%C5%88) |
| stop([options]) | [More info](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=resetTimer%C5%88) |
| key(button) | Button ID |

<div style="border-color: rgb(56, 132, 255);" data-key="d909803118b84b5c8da05ea946c63bc3" class="reset-3c756112--blockHint-a7403a60"><div class="reset-3c756112--hintIcon-7c7981dd--paragraph-ae3112d0"><svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="none" style="color: rgb(56, 132, 255);" class="icon-7f6730be--text-3f89f380"><g><path d="M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11" fill-rule="evenodd"></path></g></svg></div><p class="blockParagraph-544a408c" data-key="de1d78c67ab54395a7554f6c932e8970"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="4fca96d2c90d42a4bf701f47d3f12082"><span data-offset-key="4fca96d2c90d42a4bf701f47d3f12082:0">Also returns the same as </span></span><a class="link-a079aa82--primary-53a25e66--link-faf6c434" style="color: rgb(56, 132, 255);" data-key="54fe40dcc5c74d9ba77b00ad23eb1868" href="./clickButton"><span data-key="884aea57375846d6b741ed9401bccf67"><span data-offset-key="884aea57375846d6b741ed9401bccf67:0">clickButton</span></span></a><span data-key="f120ec024a734a7da91ca6951d4ac4b5"><span data-offset-key="f120ec024a734a7da91ca6951d4ac4b5:0"><span data-slate-zero-width="z">​</span></span></span></span></p></div>