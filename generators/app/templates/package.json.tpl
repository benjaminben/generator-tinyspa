{
  "name": "<%= name %>",
  "main": "index.js",
  "author" "<%= author %>",
  "version": "1.0.0",
  "description": "simple spa",
  "scripts": {
    "watch": "webpack --watch",
    "serve": "serve dist",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  }
}