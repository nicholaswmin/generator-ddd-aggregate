'use strict'

const Guid = require('guid')

module.exports = (chai, utils) => {
  utils.addProperty(chai.Assertion.prototype, '<%= aggregateName.allLowercase %>Instance', function () {
    this._obj.should.be.ok

    this._obj.should.have.property('id_<%= aggregateName.allLowercase %>')
    this._obj.id_<%= aggregateName.allLowercase %>.should.be.a('String')
    this.assert(
      Guid.isGuid(this._obj.id_<%= aggregateName.allLowercase %>),
      'expected #{this} to have a property id_<%= aggregateName.allLowercase %> in a GUID format'
    )

    // Rest of instance checks go here..
  })
}
