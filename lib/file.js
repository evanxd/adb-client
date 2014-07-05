'use strict';

var fs = require('fs');

function File(adb) {
  this.adb = adb;
}

File.prototype = {
  push: function(source, target) {
    this.adb.send('push', source, target);
  },

  pull: function(source, target) {
    this.adb.send('pull', source, target);
  }
};

module.exports = File;
