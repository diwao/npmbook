# Omikuji

## Description

You can make instance that gets random value from Array.

## How to Use

Use like this:

```
var Omikuji = require('omikuji');

const items = ['大吉', '中吉', '末吉', '吉', '凶'];
const omikuji = new Omikuji(items);
console.log(omikuji.get());
```

## methods

### get()

get method is getting random value from instance.