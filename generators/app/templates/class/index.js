'use strict'

const Guid = require('guid')

class <%= aggregateName.pascalCase %> {
  constructor({ id_<%= aggregateName.snakeCase %> = Guid.raw() }) {
    this.props = {
      id_<%= aggregateName.snakeCase %>
    }
  }
}

module.exports = <%= aggregateName.pascalCase %>
