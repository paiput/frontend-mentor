const form = document.querySelector('.form-container__form');

const inputEmail = document.getElementById('email-inp');
const errorMsg = document.querySelector('.email-inp--error-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // shows two different messages depending on whether the email input is empty or has an invalid value
  (inputEmail.value.trim().length == 0) 
    ? (
      errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email",
      errorMsg.classList.remove('error-hidden'),
      inputEmail.classList.add('input-error')
    )
    : ( // if it has content, checks if the pattern below is met
        (inputEmail.value.trim().length > 0,
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          inputEmail.value.toLowerCase()
        ))
      ? (form.submit())
      : (
          errorMsg.innerHTML = "Please provide a valid email address",
          errorMsg.classList.remove('error-hidden'),
          inputEmail.classList.add('input-error')
      )
   )
});