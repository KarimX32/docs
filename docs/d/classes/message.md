# Message
extends [Message](https://discord.js.org/#/docs/main/stable/class/Message)

<br>
<hr>

### PROPERTIES

<br>

#### .components
The message components of the message

Returns: [BaseMessageComponent]()

<hr>

### METHODS

<br>

#### .awaitButtons(filter, [options])
Similar to createButtonCollector but in promise form. Resolves with a collection of buttons that pass the specified filter.

| PARAMETER      | TYPE                                                                                      | DEFAULT | OPTIONAL  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| filter         | [CollectorFilter](https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter)      |         | no        | The filter function to use                         |
| options        | [AwaitButtonsOptions]()                                                                   | `{}`      | yes       | Optional options to pass to the internal collector |