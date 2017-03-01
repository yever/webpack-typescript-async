# webpack-typescript-async

This repository is a proof of concept for using webpack with typescript with
``System.import`` for asynchronous module loading.

``System.import`` is better than ``require.ensure`` since it provides
a ``Promise`` and allows to handle exceptions. In order to use it with
typescript, I included the types for systemjs (``@types/systemjs``). 

Systemjs is not actually used in the project. The typescript code is compiled
with ``"module": "commonjs"``, but ``System.import`` is recognized by webpack
and converted into bundles that are loaded asynchronously.

## How to start?

```sh
git clone https://github.com/yever/webpack-typescript-async.git
cd webpack-typescript-async
npm install
npm start
```

You can also build it with
```sh
npm run build
```
