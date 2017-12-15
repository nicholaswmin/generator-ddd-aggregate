'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ddd-aggregate:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ aggregateName: 'account' });
  });

  it('creates Class files', () => {
    assert.file(['classes/Account/index.js']);
    assert.file(['classes/Account/test/index.js']);
    assert.file(['classes/Account/test/account.assertion.js']);
  });

  it('creates Service files', () => {
    assert.file(['account-service/index.js']);
    assert.file(['account-service/test/account-service.spec/index.js']);
    assert.file(['account-service/test/account-service.spec/setup.js']);
    assert.file(['account-service/test/index.js']);
  });
});
