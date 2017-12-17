'use strict'

const MockRepo = require('mock-repo')
const <%= aggregateName.pascalCase %>Service = require('../index.js')

module.exports = new <%= aggregateName.pascalCase %>Service({
  db: {},
  <%= aggregateName.camelCase %>Repo: new MockRepo({ primary_key: 'id_<%= aggregateName.snakeCase %>'})
})
