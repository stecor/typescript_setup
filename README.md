# typescript_setup

A step by step guide to setting up Typescript (https://www.typescriptlang.org/).

Install with npm (https://docs.npmjs.com/)

```
$ npm install -g typescript
$ npm install -g webpack
$ npm install -g ts-loader // links webpack to complie typescript
$ npm install -g jquery // to use jquery in your project
$ npm install -g http-server // to have a local server run

```
==========

Configure Typescript (https://www.typescriptlang.org/)

1. Create new Typescript file main.ts :

```
class SweetSweetClass {
constructor() {
console.log("Even sweeter")
}
}
let basil = new SweetSweetClass()

```
2. Setup tsconfig.json :

```
{
"compilerOptions": {
"module": "commonjs",
"outDir": "dist/",
"noImplicitAny": true,
"removeComments": true,
"preserveConstEnums": true
},
"include": [
"*"
],
"exclude": [
"node_modules",
"**/*.spec.ts"
]
}

```

3. Run:

```
$ tsc
$ tsc --watch

```

Notice that the directory dist and the file main.js were created.

4. Setup HTML Page:

```
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<script src='/dist/main.js'></script>
</body>
</html>

```

5. Run:

```
$ http-server -c-1
or
$ http-server

```

Using the flag -c-1 makes the browser never cache the files.

6. Open up the Javascript Console and find the statement "Even sweeter"
Run & Compile with Webpack

1. Setup webpack.config.js:

```
var path = require('path');
module.exports = {
entry: './main.ts',
resolve: {
extensions: ['.webpack.js', '.web.js', '.ts', '.js']
},
module: {
loaders: [
{ test: /\.ts$/, loader: 'ts-loader' }
]
},
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist')
}
}

```

2. Run webpack:


Non minified

```
$ webpack --watch

```

As minified

```
$ webpack --watch --optimize-minimize

```

3. Add new Typescript (https://www.typescriptlang.org/) file

```
export class MustHaveCoffee {
constructor() {
console.log("yeah me too!")
}
}

```

4. Open main.ts :

```
import {MustHaveCoffee} from "./getcoffee"
class SweetSweetClass {
constructor() {
console.log("Even sweeter")
}
}
let basil = new SweetSweetClass()
let coffee = new MustHaveCoffee()

```

5. Update index.html :

```
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<script src='/dist/bundle.js'></script>
</body>
</html>

```

Include jQuery (http://jquery.com/) with Typings (https://github.com/typings/typings)

1. Install typings :

```
$ npm install typings -g

```

2. In your project, run:

```
$ typings install dt~jquery --global --save

```

3. Run:

```
$ typings install

```

4. Update tsconfig.json :

```
{
"compilerOptions": {
"module": "commonjs",
"outDir": "dist/",
"noImplicitAny": true,
"removeComments": true,
"preserveConstEnums": true
},
"include": [
"src/*",
"typings/*"
],
"exclude": [
"node_modules",
"**/*.spec.ts"
]
}

```

5. Import jQuery in main.ts

```
import * as $ from "jquery";
import {MustHaveCoffee} from "./getcoffee"
class SweetSweetClass {
constructor() {
console.log("Even sweeter");
$('body').css('background-color', 'red');
}
}
let basil = new SweetSweetClass()
let coffee = new MustHaveCoffee()

```

6. jQuery works!
