
const form = document.getElementById('form');
const passwordElement1 = document.getElementById('password1');
const passwordElement2 = document.getElementById('password2');
const messageBox = document.getElementById('message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  isValid = form.checkValidity();

  if (!isValid) {
    message.textContent = 'Please fill all fields';
    message.style.color = 'red';
    messageBox.style.borderColor = 'red';
    return;
  }

  if (passwordElement1.value === passwordElement2.value) {
    passwordsMatch = true;
    passwordElement1.style.borderColor = 'green';
    passwordElement2.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Passwords do not match';
    message.style.color = 'red';
    messageBox.style.borderColor = 'red';
    passwordElement1.style.borderColor = 'red';
    passwordElement2.style.borderColor = 'red';
    return;
  }

  if (isValid && passwordsMatch) {
    message.textContent = 'Done! :)';
    message.style.color = 'green';
    messageBox.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}

function processFormData(e) {
  e.preventDefault();

  validateForm();

  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

form.addEventListener('submit', processFormData);