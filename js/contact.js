function clearForm() {
  document.forms.contact.reset();
  document.querySelectorAll(".error, .visible").forEach((x) => {
    x.classList.remove("error");
    x.classList.remove("visible");
  });
}

function validateName(event) {
  if (!event.target.value) {
    showError(event.target, "#name-error");
    return;
  }
  hideError(event.target, "#name-error");
}

function validateEmail(event) {
  if (!event.target.value || !isValidEmailFormat(event.target.value)) {
    showError(event.target, "#email-error");
    return;
  }

  hideError(event.target, "#email-error");
}

function validateMessage(event) {
  if (!event.target.value) {
    showError(event.target, "#message-error");
    return;
  }

  hideError(event.target, "#message-error");
}

function showError(input, errorTextSelector) {
  if (!input.classList.contains("error")) input.classList.toggle("error");
  if (!document.querySelector(errorTextSelector).classList.contains("visible"))
    document.querySelector(errorTextSelector).classList.toggle("visible");
}

function hideError(input, errorTextSelector) {
  if (input.classList.contains("error")) input.classList.toggle("error");
  if (document.querySelector(errorTextSelector).classList.contains("visible"))
    document.querySelector(errorTextSelector).classList.toggle("visible");
}

function isValidEmailFormat(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function submitForm(token) {
  const results = document.querySelectorAll(".error");

  if (results.length === 0) {
    document.getElementById("invisible-recaptcha-form").submit();
  }
}
