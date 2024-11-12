// get elements section
const profileSignupBtn = document.getElementById("profile-signup-btn");
const signupModalBackground = document.getElementById(
  "signup-modal-background"
);
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
const productCategories = document.getElementsByClassName("product-category");

/*functionality section*/
// open form modal
profileSignupBtn.addEventListener("click", () => {
  signupModalBackground.classList.remove("d-none");
});

// close modal on background click
signupModalBackground.addEventListener("click", (e) => {
  signupModalBackground.classList.add("d-none");
});

// prevent events inside form from propogating/bubbling to parent
form.addEventListener("click", (e) => {
  e.stopPropagation();
});

// close modal
closeIcon.addEventListener("click", () => {
  signupModalBackground.classList.add("d-none");
});

// form validation
const userErr = document.querySelector("#username-error");
const emailErr = document.querySelector("#email-error");
const passErr = document.querySelector("#password-error");
const confPassErr = document.querySelector("#confirm-password-error");
const signUpBtn = document.querySelector("#signup-btn");

signUpBtn.addEventListener("click", (e) => {
  const uName = document.querySelector("#username");
  const email = document.querySelector("#email");
  const pass = document.querySelector("#password");
  const confPass = document.querySelector("#confirm-password");

  if (uName.value === "") {
    userErr.style.display = "block";
  } else {
    userErr.style.display = "none";
  }

  if (email.value === "") {
    emailErr.style.display = "block";
  } else {
    emailErr.style.display = "none";
  }

  if (pass.value === "") {
    passErr.style.display = "block";
  } else {
    passErr.style.display = "none";
  }

  if (confPass.value === "") {
    confPassErr.style.display = "block";
  } else {
    confPassErr.style.display = "none";
  }

  if (uName.value && email.value && pass.value && confPass.value) {
    uName.value = "";
    email.value = "";
    pass.value = "";
    confPass.value = "";
    alert("Signup Successful");
  }
});

//form passowrd hide/show functionality
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
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    confirmPasswordVisiblityIcon.src = "./images/visibility_on.svg";
  } else {
    confirmPassword.type = "password";
    confirmPasswordVisiblityIcon.src = "./images/visibility_off.svg";
  }
});

// product category functionality

for (let i = 0; i < productCategories.length; i++) {
  productCategories[i].addEventListener("click", (e) => {
    for (let j = 0; j < productCategories.length; j++) {
      productCategories[j].classList.remove("active");
    }
    e.target.classList.add("active");
  });
}
