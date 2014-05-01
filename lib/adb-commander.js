'use strict';

var sh = require('execSync');

function AdbCommander(options) {
  this.options = options;
}

AdbCommander.prototype = {
  send: function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('adb');
    return sh.exec(args.join(' '));
  }
};

module.exports = AdbCommander;
