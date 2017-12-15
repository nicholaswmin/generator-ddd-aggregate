'use strict'

class UserDTG {
  constructor() {

  }

  async upsert(db, user) {
    const exists = await this.findOne(db, { id_user: user.id_user })

    if (exists) {
      return await this.update(db, user)
    } else {
      return await this.insert(db, user)
    }
  }

  findAll(db, filter) {
    return db.table('user')
      .modify(q => {
        if (filter) {
          q.where(filter)
        }
      })
      .map(userData => {
        userData.is_admin = !!userData.is_admin
        userData.email_verified = !!userData.email_verified

        return userData
      })
  }

  findOne(db, filter) {
    return db.table('user')
      .first()
      .where(filter)
      .then(userData => {
        if (userData) {
          userData.is_admin = !!userData.is_admin
          userData.email_verified = !!userData.email_verified
        }

        return userData
      })
  }

  insert(db, user) {
    return db('user').insert({
      id_user: user.id_user,
      id_social_user: user.id_social_user,
      name: user.name,
      email: user.email,
      password: user.password,
      network: user.network,
      is_admin: user.is_admin,
      last_token: user.last_token,
      password_reset_token: user.password_reset_token,
      email_verification_token: user.email_verification_token,
      email_verified: user.email_verified,
      editor_preferences: JSON.stringify(user.editor_preferences),
      user_json: user.user_json
    })
  }

  update(db, user) {
    return db('user').update({
      id_social_user: user.id_social_user,
      name: user.name,
      email: user.email,
      password: user.password,
      network: user.network,
      is_admin: user.is_admin,
      last_token: user.last_token,
      password_reset_token: user.password_reset_token,
      email_verification_token: user.email_verification_token,
      email_verified: user.email_verified,
      editor_preferences: JSON.stringify(user.editor_preferences),
      user_json: user.user_json
    })
    .where({ id_user: user.id_user })
  }
}

module.exports = UserDTG
