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



<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: center;
}


</style>
</head>
<body>

<h2>Discord Buttons</h2>

<table>
  <tr>
    <th>PARAMETERS</th>
    <th>TYPE</th>
    <th>DEFAULT</th>
    <th>OPTIONAL</th>
    <th>DESCRIPTION</th>

  </tr>
  <tr>
    <td>style</td>
    <td>MessageButtonStyle</td>
    <td>-</td>
    <td>No</td>
    <td>The filter function to use</td>

  </tr>

</table>

</body>
</html>
