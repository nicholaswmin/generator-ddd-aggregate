'use strict'

const MockRepo = require('mock-repo')
const <%= aggregateName.firstUppercase %>Service = require('../index.js')

module.exports = () => {
  return new <%= aggregateName.firstUppercase %>Service({
    db: {},
    <%= aggregateName.allLowercase %>Repo: new MockRepo({ primary_key: 'id_<%= aggregateName.allLowercase %>'})
  })
}
