'use strict'

function onSubmit() {
  var user = document.getElementById('user');
  var password = document.getElementById('password');
  alert('Submitted')
}

function validateEmail(email) {
  if (!email.match(getRegex())) {
    return showMessageError(true, 'login__user--error')
  }
  return showMessageError(false, 'login__user--error')
}

function validatePassword(password) {
  if (password.length < 5) {
    return showMessageError(true, 'login__password--error')
  }
  return showMessageError(false, 'login__password--error')
}

function showMessageError(invalid, element) {
  var errorMessage = document.getElementsByClassName(element)[0];
  if (invalid) {
    errorMessage.removeAttribute('hidden')
  }
  if (!invalid) {
    errorMessage.setAttribute('hidden', 'true')
  }
}

function getRegex() {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm
}
