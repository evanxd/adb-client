'use strict';

var Input = require('../../lib/input'),
    MockAdbCommander = require('../mock/mock-adb-commander');

suite('Input', function() {
  var subject,
      adb;

  setup(function() {
    adb = new MockAdbCommander();
    subject = new Input(adb);
  });

  suite('#tap', function() {
    test('should send tap command', function() {
      subject.tap(0, 0);
      assert.equal(adb.command, 'adb shell input tap 0 0');
    });
  });
});
