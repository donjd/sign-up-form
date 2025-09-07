const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const submitBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

function togglePasswordVisibility(passwordType) {
  if (passwordType.type == "password") {
    passwordType.setAttribute("type", "text");
  } else {
    passwordType.setAttribute("type", "password");
  }
}

function toggleEyeColor(e) {
  switch (true) {
    case e.target.classList.contains("password-visibility-toggle"):
      togglePasswordVisibility(password);
      break;

    case e.target.classList.contains("password-confirmation-visibility-toggle"):
      togglePasswordVisibility(passwordConfirmation);
      break;
  }
  e.target.classList.toggle("accent-1");
}

function addInvalidClass(e) {
  e.classList.add("invalid");
}

function removeInvalidClass(e) {
  e.classList.remove("invalid");
}

form.addEventListener("click", (e) => {
  let errors = [];
  switch (true) {
    case e.target.classList.contains("fa-eye"):
      toggleEyeColor(e);
      break;

    case e.target.type === "submit":
      if (firstName.value === "" || null) {
        errors.push("Please enter your first name.");
        addInvalidClass(firstName);
      } else {
        removeInvalidClass(firstName);
      }

      if (lastName.value === "" || null) {
        errors.push("Please enter your last name.");
        addInvalidClass(lastName);
      } else {
        removeInvalidClass(lastName);
      }
      if (email.value === "" || null) {
        errors.push("Please enter your last name.");
        addInvalidClass(email);
      } else {
        removeInvalidClass(email);
      }
      if (password.value === "" || null) {
        errors.push("Please enter a password.");
        addInvalidClass(password);
      } else {
        removeInvalidClass(password);
      }

      if (passwordConfirmation.value === "" || null) {
        errors.push("Please confirm password.");
        addInvalidClass(passwordConfirmation);
      } else {
        removeInvalidClass(passwordConfirmation);
      }

      if (errors.length > 0) {
        e.preventDefault();
      }
      break;
  }
});
