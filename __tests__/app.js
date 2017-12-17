'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ddd-aggregate:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ aggregateName: 'social user' });
  });

  it('creates Class files', () => {
    assert.file(['classes/social-user/index.js']);

    assert.file(['classes/social-user/test/index.js']);
    assert.file(['classes/social-user/test/social-user.assertion.js']);
  });

  it('creates Repo & DTG files', () => {
    assert.file(['repos/dtgs/social-user-dtg/index.js']);
    assert.file(['repos/social-user-repo/index.js']);

    assert.file(['repos/social-user-repo/test/index.js']);
  });

  it('creates Service files', () => {
    assert.file(['social-user-service/index.js']);

    assert.file(['social-user-service/test/social-user-service.spec/index.js']);
    assert.file(['social-user-service/test/index.js']);
    assert.file(['social-user-service/test/setup.js']);
  });
});
