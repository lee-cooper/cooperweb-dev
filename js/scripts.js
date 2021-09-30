const toggleButton = document.getElementsByClassName("toggle-button")[0];
const profile = document.getElementsByClassName("profile")[0];
const widgets = document.getElementsByClassName("widgets")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

toggleButton.addEventListener("click", () => {
  profile.classList.toggle("active");
  widgets.classList.toggle("active");
  sidebar.classList.toggle("active");
  toggleButton.classList.toggle("active");
});