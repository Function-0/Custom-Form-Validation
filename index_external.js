/*
 * Student: Ibrahim Jomaa | 300911528
 * Student: Ahud Mohammed | 301029718
 * Date: 3/15/2019
 * 
 * Filename: index_external.js
 */

var formValidity;
var hasTriedToSubmitBefore = false;

// Checks if first name form field has valid information.
function validateFName() {
  var fName = document.getElementById("first-name");
  var fNameValue = fName.value;
  var fNameRegExp1 = /^[a-zA-Z]+$/;
  var fNameRegExp2 = /^[A-Z]/;
  var fNameRegExp3 = /^[a-zA-Z]{1,15}$/;
  var fNameError = document.getElementById("first-name-error");
  try {
    if (fNameRegExp1.test(fNameValue) === false) {
      throw("First name must only contain letters");
    } else if (fNameRegExp2.test(fNameValue) === false) {
      throw("First name must start with a capital letter");
    } else if (fNameRegExp3.test(fNameValue) === false) {
      throw("First name must contain a maximum of 15 letters");
    }
    // Remove previous error message if first name form field now has valid data.
    fNameError.style.display = "none";
    fName.style.background = "";
  }
  catch(message){
    // Display error message if first name form field has invalid data.
    fNameError.style.display = "block";
    fNameError.innerHTML = message;
    fName.style.background = "rgb(255,233,233)";
    formValidity = false;
  }
}

// Checks if last name form field has valid information.
function validateLName() {
  var lName = document.getElementById("last-name");
  var lNameValue = lName.value;
  var lNameRegExp1 = /^[a-zA-Z]+$/;
  var lNameRegExp2 = /^[A-Z]/;
  var lNameRegExp3 = /^[a-zA-Z]{1,15}$/;
  var lNameError = document.getElementById("last-name-error");
  try {
    if (lNameRegExp1.test(lNameValue) === false) {
      throw("Last name must only contain letters");
    } else if (lNameRegExp2.test(lNameValue) === false) {
      throw("Last name must start with a capital letter");
    } else if (lNameRegExp3.test(lNameValue) === false) {
      throw("Last name must contain a maximum of 15 letters");
    }
    // Remove previous error message if last name form field now has valid data.
    lNameError.style.display = "none";
    lName.style.background = "";
  }
  catch(message){
    // Display error message if last name form field has invalid data.
    lNameError.style.display = "block";
    lNameError.innerHTML = message;
    lName.style.background = "rgb(255,233,233)";
    formValidity = false;
  }
}

// Checks if postal code form field has valid information.
function validatePostalCode() {
  var postalCode = document.getElementById("postal-code");
  var postalCodeValue = postalCode.value;
  var postalCodeRegExpCan = /^([A-Z][0-9]){3}$/;
  var postalCodeRegExpUs = /^[0-9]{5}$/;
  var postalCodeError = document.getElementById("postal-code-error");
  var country = document.getElementById("country");
  var countryValue = country.value;
  try {
    if (countryValue === "") {
      throw ("Please select a country");
    } else if (countryValue === "CA") {
      if (postalCodeRegExpCan.test(postalCodeValue) === false) {
        throw ("Invalid Canadian postal code");
      }
    } else if (countryValue === "US") {
      if (postalCodeRegExpUs.test(postalCodeValue) === false) {
        throw ("Invalid American postal code");
      }
    }
    // Remove previous error message if postal code form field now has valid data.
    postalCodeError.style.display = "none";
    postalCode.style.Background = "";
  }
  catch(message) {
    // Display error message if postal code form field has invalid data.
    postalCodeError.style.display = "block";
    postalCodeError.innerHTML = message;
    postalCode.style.Background = "rgb(255, 233, 233)";
    formValidity = false;
  }
}

// Checks if password form fields has valid information.
function validatePassword(){
  var password = document.getElementById("password");
  var passwordValue = password.value;
  var passwordConfirm = document.getElementById("confirm-password");
  var passwordConfirmValue = passwordConfirm.value;
  var passwordRegExp1 = /^[\w\.\\]{8,12}$/;
  var passwordRegExp2 = /[\d]/;
  var passwordRegExp3 = /[\\]/;
  var passwordRegExp4 = /[\.]/;
  var passwordError = document.getElementById("password-error");
  var passwordConfirmError = document.getElementById("password-error-confirm");
  // For the password form field.
  try{
    if((passwordRegExp1.test(passwordValue) === false) ||
      (passwordRegExp2.test(passwordValue) === false) ||
      (passwordRegExp3.test(passwordValue) === false) ||
      (passwordRegExp4.test(passwordValue) === false)) {
      throw("Password must be between 8 to 12 characters and must contain letters, numbers, . and \\");
    }
    // Remove previous error message if password form field now has valid data.
    passwordError.style.display = "none";
    password.style.background = "";
  }
  catch(message){
    // Display error message if password form field has invalid data.
    passwordError.style.display = "block";
    passwordError.innerHTML = message;
    password.style.background = "rgb(255,233,233)";
    formValidity = false;
  }
  // For the password confirm form field.
  try {
    if (passwordValue !== passwordConfirmValue) {
      throw("Passwords do not match");
    }
    // Remove previous error message if password confirm form field now has valid data.
    passwordConfirmError.style.display = "none";
    passwordConfirm.style.background = "";
  }
  catch(message){
    // Display error message if password confirm form field has invalid data.
    passwordConfirmError.style.display = "block";
    passwordConfirmError.innerHTML = message;
    passwordConfirm.style.background = "rgb(255,233,233)";
    formValidity = false;
  }
}

// Checks if email form field has valid information.
function validateEmail() {
  var email = document.getElementById("email");
  var emailAddress = email.value;
  var emailRegExp = /^[_\w\\-]+(\.[_\w\\-]+)*@[\w\\-]+(\.[\w\\-]+)*(\.[a-z]{2,6})$/;
  var emailError = document.getElementById("email-error");
  try {
    if (emailRegExp.test(emailAddress) === false) {
      throw("Please enter a valid email address");
    }
    // Remove previous error message if email form field now has valid data.
    emailError.style.display = "";
    email.style.background = "";
  }
  catch(message){
    // Display error message if email form field has invalid data.
    emailError.style.display = "block";
    emailError.innerHTML = message;
    email.style.background = "rgb(255,233,233)";
    formValidity = false;
  }
}

// Checks if phone form field has valid information.
function validatePhone() {
  var phone = document.getElementById("phone-number");
  var phoneNum = phone.value;
  var phoneRegExp = /^[0-9]{10}$/;
  var phoneError = document.getElementById("phone-error");
  try {
    if (phoneRegExp.test(phoneNum) === false) {
      throw("Please enter a valid phone number");
    }
    // Remove previous error message if phone form field now has valid data.
    phoneError.style.display = "none";
    phone.style.background = "";
  }
  catch(message) {
    // Display error message if phone form field has invalid data.
    phoneError.style.display = "block";
    phoneError.innerHTML = message;
    phone.style.background = "rgb(255,233,233)";
    formValidity = false;
  }
}

// Checks if form fields are filled.
function validateNoEmptyData() {
  // Check if input form fields are filled.
  var inputElements = document.querySelectorAll(".mainInput");
  var inputElementErrors = document.querySelectorAll(".errorMsgInput");
  var elementCount = inputElements.length;
  var currentElement;
  var currentElementError;
  for (var i = 0; i < elementCount; i++) {
    currentElement = inputElements[i];
    currentElementError = inputElementErrors[i];
    // Display error message if input form field is empty.
    if ((currentElement.value === "")) {
      currentElementError.style.display = "block";
      currentElementError.innerHTML = "This field is required"
      currentElement.style.background = "rgb(255,233,233)";
      formValidity = false;
    // Remove previous error message if input form field is filled,
    // not necessarily with valid information.
    } else {
      currentElementError.style.display = "none";
      currentElement.style.background = "";
    }
  }
  // Check if select form fields are filled.
  inputElements = document.querySelectorAll("select");
  inputElementErrors = document.querySelectorAll(".errorMsgSelect");
  elementCount = inputElements.length - 1;
  for (var i = 0; i < elementCount; i++) {
    currentElement = inputElements[i];
    currentElementError = inputElementErrors[i];
    // Display error message if select form field is empty.
    if (currentElement.value === "") {
      currentElementError.style.display = "block";
      currentElementError.innerHTML = "This field is required"
      currentElement.style.border = "1px solid red";
      formValidity = false;
    // Remove previous error message if select form field is filled,
    // not necessarily with valid information.
    } else {
      currentElementError.style.display = "none";
      currentElement.style.border = "";
    }
  }
}

// Checks if form fields are filled with valid information.
// This occurs whenever a form field's value has changed.
function validateAll() {
  // Only validate all form field values if the form
  // submit button was already selected before.
  if (hasTriedToSubmitBefore) {
    validateNoEmptyData();
    validatePassword();
    validateFName();
    validatePostalCode();
    validateLName();
    validateEmail();
    validatePhone();
  }
}

// Checks if form fields are filled with valid information,
// and submits the form. This only occurs if the form
// submit button was selected.
function validateForm(event) {
  event.preventDefault();
  // Reset form validity every time we run the function.
  formValidity = true;
  hasTriedToSubmitBefore = true;
  validateAll();
  if (formValidity === true) {
    document.getElementsByTagName("form")[0].submit();
  }
}

// Holds all event listeners required.
function createEventListeners() {
  // Checks if: [phone number, email, first name, last name,
  // password, postal code, and country] form fields have changed value.
  var inputPhone = document.getElementById("phone-number");
  inputPhone.addEventListener("change", validatePhone, false);
  var inputEmail = document.getElementById("email");
  inputEmail.addEventListener("change", validateEmail, false);
  var inputFName = document.getElementById("first-name");
  inputFName.addEventListener("change", validateFName, false);
  var inputLName = document.getElementById("last-name");
  inputLName.addEventListener("change", validateLName, false);
  var inputPassword = document.getElementById("password");
  inputPassword.addEventListener("change", validatePassword, false);
  var inputPasswordConfirm = document.getElementById("confirm-password");
  inputPasswordConfirm.addEventListener("change", validatePassword, false);
  var inputPostalCode = document.getElementById("postal-code");
  inputPostalCode.addEventListener("change", validatePostalCode, false);
  var inputCountry = document.getElementById("country");
  inputCountry.addEventListener("change", validatePostalCode, false);
  // Check if form submit button has been pressed.
  var form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", validateForm, false);
  // Check when any of the input form fields have changed value.
  // Only occurs if the form submit button was pressed before.
  var inputAll = document.querySelectorAll("div > input");
  for (i = 0; i < inputAll.length; i++) {
    inputAll[i].addEventListener("change", validateAll, false);
  }
  // Check when any of the select form fields have changed value.
  // Only occurs if the form submit button was pressed before.
  var selectAll = document.querySelectorAll("div > select");
  for (i = 0; i < selectAll.length; i++) {
    selectAll[i].addEventListener("change", validateAll, false);
  }
}

window.addEventListener("load", createEventListeners, false);