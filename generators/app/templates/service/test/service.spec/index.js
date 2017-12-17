'use strict'

const chai = require('chai')

chai.should()

let <%= aggregateName.camelCase %>Service

beforeEach(() => {
  <%= aggregateName.camelCase %>Service = require('../setup.js')()
})

describe('#foo', () => {
  it('does foo', () => {

  })
})
