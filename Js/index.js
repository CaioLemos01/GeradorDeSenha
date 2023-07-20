const counter = document.querySelector('#counter');
const slider = document.querySelector('#irange');
const submit = document.querySelector('#btn-submit');
const strengthBox1 = document.querySelector('#strength-box-1');
const strengthBox2 = document.querySelector('#strength-box-2');
const strengthBox3 = document.querySelector('#strength-box-3');
var result = document.querySelector('#password');

const backgroundFirstColor = getComputedStyle(document.documentElement).getPropertyValue('--background-first-color');
const backgroundLastColor = getComputedStyle(document.documentElement).getPropertyValue('--background-last-color');
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');

const weak = getComputedStyle(document.documentElement).getPropertyValue('--weak');
const medium = getComputedStyle(document.documentElement).getPropertyValue('--medium');
const strong = getComputedStyle(document.documentElement).getPropertyValue('--strong');

const checkBoxUpperCase = document.getElementById('iuppercase'); 
const checkBoxLowerCase = document.getElementById('ilowercase'); 
const checkBoxNumber = document.getElementById('inumber'); 
const checkBoxSymbol = document.getElementById('isymbol');

const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '&', '*', '?'];
var password = '';

let counterValue = 0;
slider.addEventListener('input', function() {
  counterValue = this.value;
  counter.textContent = counterValue;
  color();
});

slider.addEventListener('input', (event) => {
  const tempSliderValue = event.target.value;
  counter.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / slider.max) * 98;
 
  slider.style.backgroundImage = `linear-gradient(to right, ${secondaryColor} ${progress}%, ${backgroundFirstColor} ${progress}%, ${backgroundLastColor} ${progress}%)`;
})

function verifier() {
  if(counterValue != '0' && counterValue > 2) {
    password = '';
    createPassword();
  } else return;
}

function color() {
  if(counterValue == '0' || counterValue == '1') {
    strengthBox1.style.backgroundColor = 'transparent';
    strengthBox2.style.backgroundColor = 'transparent';
    strengthBox3.style.backgroundColor = 'transparent';
  }
  if(counterValue > 1 && counterValue <= 4) {
    strengthBox1.style.backgroundColor = weak;
  }
  
  if(counterValue > 4 && counterValue < 8) {
    strengthBox1.style.backgroundColor = medium;
    strengthBox2.style.backgroundColor = medium;
  } else if(counterValue < 8) strengthBox2.style.backgroundColor = 'transparent';
  
  if(counterValue >= 8) {
    strengthBox1.style.backgroundColor = strong;
    strengthBox2.style.backgroundColor = strong;
    strengthBox3.style.backgroundColor = strong;
    strengthBox1.style.border = strong;
    strengthBox2.style.border = strong;
    strengthBox3.style.border = strong;
  } else strengthBox3.style.backgroundColor = 'transparent';
}

function createPassword() {
  if(checkBoxUpperCase.checked && checkBoxLowerCase.checked && checkBoxNumber.checked && checkBoxSymbol.checked) {
    functionAll();
  }

  if(checkBoxUpperCase.checked && checkBoxLowerCase.checked && checkBoxNumber.checked) {
    functionUpperLowerNum();
  }
  if(checkBoxUpperCase.checked && checkBoxLowerCase.checked && checkBoxSymbol.checked) {
    functionUpperLowerSym();
  }
  if(checkBoxUpperCase.checked && checkBoxSymbol.checked && checkBoxNumber.checked) {
    functionUpperNumSym();
  }
  if(checkBoxSymbol.checked && checkBoxLowerCase.checked && checkBoxNumber.checked) {
    functionLowerNumSym();
  }

  if(checkBoxUpperCase.checked && checkBoxLowerCase.checked) {
    functionUpperLower();
  }
  if(checkBoxUpperCase.checked && checkBoxNumber.checked) {
    functionUpperNum();
  }
  if(checkBoxUpperCase.checked && checkBoxSymbol.checked) {
    functionUpperSym();
  }
  if(checkBoxLowerCase.checked && checkBoxNumber.checked) {
    functionLowerNum();
  }
  if(checkBoxLowerCase.checked && checkBoxSymbol.checked) {
    functionLowerSym();
  }
  if(checkBoxNumber.checked && checkBoxSymbol.checked) {
    functionNumSym();
  }

}

function functionAll() {
  for(let i = 0; i < 3; i++) {
    var randomLetter = Math.floor(Math.random() * 25);
    var randomLetter2 = Math.floor(Math.random() * 25);
    var randomNumber = Math.floor(Math.random() * 10);
    var randomSymbol = Math.floor(Math.random() * 8);

    password += upperCase[randomLetter];
    password += lowerCase[randomLetter2];
    password += numbers[randomNumber];
    password += symbols[randomSymbol];
  }
}

function functionUpperLowerNum() {

}

function functionUpperLowerSym() {

}

function functionUpperNumSym() {

}

function functionLowerNumSym() {

}



function functionUpperLower() {

}

function functionUpperNum() {

}

function functionUpperSym() {
  
}

function functionLowerNum() {
  
}

function functionLowerSym() {
  
}

function functionNumSym() {
  
}

submit.addEventListener('click', function() {
  result.innerHTML = '';
  verifier();
  result.innerHTML = password;
})