'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

const gameEvents = require('./game/events')



// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

})
// let sq1 = $('#square1');
// let sq2 = $('#square2');
// let sq3 = $('#square3');
// let sq4 = $('#square4');
// let sq5 = $('#square5');
// let )
// let sq7 =$('#square7');
// let sq8 =$('#square8');
// let sq9 =$('#square9');
//
// let playValid = false;
// let win = false;
