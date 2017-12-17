'use strict'

const chai = require('chai')
const <%= aggregateName.pascalCase %> = require('../../../classes/<%= aggregateName.paramCase %>')
const <%= aggregateName.camelCase %>InstanceAssertion = require('../../../classes/<%= aggregateName.paramCase %>/test/<%= aggregateName.paramCase %>.assertion.js')

const db = require('../../../../db')
const <%= aggregateName.pascalCase %>Repo = require('../index.js')

chai.should()
chai.use(<%= aggregateName.camelCase %>InstanceAssertion)

let <%= aggregateName.camelCase %>Repo;

beforeEach(() => {
  <%= aggregateName.camelCase %>Repo = new <%= aggregateName.pascalCase %>Repo()

  return db.migrate.rollback()
    .then(() => {
      return db.migrate.latest()
    }).then(() => {
      return db.seed.run()
    })
})

describe('#get()', () => {
  describe('<%= aggregateName.pascalCase %>', () => {
    it('returns a <%= aggregateName.pascalCase %> ', () => {
      return <%= aggregateName.camelCase %>Repo.get(db, {
        name: 'John Doe'
      }).then(<%= aggregateName.camelCase %> => {
        <%= aggregateName.camelCase %>.should.be.a.<%= aggregateName.camelCase %>Instance
      })
    })
  })

})

describe('#getAll()', () => {
  let <%= aggregateName.camelCase %>s

  beforeEach(() => {
    return <%= aggregateName.camelCase %>Repo.getAll(db).then(result => {
      <%= aggregateName.camelCase %>s = result
    })
  })

  it('returns all the <%= aggregateName.camelCase %>s', () => {
    <%= aggregateName.camelCase %>s.should.have.lengthOf(2)
  })
})

describe('#upsert()', () => {
  describe('<%= aggregateName.pascalCase %>', () => {
    let <%= aggregateName.camelCase %>

    beforeEach(() => {
      <%= aggregateName.camelCase %> = new <%= aggregateName.pascalCase %>({
        id_<%= aggregateName.snakeCase %>: 'b27d83bd-04b5-49d5-94a1-1eb6afdc5650',
        name: 'Richard Roe'
      })
    })

    describe('<%= aggregateName.pascalCase %> does not exist', () => {
      it('inserts a <%= aggregateName.pascalCase %> if it does not exist', () => {
        return <%= aggregateName.camelCase %>Repo.upsert(db, <%= aggregateName.camelCase %>).then(() => {
          return <%= aggregateName.camelCase %>Repo.getAll(db)
        }).then(<%= aggregateName.camelCase %>s => {
          <%= aggregateName.camelCase %>s.should.have.lengthOf(3)
        })
      })
    })

    describe('<%= aggregateName.pascalCase %> exists', () => {
      let updated<%= aggregateName.pascalCase %>

      beforeEach(() => {
        updated<%= aggregateName.pascalCase %> = new <%= aggregateName.pascalCase %>({
          id_<%= aggregateName.snakeCase %>: '683ba9cf-8627-4b61-add4-ef2c5fa7b1aa',
          name: 'Bar' // changed prop
        })

        return <%= aggregateName.camelCase %>Repo.upsert(db, <%= aggregateName.camelCase %>).then(() => {
          return <%= aggregateName.camelCase %>Repo.upsert(db, updated<%= aggregateName.pascalCase %>)
        })
        .then(() => {
          return <%= aggregateName.camelCase %>Repo.get(db, {
            id_<%= aggregateName.snakeCase %>: <%= aggregateName.camelCase %>.id_<%= aggregateName.snakeCase %>
          })
        })
      })

      it('does not insert a new <%= aggregateName.pascalCase %>', () => {
        return <%= aggregateName.camelCase %>Repo.getAll(db).then(<%= aggregateName.camelCase %>s => {
          <%= aggregateName.camelCase %>s.should.have.lengthOf(3)
        })
      })

      it('updates the <%= aggregateName.pascalCase %> information', () => {
        return <%= aggregateName.camelCase %>Repo.get(db, {
          id_<%= aggregateName.snakeCase %>: updated<%= aggregateName.pascalCase %>.id_<%= aggregateName.snakeCase %>
        }).then(<%= aggregateName.camelCase %> => {
          <%= aggregateName.camelCase %>.name.should.equal('Bar')
        })
      })

      it('returns a valid Local <%= aggregateName.pascalCase %> Instance', () => {
        return <%= aggregateName.camelCase %>Repo.get(db, {
          id_<%= aggregateName.snakeCase %>: updated<%= aggregateName.pascalCase %>.id_<%= aggregateName.snakeCase %>
        }).then(<%= aggregateName.camelCase %> => {
          <%= aggregateName.camelCase %>.should.be.a.<%= aggregateName.camelCase %>Instance
        })
      })
    })
  })
})
