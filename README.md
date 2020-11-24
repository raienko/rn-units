[![npm](https://img.shields.io/npm/v/rn-units.svg)](https://npmjs.com/package/rn-units) [![npm](https://img.shields.io/npm/dm/rn-units.svg)](https://npmjs.com/package/rn-units)

Set of helpers and components for the react-native projects.

_"I hope they help someone to write less code and to solve common problems.."_
 
###### Installation:

`npm i rn-units --safe`

or

`yarn add rn-units`

#### Helpers

| Name | Usage | Description |
| --- | --- | --- |
| screenWidth | { width: screenWidth } | width of the screen |
| screenHeight | { height: screenHeight } | height of the screen |
| vw | { width: vw(11) } | percent of the screen width | 
| vh | { height: vh(200) } | percent of the screen height | 
| rem | { width: rem(20) } | units that keep proportions despite device size |
| isIOS | if (isIOS) {...} | true if device runs iOS
| isAndroid | if (isAndroid) {...} | true if device runs Android
| doNothing | (cb = doNothing) => {...} | function placeholder (just  in case you ran out of arrow functions) |
| combineStyles | combineStyles(style1, style2, \[style3, style4], ...) | combines styles into a single array, allows to combine any valid styles (arrays, styleSheet styles, inline styles, etc) |
| img | \<Image source={img(url)} /> | converts url or local path into image source |
| generateMatrix | generateMatrix(2, 4, null) | generates matrix with defined size (x, y) and optional prefilled value
| async wait | await wait(1000) | artificial delay
| seconds | const timeout = seconds(10) | returns seconds converted to milliseconds |
| minutes | const timeout = minutes(2) | returns minutes converted to milliseconds |
| hours | const timeout = hour(1) | returns hours converted to milliseconds |
| days | const timeout = days(3) | returns days converted to milliseconds |
| throwError | throwError('Some message', 'ErrorCode', data); | throws JS Error that contains optional fields: message, code, data |

#### Components and API
| Name | Params/Methods | Description |
| --- | --- | --- |
| KeyboardAvoidingView | View props | View that adds margin bottom when keyboard opens to avoid overlapping |
| Row | View props | Common view but with predefined style {flexDirection: 'row', alignItems: 'center'} |
| Logger | log, success, error, out, in | A bit styled console log that executes only in dev version of the app |
| LocalStorage | getItem, setItem, etc.. | Before using do: <br/> `npm i @react-native-community/async-storage` <br/> Wrapper for the [AsyncStorage](https://www.npmjs.com/package/@react-native-community/async-storage), allows to set/get any values (JSON.stringify(value) and JSON.parse(storedValue) under the hood) |
| Touchable | TouchableOpacity props + `delay` | wrapper for the TouchableOpacity with requestAnimationFrame for the smooth animation and with monkey-press protection - `delay` controls time between `onPress` callback fired |
