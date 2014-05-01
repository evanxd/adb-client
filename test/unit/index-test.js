'use strict';

var AdbClient = require('../../index');

suite('AdbClient', function() {
  var subject;

  setup(function() {
    subject = new AdbClient();
  });

  test('should have input object', function() {
    assert.ok(subject.input);
  });
});
