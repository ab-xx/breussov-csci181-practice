console.log("theme.js connected");

const themeToggleButton = document.querySelector("#theme-toggle");

themeToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggleButton.textContent = "☀️ Switch to Light Mode";
  } else {
    themeToggleButton.textContent = "🌙 Switch to Dark Mode";
  }
});
