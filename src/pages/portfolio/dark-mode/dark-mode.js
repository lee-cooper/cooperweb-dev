'use strict';

const switchModeButton = document.querySelector('#switch-mode');

switchModeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');

  // document.documentElement.style.setProperty(
  //   '--primary-background-color',
  //   '#2f2f2f'
  // );
  // document.documentElement.style.setProperty('--primary-text-color', '#f0f0f0');
  // document.documentElement.style.setProperty(
  //   '--secondary-background-color',
  //   '#575757'
  // );
});
