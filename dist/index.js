
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./project.cjs.production.min.js')
} else {
  module.exports = require('./project.cjs.development.js')
}
