'use strict';

const UserDTG = require('../dtgs/user-dtg');

const LocalUser = require('../../classes/local-user');
const SocialUser = require('../../classes/social-user');
const CompanyUser = require('../../classes/company-user');

const userDTG = new UserDTG();

class UserRepo {
  constructor() {

  }

  async upsert(db, user) {
    return userDTG.upsert(db, user);
  }

  async getAll(db, filter) {
    const usersData = await userDTG.findAll(db, filter)

    return usersData.map(this._createUser)
  }

  async get(db, filter) {
    const userData = await userDTG.findOne(db, filter)

    return userData ? this._createUser(userData) : undefined
  }

  // @TODO Package as separate factory
  _createUser(userData) {
    if (userData.network === 'local') {
      return new LocalUser(userData)
    }

    if (userData.network === 'company') {
      return new CompanyUser(userData)
    }

    return new SocialUser(userData)
  }
}

module.exports = UserRepo;
