const eyeIcons = document.querySelectorAll(".fa-eye");
const passwordInputs = document.querySelectorAll('input[type="password"]');
const inputs = document.querySelectorAll("input");
const password = document.querySelector(".password");
const passwordConfirmation = document.querySelector(".password-confirmation");
const submitBtn = document.querySelector('button[type="submit"]');

function toggleEyeAccent(eyeIcon) {
  eyeIcon.classList.toggle("accent-1");
}

function togglePasswordVisibility(passwordInput) {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
}

eyeIcons.forEach((eyeIcon, i) => {
  eyeIcon.addEventListener("click", () => {
    toggleEyeAccent(eyeIcon);
    togglePasswordVisibility(passwordInputs[i]);
  });
});

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", (e) => {
    console.log(e);
  });
});

function addInvalidClass(element) {
  element.classList.add("invalid");
}
function removeInvalidClass(element) {
  element.classList.remove("invalid");
}

submitBtn.addEventListener("click", (e) => {
  if (password.value === "") {
    addInvalidClass(password);
    e.preventDefault();
  } else {
    removeInvalidClass(password);
  }

  if (passwordConfirmation.value === "") {
    addInvalidClass(passwordConfirmation);
    e.preventDefault();
  } else {
    removeInvalidClass(passwordConfirmation);
  }
});
