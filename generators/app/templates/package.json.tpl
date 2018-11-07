{
  "name": "<%= name %>",
  "main": "index.js",
  "author": "<%= author %>",
  "version": "1.0.0",
  "description": "simple spa",
  "scripts": {
    "start": "webpack --watch & serve dist",
    "build": "webpack -e PROD",
    "deploy": "yarn build && git subtree push --prefix dist origin gh-pages"
  }
}
