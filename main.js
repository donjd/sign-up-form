const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

const submitBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

// function validateLogInForm() {
//   form.addEventListener("click", (e) => {
//     let errors = [];
//     switch (true) {
//       case e.target.classList.contains("fa-eye"):
//         toggleEyeColor(e);
//         break;

//       case e.target.type === "submit":
//         if (email.value === "" || null) {
//           errors.push("Please enter your email.");
//           addInvalidClass(email);
//         } else {
//           removeInvalidClass(email);
//         }

//         if (password.value === "" || null) {
//           errors.push("Please enter your password.");
//           addInvalidClass(password);
//         } else {
//           removeInvalidClass(password);
//         }

//         if (errors.length > 0) {
//           console.log(errors);
//           e.preventDefault();
//         }
//         break;
//     }
//   });

//   form.addEventListener("input", (e) => {
//     if (e.target.classList.contains("invalid")) {
//       e.target.classList.remove("invalid");
//     }
//   });
// }

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

function validateSignUpForm() {
  form.addEventListener("click", (e) => {
    let errors = [];

    switch (true) {
      case e.target.classList.contains("fa-eye"):
        e.target.classList.toggle("invalid");
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
          errors.push("Please enter your email.");
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
        } else if (password.value !== passwordConfirmation.value) {
          errors.push("Password confirmation must match password.");
          addInvalidClass(passwordConfirmation);
        } else {
          removeInvalidClass(passwordConfirmation);
        }

        if (errors.length > 0) {
          console.log(errors);
          e.preventDefault();
        }
        break;
    }
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
