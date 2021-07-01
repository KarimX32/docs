# ButtonCollector

extends [Collector]()

<hr>
<br>


### Message#createButtonCollector

Creates a button collector.

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
    <td style="text-align: center; border: 1px solid #dddddd">data, filter, options</td>
    <td style="text-align: center; border: 1px solid #dddddd"> <a href="https://github.com/AngeloCore/discord-buttons/blob/dev/src/v12/Classes/ButtonCollector.js">ButtonCollector</a></td>
    <td style="text-align: center; border: 1px solid #dddddd">-</td>
    <td style="text-align: center; border: 1px solid #dddddd">No</td>
    <td style="text-align: center; border: 1px solid #dddddd">Collects Buttons.</td>

  </tr>

</table>
</body>
</html>





## Methods

<br>



### [.checkEnd()](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=stop)

Checks whether the collector should end, and if so, ends it.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

-----

### [.empty()](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=empty)

Empties this reaction collector.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

---

### [.endReason()](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=endReason)

The reason this collector has ended or will end with.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### [.resetTimer([options])](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=resetTimer)

Resets the collectors timeout and idle timer.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

---

### [.stop([options])](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=stop)

Stops this collector and emits the `end` event.

Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

---

### [.key(button)](https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=key)

Gets the button id

Returns: Button ID
