'use strict';

function Input(cmd) {
  this.cmd = cmd;
}

Input.prototype = {
  tap: function(x, y) {
    this.cmd.send('shell', 'input', 'tap', x, y);
  }
};

module.exports = Input;
