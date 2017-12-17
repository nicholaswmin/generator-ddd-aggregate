'use strict'

const Guid = require('guid')

class <%= aggregateName.pascalCase %> {
  constructor(data) {
    this.props = {
      id_<%= aggregateName.snakeCase %>: data.id_<%= aggregateName.snakeCase %> || Guid.raw()
    }
  }

}

module.exports = <%= aggregateName.pascalCase %>
