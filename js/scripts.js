"use strict";

const root = document.documentElement;

document.addEventListener("DOMContentLoaded", () => {
  const themeIsSet = localStorage.getItem("themeIsSet");

  if(themeIsSet === null) {
    setTheme("#000", "#f8f8f8", "#f8f8f8", "#000");
  }

  const primaryText = localStorage.getItem("--primary-text-color");
  const primaryBackground = localStorage.getItem("--primary-background-color");
  const secondaryText = localStorage.getItem("--secondary-text-color");
  const secondaryBackground = localStorage.getItem("--secondary-background-color");

  setTheme(primaryText, primaryBackground, secondaryText, secondaryBackground);
});

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

function setTheme(primaryText, primaryBackground, secondaryText, secondaryBackground) {
  localStorage.setItem("themeIsSet", true);
  localStorage.setItem("--primary-text-color", primaryText);
  localStorage.setItem("--primary-background-color", primaryBackground);
  localStorage.setItem("--secondary-text-color", secondaryText);
  localStorage.setItem("--secondary-background-color", secondaryBackground);

  root.style.setProperty("--primary-text-color", primaryText);
  root.style.setProperty("--primary-background-color", primaryBackground);
  root.style.setProperty("--secondary-text-color", secondaryText);
  root.style.setProperty("--secondary-background-color", secondaryBackground);
}

const bubblegumButton = document.getElementById("bubblegum");
const oreoButton = document.getElementById("oreo");
const electricLemonadeButton = document.getElementById("electric-lemonade");

bubblegumButton.addEventListener("click", () => {
  setTheme("#000", "#fff", "#000", "#fce2ff");
});

oreoButton.addEventListener("click", () => {
  setTheme("#000", "#f8f8f8", "#f8f8f8", "#000");
});

electricLemonadeButton.addEventListener("click", () => {
  setTheme("#000", "#f8f8f8", "#f8f8f8", "#0063B2");
  //#fdff54 yellow
});
