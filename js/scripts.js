'use strict';

const openSidebarButton = document.getElementById("open-sidebar-button");
const closeSidebarButton = document.getElementById("close-sidebar-button");

openSidebarButton.addEventListener("click", () => {
  openSidebarButton.classList.toggle("disabled");
  openSidebarButton.disabled = true;
  closeSidebarButton.focus();
});

closeSidebarButton.addEventListener("click", () => {
  openSidebarButton.classList.toggle("disabled");
  openSidebarButton.disabled = false;
  openSidebarButton.focus();
});