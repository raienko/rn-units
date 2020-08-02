Hi there!

It's a small collection of helpers that I use in almost every project

###### Installation:

`npm i rn-units --safe`

or

`yarn add rn-units`

Please check following helpers:

| Helper | Description |
| --- | --- |
| screenWidth | width of the screen |
| screenHeight | height of the screen |
| vw() | percent of screen width | 
| vh() | percent of screen height | 
| rem() | units that keep proportions despite device size |
| isIOS | boolean |
| isAndroid | boolean |
| doNothing | function placeholder |
| combineStyles | combines styles into a single array |

###### Usage

```
import { screenWidth, screenHeight } from 'rn-units';
console.log({ screenWidth, screenHeight });
```

```
import { vw } from 'rn-units';
const halfScreenWidth = vw(50);
```

```
import { vh } from 'rn-units';
const halfScreenHeight = vh(50);
```

```
import { rem } from 'rn-units';
const sameSizeOnAnyDevice = rem(20);
```
