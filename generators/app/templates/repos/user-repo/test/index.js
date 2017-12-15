'use strict'

const chai = require('chai')
const LocalUser = require('../../../classes/local-user')
const SocialUser = require('../../../classes/social-user')
const localUserInstanceAssertion = require('../../../classes/local-user/test/local-user.assertion.js')
const socialUserInstanceAssertion = require('../../../classes/social-user/test/social-user.assertion.js')

const db = require('../../../../../db')
const UserRepo = require('../index.js')

chai.should()
chai.use(localUserInstanceAssertion)
chai.use(socialUserInstanceAssertion)

let userRepo;

beforeEach(() => {
  userRepo = new UserRepo();

  return db.migrate.rollback()
    .then(() => {
      return db.migrate.latest()
    }).then(() => {
      return db.seed.run()
    })
})

describe('#get()', () => {
  describe('Local User', () => {
    it('returns a Local User ', () => {
      return userRepo.get(db, {
        network: 'local'
      }).then(user => {
        user.should.be.a.localUserInstance
      })
    })
  })

  describe('Social User', () => {
    it('returns a Social User', () => {
      return userRepo.get(db, {
        network: 'facebook'
      }).then(user => {
        user.should.be.a.socialUserInstance
      })
    })
  })
})

describe('#getAll()', () => {
  let users

  beforeEach(() => {
    return userRepo.getAll(db).then(result => {
      users = result
    })
  })

  it('returns all the users', () => {
    users.should.have.lengthOf(2)
  })

  it('users are constructed in the appropriate type', () => {
    const localUser = users.find(user => user.network === 'local')
    const socialUser = users.find(user => user.network !== 'local')

    localUser.should.be.a.localUserInstance
    socialUser.should.be.a.socialUserInstance
  })
})

describe('#upsert()', () => {
  describe('Local User', () => {
    let localUser

    beforeEach(() => {
      localUser = new LocalUser({
        id_user: '683ba9cf-8627-4b61-add4-ef2c5fa7b1aa',
        name: 'Richard Miles',
        email: 'richard@miles.com'
      })
      .setPassword('hellorichardmiles')
    })

    describe('User does not exist', () => {
      it('inserts a User if he does not exist', () => {
        return userRepo.upsert(db, localUser).then(() => {
          return userRepo.getAll(db)
        }).then(users => {
          users.should.have.lengthOf(3)
        })
      })
    })

    describe('User exists', () => {
      let updatedLocalUser

      beforeEach(() => {
        updatedLocalUser = new LocalUser({
          id_user: '683ba9cf-8627-4b61-add4-ef2c5fa7b1aa',
          name: 'Richard Miles',
          email: 'new@email.com' // changed prop
        })
        .setPassword('hellorichardmiles')

        return userRepo.upsert(db, localUser).then(() => {
          return userRepo.upsert(db, updatedLocalUser)
        })
        .then(() => {
          return userRepo.get(db, { id_user: localUser.id_user })
        })
      })

      it('does not insert a new User', () => {
        return userRepo.getAll(db).then(users => {
          users.should.have.lengthOf(3)
        })
      })

      it('updates the User information', () => {
        return userRepo.get(db, { id_user: localUser.id_user }).then(user => {
          user.email.should.equal('new@email.com')
        })
      })

      it('returns a valid Local User Instance', () => {
        return userRepo.get(db, { id_user: localUser.id_user }).then(user => {
          user.should.be.a.localUserInstance
        })
      })
    })
  })

  describe('Social User', () => {
    let socialUser

    beforeEach(() => {
      socialUser = new SocialUser({
        id_user: 'ec8b0358-f630-4d8e-9461-e32c709c7185',
        id_social_user: '000000000002',
        name: 'Mary Major',
        email: 'mary@major.com',
        network: 'facebook',
        user_json: '{"foo":"baz"}'
      })
    })

    describe('User does not exist', () => {
      it('inserts a User if he does not exist', () => {
        return userRepo.upsert(db, socialUser).then(() => {
          return userRepo.getAll(db)
        }).then(users => {
          users.should.have.lengthOf(3)
        })
      })
    })

    describe('User exists', () => {
      let updatedSocialUser

      beforeEach(() => {
        updatedSocialUser = new SocialUser({
          id_user: 'ec8b0358-f630-4d8e-9461-e32c709c7185',
          id_social_user: '000000000002',
          name: 'Mary Major',
          email: 'new@email.com', // changed prop
          network: 'facebook',
          user_json: '{"foo":"baz"}'
        })

        return userRepo.upsert(db, socialUser).then(() => {
          return userRepo.upsert(db, updatedSocialUser)
        })
        .then(() => {
          return userRepo.get(db, { id_user: socialUser.id_user })
        })
      })

      it('does not insert a new User', () => {
        return userRepo.getAll(db).then(users => {
          users.should.have.lengthOf(3)
        })
      })

      it('updates the User information', () => {
        return userRepo.get(db, { id_user: socialUser.id_user }).then(user => {
          user.email.should.equal('new@email.com')
        })
      })

      it('returns a valid Social User Instance', () => {
        return userRepo.get(db, { id_user: socialUser.id_user }).then(user => {
          user.should.be.a.socialUserInstance
        })
      })
    })
  })
})
