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
### CLI

Alternatively, you can use it directly from the CLI:

#### Read Json from local directory
```bash
deno run --allow-read https://deno.land/x/json_tree/cli.ts path sample.json
```
#### Read Json from server
```bash
deno run --allow-net https://deno.land/x/json_tree/cli.ts fetch https://jsonplaceholder.typicode.com/users
```
You can also install it globally using the following:

```bash
deno install --allow-net -allow-net -n jsonTree https://deno.land/x/json_tree/cli.ts
```

Then, the package is available to run:

```bash
jsonTree
```

### Configuration

Required permissions:

1. `--allow-net`
2. `--allow-read`

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
![image](https://raw.githubusercontent.com/satty1987/json_tree/master/screenshots/consoleWithValues.jpg)

 ##### Console Without Values
![image](https://raw.githubusercontent.com/satty1987/json_tree/master/screenshots/consoleWithoutValues.jpg)

