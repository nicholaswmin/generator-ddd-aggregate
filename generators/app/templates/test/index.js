'use strict'

describe('Classes', () => {
  describe('<%= aggregateName.titleCase %>', () => {
    require('../classes/<%= aggregateName.paramCase %>/test/index.js')
  })
})

describe('Repos', () => {
  describe('<%= aggregateName.titleCase %> Repo', () => {
    require('../repos/<%= aggregateName.paramCase %>-repo/test')
  })
})

describe('<%= aggregateName.titleCase %> Service', function() {
  require('../<%= aggregateName.paramCase %>-service/test/index.js')
})
