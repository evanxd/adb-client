'use strict';

var AdbCommander = require('./lib/adb-commander'),
    Input = require('./lib/input'),
    File = require('./lib/file');

function AdbClient(options) {
  var cmd = new AdbCommander(options);
  this.input = new Input(cmd);
  this.file = new File(cmd);
}

module.exports = AdbClient;
