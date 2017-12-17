'use strict'

describe('Classes', () => {
  describe('<%= aggregateName.titleCase %>', () => {
    require('../classes/<%= aggregateName.paramCase %>/test/index.js')
  })
})

describe('<%= aggregateName.titleCase %> Service', () => {
  require('../<%= aggregateName.paramCase %>-service/test/index.js')
})
