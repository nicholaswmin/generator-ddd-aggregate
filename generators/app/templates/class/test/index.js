'use strict'

const chai = require('chai')
const expect = chai.expect
const <%= aggregateName.camelCase %>InstanceAssertion = require('./<%= aggregateName.paramCase %>.assertion.js')

const <%= aggregateName.pascalCase %> = require('../index.js')

chai.should()
chai.use(<%= aggregateName.camelCase %>InstanceAssertion)

const test<%= aggregateName.pascalCase %> = {
  foo: 'bar'
}

let <%= aggregateName.camelCase %>

beforeEach(() => {
  <%= aggregateName.camelCase %> = new <%= aggregateName.pascalCase %>(test<%= aggregateName.pascalCase %>)
})

describe('instantiation', () => {
  it('instantiates', () => {
    <%= aggregateName.camelCase %>.should.be.a.<%= aggregateName.camelCase %>Instance
  })
})

describe('#foo()', () => {
  it('does foo', () => {
    // foo!
  })
})
