'use strict';

const <%= aggregateName.firstUppercase %>DTG = require('../dtgs/<%= aggregateName.allLowercase %>-dtg')
const <%= aggregateName.firstUppercase %> = require('../../classes/<%= aggregateName.allLowercase %>')

const <%= aggregateName.allLowercase %>DTG = new <%= aggregateName.firstUppercase %>DTG()

class <%= aggregateName.firstUppercase %>Repo {
  constructor() {

  }

  async upsert(db, <%= aggregateName.allLowercase %>) {
    return <%= aggregateName.allLowercase %>DTG.upsert(db, <%= aggregateName.allLowercase %>);
  }

  async getAll(db, filter) {
    const <%= aggregateName.allLowercase %>sData = await <%= aggregateName.allLowercase %>DTG.findAll(db, filter)

    return new <%= aggregateName.firstUppercase %>(<%= aggregateName.allLowercase %>Data)
  }
}

module.exports = <%= aggregateName.firstUppercase %>Repo;
