const emailLogin = document.querySelector('#email-field');
const passwordLogin = document.querySelector('#password-field');
const buttonLogin = document.querySelector('#login-button');
const sendButton = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');

function login() {
  const email = emailLogin.value;
  const password = passwordLogin.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

function enableSubmit() {
  const hasAttribute = sendButton.hasAttribute('disabled');
  if (!hasAttribute) {
    sendButton.setAttribute('disabled', true);
    sendButton.style.backgroundColor = 'gray';
  } else {
    sendButton.removeAttribute('disabled');
    sendButton.style.backgroundColor = 'purple';
  }
}

function main() {
  buttonLogin.addEventListener('click', login);
  agreementCheck.addEventListener('click', enableSubmit);
}

window.onload = main;
