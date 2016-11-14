'use strict'

process.env.NODE_ENV = 'development'

var
  electron = require('electron'),
  proc = require('child_process'),
  path = require('path')

proc.spawn(electron, [path.join(__dirname, '../electron.js')])
