const correctUsername = "varun";
const correctPassword = "12345";

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (user === correctUsername && pass === correctPassword) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("portfolio-container").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Incorrect username or password!";
  }
}

function showResume() {
  document.getElementById("resume-display").classList.remove("hidden");
}

function goToGitHub() {
  window.open("https://github.com/varun-11-p/c-programms.git", "_blank");
}
