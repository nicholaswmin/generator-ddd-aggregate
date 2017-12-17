'use strict'

class <%= aggregateName.pascalCase %>DTG {
  constructor() {

  }

  async upsert(db, <%= aggregateName.camelCase %>) {
    const exists = await this.findOne(db, { id_<%= aggregateName.snakeCase %>: <%= aggregateName.camelCase %>.id_<%= aggregateName.snakeCase %> })

    if (exists) {
      return await this.update(db, <%= aggregateName.camelCase %>)
    } else {
      return await this.insert(db, <%= aggregateName.camelCase %>)
    }
  }

  findOne(db, filter) {
    return db('<%= aggregateName.snakeCase %>').first()
      .modify(q => {
        if (filter) {
          q.where(filter)
        }
      })
  }

  findAll(db, filter) {
    return db.table('<%= aggregateName.snakeCase %>')
      .modify(q => {
        if (filter) {
          q.where(filter)
        }
      })
  }

  insert(db, <%= aggregateName.camelCase %>) {
    return db('<%= aggregateName.snakeCase %>').insert({
      id_<%= aggregateName.snakeCase %>: <%= aggregateName.camelCase %>.id_<%= aggregateName.snakeCase %>
    })
  }

  update(db, <%= aggregateName.camelCase %>) {
    return db('<%= aggregateName.snakeCase %>')
      .update({
        name: <%= aggregateName.camelCase %>.name
      })
      .where({
        id_<%= aggregateName.snakeCase %>: <%= aggregateName.camelCase %>.id_<%= aggregateName.snakeCase %>
      })
  }
}

module.exports = <%= aggregateName.pascalCase %>DTG
