'use strict'

const BasicScheme = require('./auth/basic')
const BearerScheme = require('./auth/bearer')

exports.plugin = {
  name: 'auth-lib',
  register: function (server) {
    server.auth.scheme(BasicScheme.name, BasicScheme.implementation)
    server.auth.scheme(BearerScheme.name, BearerScheme.implementation)
  }
}

exports.UnauthorizedError = require('./auth/unauthorized')
