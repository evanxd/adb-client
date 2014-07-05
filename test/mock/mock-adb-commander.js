'use strict';

function MockAdbCommander() {}

MockAdbCommander.prototype = {
  command: '',
  send: function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('adb');
    this.command = args.join(' ');
  }
};

module.exports = MockAdbCommander;
