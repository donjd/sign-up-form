const form = document.querySelector("form");
const submitBtn = document.querySelector('button[type="submit"]');

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

const passwordVisibilityToggle = document.querySelector(
  ".password-visibility-toggle"
);
const passwordConfirmationVisibilityToggle = document.querySelector(
  ".password-confirmation-visibility-toggle"
);
const passwordEye = document.querySelector(".password-eye");
const passwordConfirmationEye = document.querySelector(
  ".password-confirmation-eye"
);

function togglePasswordVisibility(toggle, passwordType, icon) {
  toggle.addEventListener("click", (e) => {
    if (passwordType.type === "password") {
      passwordType.setAttribute("type", "text");
    } else {
      passwordType.setAttribute("type", "password");
    }

    icon.classList.toggle("accent-1");
  });
}

togglePasswordVisibility(passwordVisibilityToggle, password, passwordEye);
togglePasswordVisibility(
  passwordConfirmationVisibilityToggle,
  passwordConfirmation,
  passwordConfirmationEye
);

let errors = [];

function validateInput(inputType) {
  if (!inputType.value) {
    errors.push("Please fill out all fields.");
    inputType.classList.add("invalid");
  }
}

function validatePasswordsMatch() {
  if (password.value !== passwordConfirmation.value) {
    errors.push("Passwords must match.");
    password.classList.add("invalid");
    passwordConfirmation.classList.add("invalid");
  } else {
    password.classList.remove("invalid");
    passwordConfirmation.classList.remove("invalid");
  }
}

function validateSignUpForm() {
  form.addEventListener("click", (e) => {
    validatePasswordsMatch();
    validateInput(firstName);
    validateInput(lastName);
    validateInput(email);
    validateInput(password);
    validateInput(passwordConfirmation);

    if (errors.length > 0) {
      console.log(errors);
      e.preventDefault();
      errors = [];
    }
  });

  form.addEventListener("input", (e) => {
    if (e.target.classList.contains("invalid")) {
      if (
        e.target.type === "password" &&
        e.target.classList.contains("invalid")
      ) {
        validatePasswordsMatch();
      } else {
        e.target.classList.remove("invalid");
        errors = [];
      }
    }
  });
}

function validateLogInForm() {
  form.addEventListener("click", (e) => {
    validateInput(email);
    validateInput(password);

    if (errors.length > 0) {
      console.log(errors);
      e.preventDefault();
    }

    errors = [];
  });

  form.addEventListener("input", (e) => {
    if (e.target.classList.contains("invalid")) {
      e.target.classList.remove("invalid");
    }
  });
}

if (firstName) {
  validateSignUpForm();
} else {
  validateLogInForm();
}
