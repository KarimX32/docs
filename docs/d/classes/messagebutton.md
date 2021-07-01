# MessageButton
extends [BaseMessageComponent]()

<br>
<hr>


### METHODS

<br>

#### .setStyle(style)
Sets the style of this button.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| style         | [MessageButtonStyle](/typedef/MessageButtonStyle)      |         | no        | The filter function to use                         |

Returns: [MessageButton](#)

<hr>

#### .setID(id)
Sets the id for this button. This **must** be added to all buttons __except `LINK`__ 

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| id         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The id for this button                        |

Returns: [MessageButton](#)

<hr>

#### .setLabel(label)
Sets the label of this button. Label is the text that will display on this button.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| label         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The text (label) that will display on this button                         |

Returns: [MessageButton](#)

<hr>

#### .setEmoji(emoji, animated)
Sets the emoji of this button.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| emoji         | [Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake)      |         | no        | The emoji that will display on this button                         |
| animated         | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      |         | no        | The animated status (animated/not animated) for this emoji                         |

Returns: [MessageButton](#)

<hr>

#### .setDisabled(boolean)
Sets the interactive status for this button. If turned on, the button becomes unclickable.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| boolean         | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)      |         | no        | The interactive status (enabled/disabled) for this button                        |

Returns: [MessageButton](#)

<hr>

#### .setURL(url)
Sets the url for this button. [MessageButton.style](#setstyle-style) __must be__ `LINK` for this method to work.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| url         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         | no        | The url for this button                        |

Returns: [MessageButton](#)


### .setStyle(style)
Sets the style of this button.

<html>
<body>
<table>
  <tr>
    <th style="text-align: center; border: 1px solid #dddddd">PARAMETERS</th>
    <th style="text-align: center; border: 1px solid #dddddd">TYPE</th>
    <th style="text-align: center; border: 1px solid #dddddd">DEFAULT</th>
    <th style="text-align: center; border: 1px solid #dddddd" >OPTIONAL</th>
    <th style="text-align: center; border: 1px solid #dddddd">DESCRIPTION</th>

  </tr>
  <tr>
    <td style="text-align: center; border: 1px solid #dddddd">style</td>
    <td style="text-align: center; border: 1px solid #dddddd"> <a href="https://example.com">MessageButtonStyle</a></td>
    <td style="text-align: center; border: 1px solid #dddddd">-</td>
    <td style="text-align: center; border: 1px solid #dddddd">No</td>
    <td style="text-align: center; border: 1px solid #dddddd">Adds a button to the row.</td>

  </tr>

</table>
</body>
</html>

Returns: [MessageActionRow](#)





----



### .addComponent(Button)

Adds a button to the row.

<html>
<body>
<table>
  <tr>
    <th style="text-align: center; border: 1px solid #dddddd">PARAMETERS</th>
    <th style="text-align: center; border: 1px solid #dddddd">TYPE</th>
    <th style="text-align: center; border: 1px solid #dddddd">DEFAULT</th>
    <th style="text-align: center; border: 1px solid #dddddd" >OPTIONAL</th>
    <th style="text-align: center; border: 1px solid #dddddd">DESCRIPTION</th>

  </tr>
  <tr>
    <td style="text-align: center; border: 1px solid #dddddd">button</td>
    <td style="text-align: center; border: 1px solid #dddddd"> <a href="https://example.com">MessageButtonStyle</a></td>
    <td style="text-align: center; border: 1px solid #dddddd">-</td>
    <td style="text-align: center; border: 1px solid #dddddd">No</td>
    <td style="text-align: center; border: 1px solid #dddddd">Adds a button to the row.</td>

  </tr>

</table>
</body>
</html>

Returns: [MessageActionRow](#)
