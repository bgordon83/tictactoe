'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onClickCell = function () {
  // display x or o
  // - use jQuery to replace value of clicked square with .text

  // switch turns

  // determine game state:
  //  - winner?
  //  - tie?
  //  - keep playing?

  // hook up to game API
  //  - PATCH to api with index and value


  console.log('clicked')
}
const onReset = function () {
  console.log('reset')
}

// onNewGame
//  - call api.newGame
//  - handle success and error

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onClickCell,
  onReset,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut

}
