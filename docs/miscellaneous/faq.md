# FAQ

Q: How to Remove a Button?

A: at this moment, Discord API Doesn't Support that, but still you can edit your Message with a new Disabled Button!

▬▬▬▬▬▬▬

Q: interaction failed error?

A: it takes time for Discord API and Your Bot to make connection, so you maybe have to put the user on wait, for that you need to defer your button!
defer (Button#defer() ) needs to be on clickButton Event!

▬▬▬▬▬▬▬

Q: unknown interaction error?

A: as i said, it takes time for Discord API and Your Bot to make connection, but however, putting the user on the wait has more than 1 ways(defer, reply, think) and this error means you are putting the user on wait with more than only 1 way!

▬▬▬▬▬▬▬

Q: button.clicker.user Returns null?

A: it Takes time to load User and GuildMember so, you need to await them! (e.g: await button.clicker.user;)

▬▬▬▬▬▬▬

Q: What is ephemeral reply type?

A: ephemeral type, makes the message to be only shown to the person who clicked the button(ephemeral will only work with Button#Reply)

▬▬▬▬▬▬▬

Q: URL Message not Showing?

A:

1- Make sure you have the latest Discord Client

2- Make sure to install the latest Version npm i discord-buttons@latest

3- Make sure you have your style as url and you don't have any id for your button!

4- make sure to pass the url with setURL function without any kind of intrupting characters (e.g. setURL('https://google.com'))

P.S: Make sure to have everything that a url requires in setURL (e.g. https:// http:// .com)

▬▬▬▬▬▬▬

Q: How to Solve error The class/prototype returned from.... or sending [object Object] ?

A: This error can mean you didn't setup our module properly(you should require the module next to your client and pass your client to it)
or
you are sending embeds/texts with buttons in a wrong formation
for example, you have an object that has same properties as MessageEmbed but the type is just object and it's not MessageEmbed
so you can just Convert your object to MessageEmbed (e.g: new MessageEmbed(YOUR_OBJECT))

and if that's not the option, you maybe sending in a wrong formation
you need to pass the embed as embed and your button as button in your object

P.S: if you have more than 1 buttons, you need to send them as buttons with an array

▬▬▬▬▬▬▬

Q: Why this is not working? im using this repo/PR...

A: PR's and Customized Repo/PR's (even suggested in #faq) can be buggy, and we don't support that and it's just a Temporary Solution
You can use at Your own Risk or wait for Updates

▬▬▬▬▬▬▬

Q: button.clicker.user is still returning null

A: try activating intents in the discord developer portal