'use strict'

const Guid = require('guid')

class <%= aggregateName.firstUppercase %> {
  constructor(data) {
    this.id_<%= aggregateName.allLowercase %> = data.id_<%= aggregateName.allLowercase %> || Guid.raw()

  }

}

module.exports = <%= aggregateName.firstUppercase %>
