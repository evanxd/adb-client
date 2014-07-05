'use strict';

function Input(adb) {
  this.adb = adb;
}

Input.prototype = {
  tap: function(x, y) {
    this.adb.send('shell', 'input', 'tap', x, y);
  }
};

module.exports = Input;
