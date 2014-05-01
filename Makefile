TESTS?=$(shell find test -name *-test.js)
MOCHA_OPTS=--require test/lib/test-helper.js \
					 --reporter spec \
					 --ui tdd \
					 $(TESTS)

.PHONY: default
default: jshint test

jshint:
	./node_modules/.bin/jshint .

.PHONY: test
test: test-unit

.PHONY: test-unit
test-unit:
	./node_modules/.bin/mocha $(MOCHA_OPTS)
