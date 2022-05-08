'use strict';

const switchModeButton = document.querySelector('#switch-mode');

switchModeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
});
