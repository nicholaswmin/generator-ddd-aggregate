'use strict'

const chai = require('chai')
const expect = chai.expect
const <%= aggregateName.allLowercase %>InstanceAssertion = require('./<%= aggregateName.allLowercase %>.assertion.js')

const <%= aggregateName.firstUppercase %> = require('../index.js')

chai.should()
chai.use(<%= aggregateName.allLowercase %>InstanceAssertion)

const test<%= aggregateName.firstUppercase %> = {
  foo: 'bar'
}

let <%= aggregateName.allLowercase %>

beforeEach(() => {
  <%= aggregateName.allLowercase %> = new <%= aggregateName.firstUppercase %>(test<%= aggregateName.firstUppercase %>)
})

describe('instantiation', () => {
  it('instantiates', () => {
    <%= aggregateName.allLowercase %>.should.be.a.<%= aggregateName.allLowercase %>Instance
  })
})

describe('#fooMethod()', () => {
  it('does foo', () => {
    // foo!
  })
})
