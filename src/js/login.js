/* Using ES5 for better compatibility
* This code could be easily wrote using ES6
*
* Developed by Phillip Freitas
*/

function onSubmit() {
  var validUser = 'dev@aubay.com';
  var validPassword = '12345';
  var user = document.getElementById('user');
  var password = document.getElementById('password');
  
  if (!user.value) {
    return showToast('Username is required!');
  }
  
  if (!password.value) {
    return showToast('Password is required!');
  }
  
  if (!user.value && !password.value) {
    return showToast('Username and password are required!');
  }
  
  if ((user.value === validUser) && (password.value === validPassword)) {
    // The user and password must be encrypted before save
    // in localStorage in a real application. This is just a example.
    localStorage.setItem(
      'credentials',
      {
        user: user.value,
        password: password.value
      }
    );
    window.location.assign('https://www.aubay.pt');
    return;
  }
  
  return showToast('Incorrect username or password!');
}

function validateEmail(email) {
  if (!email.match(getRegex())) {
    return showMessageError(true, 'login__user--error');
  }
  return showMessageError(false, 'login__user--error');
}

function validatePassword(password) {
  if (password.length < 5) {
    return showMessageError(true, 'login__password--error');
  }
  return showMessageError(false, 'login__password--error');
}

function showMessageError(invalid, element) {
  var errorMessage = document.getElementsByClassName(element)[0];
  if (invalid) {
    errorMessage.removeAttribute('hidden');
  }
  if (!invalid) {
    errorMessage.setAttribute('hidden', 'true');
  }
}

function getRegex() {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm
}

function showToast(message) {
  var toast = document.getElementById("toast");
  toast.className = "show";
  toast.innerHTML = message;
  
  setTimeout(function(){
    toast.className = toast.className.replace("show", "");
  }, 5000);
}
