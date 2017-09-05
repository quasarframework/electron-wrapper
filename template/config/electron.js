const
  path = require('path'),
  ELECTRON_APP_INFO = require('../package.json'),
  APP_INFO = require('../../package.json')

module.exports = {
  // electron-packager options
  // Docs: https://simulatedgreg.gitbooks.io/electron-vue/en/using-electron-packager.html
  name: ELECTRON_APP_INFO.productName || APP_INFO.productName,

  // Electron version
  electronVersion: require('../node_modules/electron/package.json').version,
  arch: 'x64',
  asar: true,
  dir: path.join(__dirname, '../../dist'),
  icon: path.join(__dirname, '../icons/icon'),
  ignore: /\b(node_modules|src|icons)\b/,
  out: path.join(__dirname, '../dist'),
  overwrite: true,
  platform: process.env.PLATFORM_TARGET || 'all'
}
