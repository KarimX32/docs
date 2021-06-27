# MessageActionRow
extends [BaseMessageComponent]()

<hr>

### METHODS

<br>

#### .addComponent(component)
Adds a component to this actions row.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| component         | [MessageButton](/d/classes/messagebutton.html)      |         | no        | The filter function to use                         |

Returns: [MessageActionRow](#)

<hr>


#### .addComponents(components)
Adds components to this actions row.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| components         | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[MessageButton](/d/classes/messagebutton.html)>      |         | no        | The filter function to use                         |

Returns: [MessageActionRow](#)

<hr>


#### .toJSON()
Transforms the button to a plain object.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*The raw data of this action row*
