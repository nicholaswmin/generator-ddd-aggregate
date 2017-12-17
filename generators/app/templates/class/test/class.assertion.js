'use strict'

const Guid = require('guid')

module.exports = (chai, utils) => {
  utils.addProperty(chai.Assertion.prototype, '<%= aggregateName.camelCase %>Instance', function () {
    this._obj.should.be.ok
    this._obj.should.have.property('props')
    this._obj.props.should.be.an('Object')

    this._obj.props.should.have.property('id_<%= aggregateName.snakeCase %>')
    this._obj.props.id_<%= aggregateName.snakeCase %>.should.be.a('String')
    this.assert(
      Guid.isGuid(this._obj.props.id_<%= aggregateName.snakeCase %>),
      'expected #{this}.props to have a property id_<%= aggregateName.snakeCase %> in a GUID format'
    )

    // Rest of instance checks ..
  })
}
