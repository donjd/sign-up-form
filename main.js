const eyeIcons = document.querySelectorAll(".fa-eye");
const passwordInputs = document.querySelectorAll('input[type="password"]');

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
