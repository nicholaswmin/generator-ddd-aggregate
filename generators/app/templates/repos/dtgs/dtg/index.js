'use strict'

class <%= aggregateName.firstUppercase %>DTG {
  constructor() {

  }

  async upsert(db, <%= aggregateName.allLowercase %>) {
    const exists = await this.findOne(db, { id_<%= aggregateName.allLowercase %>: <%= aggregateName.allLowercase %>.id_<%= aggregateName.allLowercase %> })

    if (exists) {
      return await this.update(db, <%= aggregateName.allLowercase %>)
    } else {
      return await this.insert(db, <%= aggregateName.allLowercase %>)
    }
  }

  findAll(db, filter) {
    return db.table('<%= aggregateName.allLowercase %>')
      .modify(q => {
        if (filter) {
          q.where(filter)
        }
      })
  }

  insert(db, <%= aggregateName.allLowercase %>) {
    return db('<%= aggregateName.allLowercase %>').insert({
      id_<%= aggregateName.allLowercase %>: <%= aggregateName.allLowercase %>.id_<%= aggregateName.allLowercase %>
    })
  }

  update(db, <%= aggregateName.allLowercase %>) {
    return db('<%= aggregateName.allLowercase %>').update({})
    .where({ id_<%= aggregateName.allLowercase %>: <%= aggregateName.allLowercase %>.id_<%= aggregateName.allLowercase %> })
  }
}

module.exports = <%= aggregateName.firstUppercase %>DTG
