const fwsTwoContainer = document.querySelector('.fws-2-container');
const fwsThreeContainer = document.querySelector('.fws-3-container');
const fwsFourContainer = document.querySelector('.fws-4-container');
const tileTwoFlexGrow = document.querySelector('.tile-two-flex-grow');
const tileTwoFlexShrink = document.querySelector('.tile-two-flex-shrink');
const tileTwoFlexBasis = document.querySelector('.tile-two-flex-basis');

let justifyDisplay = document.querySelector('#justify-display');
let alignDisplay = document.querySelector('#align-display');
let flexDirectionDisplay = document.querySelector('#flex-direction-display');
let flexGrowDisplay = document.querySelector('#flex-grow-display');
let flexShrinkDisplay = document.querySelector('#flex-shrink-display');
let flexBasisDisplay = document.querySelector('#flex-basis-display');

document
  .querySelector('#justify-content-select')
  .addEventListener('change', function (e) {
    justifyDisplay.innerHTML = e.target.value;
    fwsTwoContainer.style.justifyContent = e.target.value;
  });

document
  .querySelector('#align-items-select')
  .addEventListener('change', function (e) {
    alignDisplay.innerHTML = e.target.value;
    fwsThreeContainer.style.alignItems = e.target.value;
  });

document
  .querySelector('#flex-direction-select')
  .addEventListener('change', function (e) {
    flexDirectionDisplay.innerHTML = e.target.value;
    fwsFourContainer.style.flexDirection = e.target.value;
  });

document
  .querySelector('#flex-grow-select')
  .addEventListener('change', function (e) {
    console.log(e);
    flexGrowDisplay.innerHTML = e.target.value;
    tileTwoFlexGrow.style.flexGrow = e.target.value;
  });

document
  .querySelector('#flex-shrink-select')
  .addEventListener('change', function (e) {
    console.log(e);
    flexShrinkDisplay.innerHTML = e.target.value;
    tileTwoFlexShrink.style.flexShrink = e.target.value;
  });

document
  .querySelector('#flex-basis-select')
  .addEventListener('change', function (e) {
    console.log(e);
    flexBasisDisplay.innerHTML = e.target.value;
    tileTwoFlexBasis.style.flexBasis = e.target.value;
  });
