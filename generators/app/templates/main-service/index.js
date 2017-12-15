'use strict'

const createError = require('http-errors')
const <%= aggregateName.firstUppercase %> = require('../classes/<%= aggregateName.firstUppercase %>')

class <%= aggregateName.firstUppercase %>Service {
  constructor({ db, <%= aggregateName.allLowercase %>Repo }) {
    this.db = db
  }
}

module.exports = <%= aggregateName.firstUppercase %>Service
