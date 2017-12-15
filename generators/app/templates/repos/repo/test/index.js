'use strict'

const chai = require('chai')
const <%= aggregateName.firstUppercase %> = require('../../../classes/<%= aggregateName.firstUppercase %>')
const <%= aggregateName.allLowercase %>InstanceAssertion = require('../../../classes/<%= aggregateName.firstUppercase %>/test/<%= aggregateName.allLowercase %>.assertion.js')

const db = require('../../../../../db')
const <%= aggregateName.firstUppercase %>Repo = require('../index.js')

chai.should()
chai.use(<%= aggregateName.firstUppercase %>InstanceAssertion)

let <%= aggregateName.allLowercase %>Repo;

beforeEach(() => {
  <%= aggregateName.allLowercase %>Repo = new <%= aggregateName.firstUppercase %>Repo()

  return db.migrate.rollback()
    .then(() => {
      return db.migrate.latest()
    }).then(() => {
      return db.seed.run()
    })
})

describe('#get()', () => {
  describe('<%= aggregateName.firstUppercase %>', () => {
    it('returns a <%= aggregateName.firstUppercase %> ', () => {
      return <%= aggregateName.allLowercase %>Repo.get(db, {
        condition: 'foo'
      }).then(<%= aggregateName.allLowercase %> => {
        <%= aggregateName.allLowercase %>.should.be.a.<%= aggregateName.allLowercase %>Instance
      })
    })
  })

})

describe('#getAll()', () => {
  let <%= aggregateName.allLowercase %>s

  beforeEach(() => {
    return <%= aggregateName.allLowercase %>Repo.getAll(db).then(result => {
      <%= aggregateName.allLowercase %>s = result
    })
  })

  it('returns all the <%= aggregateName.allLowercase %>s', () => {
    <%= aggregateName.allLowercase %>.should.have.lengthOf(2)
  })
})

describe('#upsert()', () => {
  describe('<%= aggregateName.firstUppercase %>', () => {
    let <%= aggregateName.allLowercase %>

    beforeEach(() => {
      <%= aggregateName.firstUppercase %> = new <%= aggregateName.firstUppercase %>({
        id_<%= aggregateName.allLowercase %>: '683ba9cf-8627-4b61-add4-ef2c5fa7b1aa',
        name: 'Foo'
      })
    })

    describe('<%= aggregateName.firstUppercase %> does not exist', () => {
      it('inserts a <%= aggregateName.firstUppercase %> if it does not exist', () => {
        return <%= aggregateName.allLowercase %>Repo.upsert(db, <%= aggregateName.allLowercase %>).then(() => {
          return <%= aggregateName.allLowercase %>Repo.getAll(db)
        }).then(<%= aggregateName.allLowercase %>s => {
          <%= aggregateName.allLowercase %>s.should.have.lengthOf(3)
        })
      })
    })

    describe('<%= aggregateName.firstUppercase %> exists', () => {
      let updated<%= aggregateName.firstUppercase %>

      beforeEach(() => {
        updated<%= aggregateName.firstUppercase %> = new <%= aggregateName.firstUppercase %>({
          id_<%= aggregateName.allLowercase %>: '683ba9cf-8627-4b61-add4-ef2c5fa7b1aa',
          name: 'Bar' // changed prop
        })

        return <%= aggregateName.allLowercase %>Repo.upsert(db, <%= aggregateName.allLowercase %>).then(() => {
          return <%= aggregateName.allLowercase %>Repo.upsert(db, updated<%= aggregateName.firstUppercase %>)
        })
        .then(() => {
          return <%= aggregateName.allLowercase %>Repo.get(db, {
            id_<%= aggregateName.allLowercase %>: <%= aggregateName.allLowercase %>.id_<%= aggregateName.allLowercase %>
          })
        })
      })

      it('does not insert a new <%= aggregateName.firstUppercase %>', () => {
        return <%= aggregateName.allLowercase %>Repo.getAll(db).then(<%= aggregateName.allLowercase %>s => {
          <%= aggregateName.allLowercase %>s.should.have.lengthOf(3)
        })
      })

      it('updates the <%= aggregateName.firstUppercase %> information', () => {
        return <%= aggregateName.allLowercase %>Repo.get(db, {
          id_<%= aggregateName.allLowercase %>: <%= aggregateName.allLowercase %>.id_<%= aggregateName.allLowercase %>
        }).then(<%= aggregateName.allLowercase %> => {
          <%= aggregateName.allLowercase %>.name.should.equal('Bar')
        })
      })

      it('returns a valid Local <%= aggregateName.firstUppercase %> Instance', () => {
        return <%= aggregateName.allLowercase %>Repo.get(db, {
          id_<%= aggregateName.allLowercase %>: <%= aggregateName.allLowercase %>.id_<%= aggregateName.allLowercase %>
        }).then(<%= aggregateName.firstUppercase %> => {
          <%= aggregateName.allLowercase %>.should.be.a.<%= aggregateName.allLowercase %>Instance
        })
      })
    })
  })
})
