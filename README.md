# limedrop

When adding RegEx to ./js/LimeConfig.js, make sure you are using valid JSON https://jsonlint.com.
After selecting multiple items, press 'enter' to add them to the drop queue.

# LimeConfig
You can customize the way limedrop searches the mule logs using [LimeConfig.js](https://github.com/Fa-b/limedrop/blob/master/js/LimeConfig.js).
All regular expressions are passed to your running D2Bot instance and evaluated there, only matching items are sent over to the view.

## Customizing LimeConfig
- [RegEx](#regex)
- [ItemGroup](#itemgroup)
- [SearchFilter](#searchfilter)

## RegEx
Double escape has to be used in order to get the RegEx over to the D2Bot as a string.
Remember to escape string delimiters such as `"` and `'`.
Try and error.. the generated RegEx is printed to the browsers developer console [Shift+Ctrl+i].

## ItemGroup
Every entry listed here defines a group of items to be displayed in a collated manner.
The order and naming of each of these entries is not used for evaluation (yet).
Every match in any of these groups is sorted according to it's itemID. This search is performed upfront querying ALL your accounts.
This ensures that the counts are up to date after a single refresh (no need to scroll to the end of the list).
Keep in mind that the [SearchFilter](#SearchFilter) configuration is also active and may limit the amount of items counted.

If an item satisfies two groups, only 1 count will be added and there is no way to determine to which of those groups it belongs.
For example if you defined the two groups:
```js
    ...
    "NonEthEnigmaBase":["(?=Socketed \\((3)\\)\\$)(?!.*:eth)"],
    "EthFortiBase":["(?=Socketed \\((4)\\)\\$)(?=.*:eth)"],
    ...
```
You will receive the weirdest of all your expectations because every item type will receive it's own group, disregarding eth and socket count.

After the grouping has finished, all other items will load according to your [SearchFilter](#SearchFilter] configuration.

**Note: Items that didn't match the above armor base example before, would not load at this point because their itemID is flagged to have been counted already!**

## SearchFilter
Here filters can be added, adjusted or removed from search-bar.
At the moment there are 3 types of filters configurable using the [LimeConfig.js](https://github.com/Fa-b/limedrop/blob/master/js/LimeConfig.js):
- `"text"`: A text input field.
- `"tristate"`: A checkbox with added indeterminate state (therefore 3-state).
- `"multi"`: A multi value selection field.

### Text-Input:
- `"mask"`: Check if user input is valid. Only valid input will be used for RegEx generation.
- `"default"`: Simply the default startup value for the input.
- `"regex"`: One by one, match and replace the user input according to this.

### Tristate-Input:
- `"checked"`: Value of the input in checked state.
- `"indeterminate"`: Value of the input in indeterminate state.
- `"unchecked"`: Value of the input in unchecked state.
- `"default"`: Simply the default startup value for the input.
- `"regex"`: One by one, match and replace the user input according to this.

### Multi-Input:
- `"values"`: List of available values for selection.
- `"default"`: Simply the default startup value list for the input.
- `"regex"`: One by one, match and replace the user input according to this. All selected values are provided as a comma separated list.
