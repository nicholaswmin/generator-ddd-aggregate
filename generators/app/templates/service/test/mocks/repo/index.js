'use strict'

const <%= aggregateName.pascalCase %> = require('../../../../classes/<%= aggregateName.paramCase %>')
const MockRepo = require('mock-repo')

class <%= aggregateName.pascalCase %>RepoMock extends MockRepo {
  constructor() {
    super({
      primaryKey: 'id_<%= aggregateName.snakeCase %>',
      Class: <%= aggregateName.pascalCase %>
    })
  }
}

module.exports = <%= aggregateName.pascalCase %>RepoMock
