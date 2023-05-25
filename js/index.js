
function themeLight() {
  document.getElementById("mode-light").style.display = "none";
  document.getElementById("mode-dark").style.display = "block";

  var element = document.body;
  element.classList.toggle("dark-mode");
}

function themeDark() {
  document.getElementById("mode-light").style.display = "block";
  document.getElementById("mode-dark").style.display = "none";

  var element = document.body;
  element.classList.toggle("light-mode");
}