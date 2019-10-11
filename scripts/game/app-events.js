'use strict'
const api = require('./api')
const ui = require('./ui')
const gameEvents = require('./game/events')


const addHandlers = () => {

  $('#sign-in').on('submit', function(event) {
      event.preventDefault();
      authApi.signIn(authUi.signInSuccess, authUi.signInFail, data);
    }



module.exports = {
  addHandlers,
};
