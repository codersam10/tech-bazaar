const profileIcon = document.getElementById("profile-icon");
// signup modal background
const signupModalBackground = document.getElementById(
  "signup-modal-background"
);

// close form icon
const closeIcon = document.getElementsByClassName("close-icon")[0];
const form = document.getElementById("signup-form");

const password = document.getElementById("password");
const passwordVisiblityIcon = document.getElementById(
  "password-visiblity-icon"
);
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordVisiblityIcon = document.getElementById(
  "confirm-password-visiblity-icon"
);

profileIcon.addEventListener("click", () => {
  signupModalBackground.classList.remove("d-none");
});

signupModalBackground.addEventListener("click", (e) => {
  signupModalBackground.classList.add("d-none");
});

form.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  signupModalBackground.classList.add("d-none");
});

//passowrd visibility functionality

passwordVisiblityIcon.addEventListener("click", (e) => {
  if (password.type === "password") {
    password.type = "text";
    passwordVisiblityIcon.src = "./images/visibility_on.svg";
  } else {
    password.type = "password";
    passwordVisiblityIcon.src = "./images/visibility_off.svg";
  }
});

confirmPasswordVisiblityIcon.addEventListener("click", (e) => {
  alert("hello");
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    confirmPasswordVisiblityIcon.src = "./images/visibility_on.svg";
  } else {
    confirmPassword.type = "password";
    confirmPasswordVisiblityIcon.src = "./images/visibility_off.svg";
  }
});
