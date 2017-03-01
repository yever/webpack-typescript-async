# webpack-typescript-async

This repository is a proof of concept for using webpack with typescript with
``System.import`` for asynchronous module loading.

``System.import`` is better than ``require.ensure`` since it provides
a ``Promise`` and allows to handle exceptions. In order to use it with
typescript, I included the types for systemjs (``@types/systemjs``).
