"use strict";
var validate,
  form = document.getElementById("form"),
  printAlert = function (e, t) {
    var r = document.createElement("P");
    r.classList.add("form__error"),
      (r.textContent = e),
      t.insertAdjacentElement("afterend", r);
  },
  validateEmail = function (e, t) {
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e.value.toLowerCase()
    )
      ? (e.classList.remove("form__input--error"),
        e.nextElementSibling.classList.contains("form__error") &&
          e.nextElementSibling.remove())
      : (e.classList.add("form__input--error"),
        !e.nextElementSibling.classList.contains("form__error") &&
          printAlert(t, e),
        (validate = !1));
  },
  validateForm = function (e, t) {
    !e.value.trim().length > 0 || null == e.value
      ? (e.classList.add("form__input--error"),
        !e.nextElementSibling.classList.contains("form__error") &&
          printAlert(t, e),
        (validate = !1))
      : (e.classList.remove("form__input--error"),
        e.nextElementSibling.classList.contains("form__error") &&
          e.nextElementSibling.remove());
  };
form.addEventListener("submit", function (e) {
  e.preventDefault(),
    (validate = !0),
    validateForm(form.firstname, "First Name cannot be empty"),
    validateForm(form.lastname, "Last Name cannot be empty"),
    validateEmail(form.email, "Looks like this is not an email"),
    validateForm(form.password, "Password cannot be empty"),
    validate && form.reset();
});
