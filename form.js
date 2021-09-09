const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValid = form.useremail.value;
  if (emailValid.toLowerCase() !== emailValid) {
    const errorType = form.querySelector('#email-error');
    errorType.textContent = 'Form not Sent!!!. Change email to lowercase.';
    errorType.style.display = 'block';
  } else {
    form.submit();
  }
});