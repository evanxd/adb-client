'use strict';

var Input = require('../../lib/input'),
    MockAdbCommander = require('../mock/mock-adb-commander');

suite('Input', function() {
  var subject,
      cmd;

  setup(function() {
    cmd = new MockAdbCommander();
    subject = new Input(cmd);
  });

  suite('#tap', function() {
    test('should send tap command', function() {
      subject.tap(0, 0);
      assert.equal(cmd.command, 'shell input tap 0 0');
    });
  });
});
