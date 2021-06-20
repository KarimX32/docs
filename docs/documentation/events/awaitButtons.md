# awaitButtons

## Message#awaitButtons

```js
const filter = (button) => button.clicker.user.id === message.author.id;
const collector = await message.awaitButtons(filter, { time: 5000 });
//await buttons for 5 seconds

console.log(collector.first());
```

<div style="border-color: rgb(56, 132, 255);" data-key="7a406f87658d40febc4c32711a8ea218" class="reset-3c756112--blockHint-a7403a60"><div class="reset-3c756112--hintIcon-7c7981dd--paragraph-ae3112d0"><svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="none" style="color: rgb(56, 132, 255);" class="icon-7f6730be--text-3f89f380"><g><path d="M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11" fill-rule="evenodd"></path></g></svg></div><p class="blockParagraph-544a408c" data-key="ab700486d23b4b018d3bcdd5ce199b5a"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="6f72bc04eb0d4645938a9090b118cabf"><span data-offset-key="6f72bc04eb0d4645938a9090b118cabf:0">More </span></span><a class="link-a079aa82--primary-53a25e66--link-faf6c434" style="color: rgb(56, 132, 255);" data-key="4f1e792810b046719d3f8bac316f18db" href="./createButtonCollector"><span data-key="3d941df35a574b07b8557901fe244f39"><span data-offset-key="3d941df35a574b07b8557901fe244f39:0">info</span></span></a><span data-key="2e34c4ea4e7c458e810f90b0cde4225d"><span data-offset-key="2e34c4ea4e7c458e810f90b0cde4225d:0"><span data-slate-zero-width="z">​</span></span></span></span></p></div>