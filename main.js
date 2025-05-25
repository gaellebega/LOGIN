document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default submit

    let isValid = true;

    // Clear errors
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Username
    if (username.value.trim() === "") {
      usernameError.textContent = "Username is required.";
      isValid = false;
    }

    // Email
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
    }

    // Password
    if (password.value.trim() === "") {
      passwordError.textContent = "Password is required.";
      isValid = false;
    }

    if (isValid) {
      form.submit(); // manually submit if everything is valid
    }
  });
});
