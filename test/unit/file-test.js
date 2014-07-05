'use strict';

var File = require('../../lib/file'),
    MockAdbCommander = require('../mock/mock-adb-commander');

suite('File', function() {
  var subject,
      adb;

  setup(function() {
    adb = new MockAdbCommander();
    subject = new File(adb);
  });

  suite('#push', function() {
    test('should send push command', function() {
      subject.push('path/to/source/a.file', 'path/to/target/a.file');
      assert.equal(
        adb.command,
        'adb push path/to/source/a.file path/to/target/a.file'
      );
    });
  });

  suite('#pull', function() {
    test('should send pull command', function() {
      subject.pull('path/to/source/a.file', 'path/to/target/a.file');
      assert.equal(
        adb.command,
        'adb pull path/to/source/a.file path/to/target/a.file'
      );
    });
  });
});
