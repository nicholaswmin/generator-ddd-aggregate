'use strict'

const Guid = require('guid')

class <%= aggregateName.pascalCase %> {
  constructor(data) {
    this.id_<%= aggregateName.snakeCase %> = data.id_<%= aggregateName.snakeCase %> || Guid.raw()
    this.name = data.name || null
  }

}

module.exports = <%= aggregateName.pascalCase %>
