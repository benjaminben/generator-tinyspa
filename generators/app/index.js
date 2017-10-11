var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, {
      type: 'input',
      name: 'author',
      message: 'Project author',
      default: 'Gary Oak'
    }]).then(answers => {
      this.props = answers
    })
  }

  writing() {
    const { props } = this

    this.fs.copy(
      this.templatePath('**/!(*.tpl)'),
      this.destinationPath()
    );

    this.fs.copy(
      this.templatePath('gitignore.tpl'),
      this.destinationPath('.gitignore')
    );

    [
      'README.md.tpl',
      'package.json.tpl',
      'dist/index.html.tpl',
      'src/js/app.js.tpl'
    ].forEach((path) => {
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(path.replace(/\.tpl$/, '')),
        props
      )
    })
  }

  installingPackages() {
    this.npmInstall([
      'autoprefixer',
      'babel-core',
      'babel-loader',
      'babel-preset-es2015',
      'css-loader',
      'extract-text-webpack-plugin',
      'node-sass',
      'postcss-loader',
      'sass-loader',
      'style-loader',
      'webpack',
      'webpack-dev-server'
    ], { 'save-dev': true })

    this.npmInstall([
      'babel-polyfill'
    ])
  }

}
