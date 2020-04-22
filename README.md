![](./assets/logo-text1.jpg) 

**Read carefully this guide in order to understand Limedrop fundamentals.**
 - [Initial Setup / Installation](#Setup:)



### LimeConfig
You can customize the way limedrop searches the mule logs using [LimeConfig.js](https://github.com/Fa-b/limedrop/blob/master/js/LimeConfig.js).
All regular expressions are passed to your running D2Bot instance and evaluated there, only matching items are sent over to the view.

### Customizing LimeConfig
- [RegEx](#regex)
- [ItemGroup](#itemgroup)
- [SearchFilter](#searchfilter)

### RegEx and ItemGroups
- When adding **RegEx to ./js/LimeConfig.js**, make sure you are using **valid JSON** https://jsonlint.com.
- After selecting **multiple items** in item group menu, press **'ENTER'** to add them to the drop queue.
- **Double escape** has to be used in order to get the **RegEx** over to the D2Bot as a string.
Remember to escape string delimiters such as `"` and `'`.
- **Try and error..** the generated RegEx is printed to the browsers developer console [Shift+Ctrl+i].

### ItemGroup
- Every entry listed here defines a group of items to be displayed in a collated manner.
The order and naming of each of these entries is not used for evaluation (yet).
- Every match in any of these groups is sorted according to it's itemID. This search is performed upfront querying ALL your accounts.
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

### SearchFilter
Here filters can be added, adjusted or removed from search-bar.
At the moment there are 3 types of filters configurable using the [LimeConfig.js](https://github.com/Fa-b/limedrop/blob/master/js/LimeConfig.js):
- `"text"`: A text input field.
- `"tristate"`: A checkbox with added indeterminate state (therefore 3-state).
- `"multi"`: A multi value selection field.

#### Text-Input:
- `"mask"`: Check if user input is valid. Only valid input will be used for RegEx generation.
- `"default"`: Simply the default startup value for the input.
- `"regex"`: One by one, match and replace the user input according to this.

#### Tristate-Input:
- `"checked"`: Value of the input in checked state.
- `"indeterminate"`: Value of the input in indeterminate state.
- `"unchecked"`: Value of the input in unchecked state.
- `"default"`: Simply the default startup value for the input.
- `"regex"`: One by one, match and replace the user input according to this.

#### Multi-Input:
- `"values"`: List of available values for selection.
- `"default"`: Simply the default startup value list for the input.
- `"regex"`: One by one, match and replace the user input according to this. All selected values are provided as a comma separated list.

## Setup:

#### ``Download:``
![](https://i.gyazo.com/bf2d4592474b0b34727090eb623baa88.gif)

### ``Installation``
- **Extract Zip** in to your D2bot# directory and replace current **Limedrop**.

- Inside your **D2bot# directory** you have a folder named **"Data"** wwhere you will find **server.json** file, open it.

  - ![](https://i.gyazo.com/7937bbb2e2213f7f25316b7953124330.png)
  - **1**: Profiles examples, those also need to be created in **D2bot#**:
    ![](https://i.gyazo.com/a8bf26ee5e0f5a4a75f1d2401420456f.png)
  -  **2** Users: Those are used to log in onto Limedrop make sure to user proper flags
  - **3** Path to limedrop directory.
  - **4** **IP**
  - **5** **Port**
    **Beware**
    - If you want to access Limedrop from **different Devices** check your **Windows firewall**, and add a new rule for D2bot#.

    - To use it **from outside your network**, you should do **portforwarding** also in your router *(not recommended atm)*

 - **Enable Run API server in D2bot#**
  - ![](https://i.gyazo.com/6c957e7874f635e8c37259ee5c3184c8.png)

### ``Using Limedrop``
If you followed properly previous steps, you should be able to continue your journey. **Open your favourite browser** *(We recomend **Google Chrome**, for the better experience)*

  ![](https://i.gyazo.com/af9c08e6b0250be72a5d6b1cfe9285df.png)
#### Interface:
  ![](https://i.gyazo.com/450a1bb304acb88373bccb6d64c33af1.png)

 - 1 Logging and Notification Buttons
 - 2 Search Bar
 - 3 Realm / Account / Character 
    - Game / Password inputs
    - Launch / Drop Button
 - 4 Inventory
 - 5 DropQueue

    #### Queue list Capture [Beta]
    - When having items on your queue you can create an image list by clicking Capture button:
    ![](https://i.gyazo.com/41b64fed4d4720a5307257a10881a752.png)
    - Output when having multime items:
    ![](https://i.gyazo.com/a79252ef36642e79ff941ce5e0a9f91a.png)


### More to come, feel free to report Issues and/or Suggestions.