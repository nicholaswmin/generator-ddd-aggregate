'use strict'

const createError = require('http-errors')
const <%= aggregateName.pascalCase %> = require('../classes/<%= aggregateName.paramCase %>')

class <%= aggregateName.pascalCase %>Service {
  constructor({ db, <%= aggregateName.camelCase %>Repo }) {
    this.<%= aggregateName.camelCase %>Repo = <%= aggregateName.camelCase %>Repo
    this.db = db
  }
}

module.exports = <%= aggregateName.pascalCase %>Service
