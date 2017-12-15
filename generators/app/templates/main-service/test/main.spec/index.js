'use strict'

const chai = require('chai')

chai.should()

let <%= aggregateName.allLowercase %>Service

beforeEach(() => {
  <%= aggregateName.allLowercase %>Service = require('../setup.js')()
})

describe('#foo', () => {
  it('does foo', () => {

  })
})
