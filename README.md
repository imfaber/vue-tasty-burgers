# Vue Tasty Burgers

<p align="left">
    <img alt="build" src="https://github.com/imfaber/vue-tasty-burgers/workflows/Build/badge.svg?branch=master">
    <a href="https://www.npmjs.com/package/vue-tasty-burgers" target="_brlak">
        <img alt="npm" src="https://img.shields.io/npm/v/vue-tasty-burgers">
    </a>
</p>

> An easy to use hamburger buttons library for VueJS. Inspired by [AMBURGERS](https://jonsuh.com/hamburgers/)

![Basic Screenshot](https://raw.githubusercontent.com/imfaber/vue-tasty-burgers/master/README/vtb_demo.gif)

## Documentation and Live demo

- [Library Documentation](https://imfaber.github.io/vue-tasty-burgers/dist/)

## Build Setup

``` bash
# install dependencies
npm install

# serve doc app with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build
```

## How this project works

The project makes use of both [Rollup](https://rollupjs.org/) and [WebPack 2](https://webpack.github.io/). Although they are two different bundlers and producting separate ouputs, they can coexist in the same project, sharing the following:

- Package definition [package.json](package.json)
- Babel configuration [.babelrc](.babelrc)
- PostCSS configuration [postcss.config.js](postcss.config.js)
- Source codes for library components [src](src)

In addition, Rollup uses the following:

- Rollup configuration [rollup.config.js](rollup.config.js)

And Webpack uses the following:

- Webpack configuration [webpack.config.js](webpack.config.js)
- Source codes for documentation apps [docs/src](docs/src)

As [package.json](package.json) is shared by both library and document app, their dependencies are shared. To make the dependencies clean for the library, if an external library is only used by the documentation app, add them as `devDependencies` instead of `dependencies` or `peerDependencies`.

## License

This project is licensed under the [MIT](LICENSE) License.
