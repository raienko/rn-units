[![npm](https://img.shields.io/npm/v/rn-units.svg)](https://npmjs.com/package/rn-units) [![npm](https://img.shields.io/npm/dm/rn-units.svg)](https://npmjs.com/package/rn-units)

Set of helpers and components for the react-native projects.

_"I hope they help someone to write less code and to solve common problems.."_
 
###### Installation:

`npm i rn-units --safe`

or

`yarn add rn-units`

#### Constants

*_Don't support dynamic updates!_*

| Props        | Type    |
| ------------ | ------- |
| screenWidth  | Number  |
| screenHeight | Number  |
| isLandscape  | Boolean |
| isPortrait   | Boolean |
| isIOS        | Boolean |
| isAndroid    | Boolean |

#### Methods

| Props         | Description                                                                                          |                  
| ------------- | ---------------------------------------------------------------------------------------------------- |
| vw            | percent of screen width <br/> `width: vw(90)`                                                        |
| vh            | percent of screen height <br/> `height: vh(10)`                                                      |
| rem           | responsive units for markup <br/> `width: rem(20)`                                                   |
| font          | responsive units for font size <br/> `fontSize: font(20)`                                            |
| img           | converts url or filepath into img source <br/> `<Image source={img('http://...')} />`                |
| wait          | creates delay in async functions <br/> `await wait(1000) // delay 1000ms`                            |
| seconds       | converts seconds to milliseconds <br/> `setTimeout(foo, seconds(10)`                                 |
| minutes       | converts minutes to milliseconds <br/> `setTimeout(foo, minutes(10)`                                 |
| hours         | converts hours to milliseconds <br/> `setTimeout(foo, hours(10)`                                     |
| days          | converts days to milliseconds <br/> `setTimeout(foo, days(10)`                                       |
| weeks         | converts weeks to milliseconds <br/> `setTimeout(foo, weeks(10)`                                     |
| combineStyles | used to combine multiple styles  <br/> `<Image style={combineStyles(styles.logo, styles.centered)} >`|
