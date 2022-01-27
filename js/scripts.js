'use strict';

document.addEventListener('DOMContentLoaded', () => {
  setupSiteTheme();
});

function getTheme() {
  return {
    primaryText: localStorage.getItem('--primary-text-color'),
    primaryBackground: localStorage.getItem('--primary-background-color'),
    primaryAccent: localStorage.getItem('--primary-accent-color'),
    secondaryText: localStorage.getItem('--secondary-text-color'),
    secondaryBackground: localStorage.getItem('--secondary-background-color'),
  };
}

function setTheme(
  primaryText,
  primaryBackground,
  primaryAccent,
  secondaryText,
  secondaryBackground
) {
  localStorage.setItem('themeIsSet', true);
  localStorage.setItem('--primary-text-color', primaryText);
  localStorage.setItem('--primary-background-color', primaryBackground);
  localStorage.setItem('--primary-accent-color', primaryAccent);
  localStorage.setItem('--secondary-text-color', secondaryText);
  localStorage.setItem('--secondary-background-color', secondaryBackground);

  const root = document.documentElement;

  root.style.setProperty('--primary-text-color', primaryText);
  root.style.setProperty('--primary-background-color', primaryBackground);
  root.style.setProperty('--primary-accent-color', primaryAccent);
  root.style.setProperty('--secondary-text-color', secondaryText);
  root.style.setProperty('--secondary-background-color', secondaryBackground);
}

function setupSiteTheme() {
  const themeIsSet = localStorage.getItem('themeIsSet');

  if (!themeIsSet) {
    setTheme('#000', '#f8f8f8', '#d3d3d3', '#f8f8f8', '#000'); // Default to Oreo theme
    return;
  }

  const {
    primaryText,
    primaryBackground,
    primaryAccent,
    secondaryText,
    secondaryBackground,
  } = getTheme();

  setTheme(
    primaryText,
    primaryBackground,
    primaryAccent,
    secondaryText,
    secondaryBackground
  );
}

document.getElementById('themes').addEventListener('click', (event) => {
  if (event.target.id === 'bubblegum')
    setTheme('#000', '#fff', '#000', '#000', '#fce2ff');
  if (event.target.id === 'oreo')
    setTheme('#000', '#ffffff', '#d3d3d3', '#f8f8f8', '#000');
  if (event.target.id === 'electric-lemonade')
    setTheme('#000', '#f8f8f8', '#ddd000', '#f8f8f8', '#0063B2');
});

document.getElementById('open-sidebar-button').addEventListener('click', () => {
  const openSidebarButton = document.getElementById('open-sidebar-button');
  const closeSidebarButton = document.getElementById('close-sidebar-button');

  openSidebarButton.disabled = true;
  closeSidebarButton.focus();
});

document
  .getElementById('close-sidebar-button')
  .addEventListener('click', () => {
    const openSidebarButton = document.getElementById('open-sidebar-button');
    openSidebarButton.disabled = false;
    openSidebarButton.focus();
  });
