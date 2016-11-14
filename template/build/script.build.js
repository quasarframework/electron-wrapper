'use strict'

process.env.NODE_ENV = 'production'
if (process.argv.length > 2) {
  process.env.PLATFORM_TARGET = process.argv[2]
}

var
  packager = require('electron-packager'),
  shell = require('shelljs'),
  path = require('path'),
  fs = require('fs'),
  options = require('./config').building,
  targetPath = path.join(__dirname, '../../dist')

if (!fs.existsSync(targetPath)) {
  console.error('\x1b[31mPlease build your App before packaging for Electron...\x1b[0m')
  console.error('\x1b[31mIssue "quasar build" to make the build then try again.\x1b[0m')
  process.exit(1)
}

require('./script.clean.js')

shell.cp(path.join(__dirname, '../electron.js'), targetPath)
shell.cp(path.join(__dirname, '../package.json'), targetPath)

console.log(' \x1b[34mBuilding Quasar Electron app(s)...\n\x1b[0m')
packager(options, (err, appPaths) => {
  if (err) {
    console.error('\x1b[31mError from `electron-packager` when building app...\x1b[0m')
    console.error(err)
    return
  }

  console.log(' Build(s) were successful.')
  console.log(appPaths)
  console.log(' \n\x1b[34mDone!\n\x1b[0m')
})
