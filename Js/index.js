const counter = document.querySelector('#counter');
const slider = document.querySelector('#irange');
const strengthBox = document.getElementsByClassName('strength-box')

slider.addEventListener('input', function() {
    counter.textContent = this.value;
});

const backgroundFirstColor = getComputedStyle(document.documentElement).getPropertyValue('--background-first-color');
const backgroundLastColor = getComputedStyle(document.documentElement).getPropertyValue('--background-last-color');
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');

slider.addEventListener('input', (event) => {
  const tempSliderValue = event.target.value; 
  counter.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / slider.max) * 98;
 
  slider.style.backgroundImage = `linear-gradient(to right, ${secondaryColor} ${progress}%, ${backgroundFirstColor} ${progress}%, ${backgroundLastColor} ${progress}%)`;
})