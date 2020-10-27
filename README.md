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
| doNothing() | function placeholder |
| combineStyles(style1, style2, ...) | combines styles into a single array |
| img(path) | converts asset path into image source |
| generateMatrix(x, y, value) | generates matrix
| async wait(timeout) | delay |
| seconds(amount) | returns seconds converted to milliseconds |
| minutes(amount) | returns minutes converted to milliseconds |
| hours(amount) | returns hours converted to milliseconds |
| days(amount) | returns days converted to milliseconds |

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

```
import { wait, seconds } from 'rn-units';

async doSomething() {
  showSplashScreen();
  await wait(seconds(10));
  hideSplashScreen();
}
```
