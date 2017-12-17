'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ddd-aggregate:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ aggregateName: 'social-account' });
  });

  it('creates Class files', () => {
    assert.file(['classes/social-account/index.js']);
    assert.file(['classes/social-account/test/index.js']);
    assert.file(['classes/social-account/test/social-account.assertion.js']);
  });
});
