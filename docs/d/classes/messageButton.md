# MessageButton
extends BaseMessageComponent

<br>
<hr>


### METHODS

<br>

#### .setStyle(style)
Sets the style of this button.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| style         | [MessageButtonStyle](/typedef/MessageButtonStyle)      |         | no        | The filter function to use                         |


#### .setID(id)
Sets the id for this button. This **must** be added to all buttons __except `LINK`__ 
| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| id         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The id for this button                        |


#### .setLabel(label)
Sets the label of this button. Label is the text that will display on this button.
| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| label         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The text (label) that will display on this button                         |


#### .setEmoji(emoji, animated)
Sets the emoji of this button.
| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| emoji         | [Snowflake](https://discord.js.org/#/docs/main/master/typedef/Snowflake)      |         | no        | The emoji that will display on this button                         |
| animated         | [boolen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      |         | no        | The animated status (animated/not animated) for this emoji                         |

#### .setDisabled(boolen)
Sets the interactive status for this button. If turned on, the button becomes unclickable.
| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| boolen         | [boolen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      |         | no        | The interactive status (enabled/disabled) for this button                        |


#### .setURL(url)
Sets the url for this button. [MessageButton.style](#setstyle-style) __must be__ `LINK` for this method to work.
| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| url         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The url for this button                        |