process.env.NODE_ENV = 'production'

if (process.argv.length > 2) {
  process.env.PLATFORM_TARGET = process.argv[2]
}

require('colors')

var
  packager = require('electron-packager'),
  shell = require('shelljs'),
  path = require('path'),
  fs = require('fs'),
  config = require('../config/electron'),
  targetPath = path.join(__dirname, '../../dist'),
  webpackBuild = require('./webpack.builder.js')

if (!fs.existsSync(targetPath)) {
  console.error('Please build your App before packaging for Electron...'.red)
  console.error('Issue "quasar build"'.red + ' from the root folder of your project'.gray + ' to make the build then try again.'.red)
  process.exit(1)
}

webpackBuild(function () {
  shell.cp(path.join(__dirname, '../dist/electron.js'), targetPath)
  shell.cp(path.join(__dirname, '../package.json'), targetPath)

  console.log(' Building Quasar Electron app(s)...\n'.bold)
  packager(config, (err, appPaths) => {
    if (err) {
      console.error('Error from `electron-packager` when building app...'.red)
      console.error(err)
      return
    }

    console.log(' Build(s) were successful.')
    console.log(appPaths)
    console.log('\n Done!'.bold + ' Check ' + path.resolve(__dirname, '../dist').gray + ' folder.')
  })
})
