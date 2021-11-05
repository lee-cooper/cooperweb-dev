
function clearForm() {
  document.forms.contact.reset();
}

function submitForm(token) {

  // TODO - perform validation

  document.getElementById("invisible-recaptcha-form").submit();
}
