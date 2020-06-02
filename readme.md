# JSON Tree 

Json Tree converts a JS object into a nice, visible depth-indented tree for console printing. The structure
generated is similar to what you get by running the ```tree``` command on Unixy platforms.

```
{
    oranges: {
        'mandarin': {                                          ├─ oranges
            clementine: null,                                  │  └─ mandarin
            tangerine: 'so cheap and juicy!'        -=>        │     ├─ clementine
        }                                                      │     └─ tangerine: so cheap and juicy!
    },                                                         └─ apples
    apples: {                                                     ├─ gala
        'gala': null,                                             └─ pink lady
        'pink lady': null
    }
}
```

It also works well with larger nested hierarchies such as file system directory trees.

Getting it
----------

### For use with deno

```ts
import { jsonTree } from "https://deno.land/x/json_tree/mod.ts";
console.log(
   jsonTree({
      apples: 'gala',      //  ├─ apples: gala
      oranges: 'mandarin'  //  └─ oranges: mandarin
   }, true)
);
```

Usage
-----

The methods exposed to you are as follows, in a strange kind of signature notation:


### jsonTree()
```js
jsonTree(obj, showValues (boolean), hideFunctions?:bollean)

obj : json Object
showValues : To Show the object values in tree. set it true or false
hideFunctions : To Show the function in tree. set it true or false
```
### ScreenShots
##### Console With Values
![image](https://github.com/satty1987/json_tree/blob/master/screenshots/consoleWithValues.jpg)

 ##### Console Without Values
![image](https://github.com/satty1987/JsonTree/blob/master/screenshots/consoleWithoutValues.jpg)
