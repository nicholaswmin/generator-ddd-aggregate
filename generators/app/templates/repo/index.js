'use strict'

const <%= aggregateName.pascalCase %> = require('../../classes/<%= aggregateName.paramCase %>')
const GenericRepo = require('generic-repo')

class <%= aggregateName.pascalCase %>Repo extends GenericRepo {
  constructor() {
    super({
      tableName: '<%= aggregateName.snakeCase %>',
      primaryKey: 'id_<%= aggregateName.snakeCase %>',
      Class: <%= aggregateName.pascalCase %>
    })
  }

  /*
   * > Handle composite Aggregates by instantiating the child Repos on this
   * > Repo, then upsert/retrieve the child instances using those child Repos
   * > and eventually save this parent Aggregate by calling super.method()
   *
   * > An example, assuming this Aggregate is called 'Account' and contains a
   * > child 'Customer'.
   *
   * async upsert(db, account) {
   *   return db.transaction(async trx => {
   *     await this.customerRepo.upsert(trx, customer) // save the child
   *     await super.upsert(trx, account) // save the Aggregate
   *   })
   * }
   *
   */
}

module.exports = <%= aggregateName.pascalCase %>Repo
