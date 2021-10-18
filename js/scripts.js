const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuToggle = document.getElementsByClassName("sidebar-toggle")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  toggleButton.classList.toggle("active");
});