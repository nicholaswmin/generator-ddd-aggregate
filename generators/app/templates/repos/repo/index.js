'use strict';

const <%= aggregateName.pascalCase %>DTG = require('../dtgs/<%= aggregateName.paramCase %>-dtg')
const <%= aggregateName.pascalCase %> = require('../../classes/<%= aggregateName.paramCase %>')

const <%= aggregateName.camelCase %>DTG = new <%= aggregateName.pascalCase %>DTG()

class <%= aggregateName.pascalCase %>Repo {
  constructor() {

  }

  async upsert(db, <%= aggregateName.camelCase %>) {
    return <%= aggregateName.camelCase %>DTG.upsert(db, <%= aggregateName.camelCase %>);
  }

  async get(db, filter) {
    const <%= aggregateName.camelCase %>Data = await <%= aggregateName.camelCase %>DTG.findOne(db, filter)

    return <%= aggregateName.camelCase %>Data ? new <%= aggregateName.pascalCase %>(<%= aggregateName.camelCase %>Data) : undefined
  }

  async getAll(db, filter) {
    const <%= aggregateName.camelCase %>sData = await <%= aggregateName.camelCase %>DTG.findAll(db, filter)

    return <%= aggregateName.camelCase %>sData.map(<%= aggregateName.camelCase %>Data => new <%= aggregateName.pascalCase %>(<%= aggregateName.camelCase %>Data))
  }
}

module.exports = <%= aggregateName.pascalCase %>Repo
