// access elements
let icon = document.getElementById('color-mode');
let background = document.querySelector('body');
let image = document.querySelector('img');

// keep track of color mode
let dark = false;

// set to dark mode
function darkMode() {
  background.style.backgroundColor = '#111111'; // dark gray
  background.style.color = 'white';
  icon.style.fill = 'white';
  image.src = 'network-brackets-dark.png';
  // update mode variable
  dark = true;
}

// set to light mode
function lightMode() {
  background.style.backgroundColor = 'white';
  background.style.color = 'black';
  icon.style.fill = 'initial';
  image.src = 'network-brackets.png';
  // update mode variable
  dark = false;
}

// determine which mode to switch to
function modeSwitch() {
  if (dark == false) {
    darkMode();
  } else {
    lightMode();
  }
}

icon.addEventListener('click', modeSwitch);