# brunch-with-base

Brunch skeleton with:

- [x] Sane set of default CSS rules and HTML
- [x] `normalize.css`
- [x] Sass
- [x] Autoprefixer
- [x] ES6 (with Babel)
- [x] Browser-Sync

## Prerequisites

- [Node.js](http://nodejs.org/)
- [Brunch](http://brunch.io/) with `npm install -g brunch`
- And install the dependencies with `npm install` in this folder

## Commands

- `npm start` or `brunch watch --server` to launch Brunch in **dev mode** on `localhost:4000`
- `npm run build` or `brunch build --production` to build

## Fixme

We are currently using an old version of `brunch` and `postcss-brunch`. This is necessary to have a working pipeline with Sass and Autoprefixer (see [issue 31](https://github.com/brunch/postcss-brunch/issues/31) and [working gist](https://gist.github.com/kgcreative/ce396ce58e096f0c52845e3038d2b5b1)). When the bug is fixed, use the latest versions instead.
