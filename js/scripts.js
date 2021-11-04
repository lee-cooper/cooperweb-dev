"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let primaryText = localStorage.getItem("--primary-text-color");

  if(primaryText === null) {
    localStorage.setItem("--primary-text-color", "#000");
    localStorage.setItem("--primary-background-color", "#f8f8f8");
    localStorage.setItem("--secondary-background-color", "#000");
    localStorage.setItem("--secondary-text-color", "#f8f8f8");
  }

  primaryText = localStorage.getItem("--primary-text-color");
  let primaryBackground = localStorage.getItem("--primary-background-color");
  let secondaryText = localStorage.getItem("--secondary-text-color");
  let secondaryBackground = localStorage.getItem("--secondary-background-color");
  
  root.style.setProperty("--primary-text-color", primaryText);
  root.style.setProperty("--primary-background-color", primaryBackground);
  root.style.setProperty("--secondary-text-color", secondaryText);
  root.style.setProperty("--secondary-background-color", secondaryBackground);
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

const bubblegumButton = document.getElementById("bubblegum");
const oreoButton = document.getElementById("oreo");
const electricLemonade = document.getElementById("electric-lemonade");
const root = document.documentElement;

bubblegumButton.addEventListener("click", () => {
  localStorage.setItem("--primary-text-color", "#000");
  localStorage.setItem("--primary-background-color", "#fff");
  localStorage.setItem("--secondary-background-color", "#fce2ff");
  localStorage.setItem("--secondary-text-color", "#000");

  root.style.setProperty("--primary-text-color", "#000");
  root.style.setProperty("--primary-background-color", "#fff");
  root.style.setProperty("--secondary-background-color", "#fce2ff");
  root.style.setProperty("--secondary-text-color", "#000");
});

oreoButton.addEventListener("click", () => {

  localStorage.setItem("--primary-text-color", "#000");
  localStorage.setItem("--primary-background-color", "#f8f8f8");
  localStorage.setItem("--secondary-background-color", "#000");
  localStorage.setItem("--secondary-text-color", "#f8f8f8");

  root.style.setProperty("--primary-text-color", "#000");
  root.style.setProperty("--primary-background-color", "#f8f8f8");
  root.style.setProperty("--secondary-background-color", "#000");
  root.style.setProperty("--secondary-text-color", "#f8f8f8");
});

electricLemonade.addEventListener("click", () => {

  localStorage.setItem("--primary-text-color", "#000");
  localStorage.setItem("--primary-background-color", "#f8f8f8");
  localStorage.setItem("--secondary-background-color", "#0063B2");
  localStorage.setItem("--secondary-text-color", "#f8f8f8");

  root.style.setProperty("--primary-text-color", "#000");
  root.style.setProperty("--primary-background-color", "#f8f8f8");
  root.style.setProperty("--secondary-background-color", "#0063B2");
  root.style.setProperty("--secondary-text-color", "#f8f8f8");
});
