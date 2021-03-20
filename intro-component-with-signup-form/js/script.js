const form = document.querySelector(".container__form");

const inputFirstName = document.getElementById("firstname-input");
const inputLastName = document.getElementById("lastname-input");
const inputEmail = document.getElementById("email-input");
const inputPassword = document.getElementById("password-input");

// List of each input, and a value that indicates if it is valid or not (in other words, if it contains text or not, except for the email input)
const formIsValid = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
};

// Validates each input by cheking if there is text in it, and adds or removes the error message respectively
const validateInputs = () => {
  // First name input
  if (inputFirstName.value.trim().length > 0) {
    formIsValid.firstName = true;
    inputFirstName.nextElementSibling.classList.add("error-hidden");
    inputFirstName.classList.remove("input-error");
  } else {
    formIsValid.firstName = false;
    inputFirstName.nextElementSibling.classList.remove("error-hidden");
    inputFirstName.classList.add("input-error");
  }

  // Last name input
  if (inputLastName.value.trim().length > 0) {
    formIsValid.lastName = true;
    inputLastName.nextElementSibling.classList.add("error-hidden");
    inputLastName.classList.remove("input-error");
  } else {
    formIsValid.lastName = false;
    inputLastName.nextElementSibling.classList.remove("error-hidden");
    inputLastName.classList.add("input-error");
  }

  // Email input
  (inputEmail.value.trim().length > 0,
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    inputEmail.value.toLowerCase()
  ))
    ? ((formIsValid.email = true),
      inputEmail.nextElementSibling.classList.add("error-hidden"),
      inputEmail.classList.remove("input-error"))
    : ((formIsValid.email = false),
      inputEmail.nextElementSibling.classList.remove("error-hidden"),
      inputEmail.classList.add("input-error"));

  // Password input
  if (inputPassword.value.trim().length > 0) {
    formIsValid.password = true;
    inputPassword.nextElementSibling.classList.add("error-hidden");
    inputPassword.classList.remove("input-error");
  } else {
    formIsValid.password = false;
    inputPassword.nextElementSibling.classList.remove("error-hidden");
    inputPassword.classList.add("input-error");
  }
}

// Copies `formIsValid` values into an array called `formValues`, then checks if one of them is false, and if that's the case, 
// it executes `validateInputs()`, if that's not the case, it just submit de form
const validateForm = () => {
  const formValues = Object.values(formIsValid);
  const valid = formValues.findIndex((value) => value == false);
  valid == -1 ? form.submit() : validateInputs();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});