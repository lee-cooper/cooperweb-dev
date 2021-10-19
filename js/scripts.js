'use strict';

// Sidebar buttons
const openSidebarButton = document.getElementById("open-sidebar-button");
const closeSidebarButton = document.getElementById("close-sidebar-button");
const sidebar = document.getElementsByClassName("sidebar")[0];
const mainElement = document.getElementsByTagName("main")[0];

openSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  openSidebarButton.classList.toggle("disabled");
  openSidebarButton.disabled = true;
  closeSidebarButton.focus();

  // mainElement.classList.toggle("dim");
});

closeSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  openSidebarButton.classList.toggle("disabled");
  openSidebarButton.disabled = false;
  openSidebarButton.focus();

  // mainElement.classList.toggle("dim");
});