# nano-repeat

[![NPM version](https://img.shields.io/npm/v/nano-repeat.svg?style=flat)](https://npmjs.com/package/nano-repeat) [![NPM downloads](https://img.shields.io/npm/dm/nano-repeat.svg?style=flat)](https://npmjs.com/package/nano-repeat) [![CircleCI](https://circleci.com/gh/egoist/nano-repeat/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/nano-repeat/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
npm i nano-repeat
```

## Usage

```js
const repeat = require('nano-repeat')

repeat('abc', 3)
//=> abcabcabc

repeat('abc', -1)
//=> RangeError: count must be non-negative
```

## API

### repeat(str, count)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**nano-repeat** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/nano-repeat/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
