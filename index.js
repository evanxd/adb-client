'use strict';

var AdbCommander = require('./lib/adb-commander'),
    Input = require('./lib/input');

function AdbClient(options) {
  var cmd = new AdbCommander(options);
  this.input = new Input(cmd);
}

module.exports = AdbClient;
