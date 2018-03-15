'use strict'

const chai = require('chai')
const <%= aggregateName.pascalCase %>Service = require('../index.js')
const <%= aggregateName.pascalCase %>RepoMock = require('./mocks/<%= aggregateName.paramCase %>-repo')

chai.should()

let <%= aggregateName.camelCase %>Service

beforeEach(() => {
  <%= aggregateName.camelCase %>Service = new <%= aggregateName.pascalCase %>Service({
    db: {},
    rtcSessionRepo: new <%= aggregateName.pascalCase %>RepoMock()
  })
})

describe('#foo', () => {
  it('does foo', () => {

  })
})
