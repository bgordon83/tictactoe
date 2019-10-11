'use strict'

const config = require('../config')
// require `store` so we have access to our `token`
// so the API knows who we are
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token' + store.token
    },
    data: ''
  })
}

module.exports = {

}
