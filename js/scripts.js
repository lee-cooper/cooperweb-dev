'use strict';

// Sidebar buttons
const openSidebarButton = document.getElementById("open-sidebar-button");
const closeSidebarButton = document.getElementById("close-sidebar-button");
const sidebar = document.getElementsByClassName("sidebar")[0];

openSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  openSidebarButton.classList.toggle("hide");
});

closeSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  openSidebarButton.classList.toggle("hide");
});