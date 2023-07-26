const counter = document.querySelector('#counter');
const slider = document.querySelector('#irange');
const submit = document.querySelector('#btn-submit');
const strengthBox1 = document.querySelector('#strength-box-1');
const strengthBox2 = document.querySelector('#strength-box-2');
const strengthBox3 = document.querySelector('#strength-box-3');
var result = document.querySelector('#password');

// Variáveis que fazem a ligação com o CSS e utilizam as mesmas cores e/ou propriedades:
const backgroundFirstColor = getComputedStyle(document.documentElement).getPropertyValue('--background-first-color');
const backgroundLastColor = getComputedStyle(document.documentElement).getPropertyValue('--background-last-color');
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');

const weak = getComputedStyle(document.documentElement).getPropertyValue('--weak');
const medium = getComputedStyle(document.documentElement).getPropertyValue('--medium');
const strong = getComputedStyle(document.documentElement).getPropertyValue('--strong');
//

// Dados de escolha do usuário vindos do formulário do HTML
const checkBoxUpperCase = document.getElementById('iuppercase');
const checkBoxLowerCase = document.getElementById('ilowercase');
const checkBoxNumber = document.getElementById('inumber'); 
const checkBoxSymbol = document.getElementById('isymbol');
//

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
  if(counterValue != '0' && counterValue >= 2) {
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

  if(counterValue > 1 && counterValue <= 4) strengthBox1.style.backgroundColor = weak;
  
  if(counterValue > 4 && counterValue < 8) {
    strengthBox1.style.backgroundColor = medium;
    strengthBox2.style.backgroundColor = medium;
  } else if(counterValue < 8) strengthBox2.style.backgroundColor = 'transparent';
  
  if(counterValue >= 8) {
    strengthBox1.style.backgroundColor = strong;
    strengthBox2.style.backgroundColor = strong;
    strengthBox3.style.backgroundColor = strong;
  } else strengthBox3.style.backgroundColor = 'transparent';
}

function createPassword() {
  if(checkBoxUpperCase.checked && checkBoxLowerCase.checked && checkBoxNumber.checked && checkBoxSymbol.checked) functionAll();
  
  else if(checkBoxUpperCase.checked && checkBoxLowerCase.checked && checkBoxNumber.checked) functionUpperLowerNum();
  else if(checkBoxUpperCase.checked && checkBoxLowerCase.checked && checkBoxSymbol.checked) functionUpperLowerSym();
  else if(checkBoxUpperCase.checked && checkBoxNumber.checked && checkBoxSymbol.checked) functionUpperNumSym();
  else if(checkBoxLowerCase.checked && checkBoxNumber.checked && checkBoxSymbol.checked) functionLowerNumSym();
  
  else if(checkBoxUpperCase.checked && checkBoxLowerCase.checked) functionUpperLower();
  else if(checkBoxUpperCase.checked && checkBoxNumber.checked) functionUpperNum();
  else if(checkBoxUpperCase.checked && checkBoxSymbol.checked) functionUpperSym();
  else if(checkBoxLowerCase.checked && checkBoxNumber.checked) functionLowerNum();
  else if(checkBoxLowerCase.checked && checkBoxSymbol.checked) functionLowerSym();
  else if(checkBoxNumber.checked && checkBoxSymbol.checked) functionNumSym();
  else alert("Inclua ao menos um elemento em sua senha");
}

const functions = [];

function functionAll() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
  fUpper();
  fLower();
  fNumber();
  fSymbol();

  if(counterValue > 4) {
    var length = counterValue - 4;
    for(var i = 0; i < length; i++) {
      functions[randomFasterFunctions()]();
    }
  } else if(counterValue == 4) callback();
  else return;

  function callback() {
    setTimeout(() => {
      result.innerHTML = password;
    }, 48);
  }
  callback();
}

function functionUpperLowerNum() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionUpperLowerSym() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionUpperNumSym() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionLowerNumSym() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}



function functionUpperLower() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionUpperNum() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionUpperSym() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionLowerNum() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionLowerSym() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function functionNumSym() {
  functions.push(fUpperFaster, fLowerFaster, fNumberFaster, fSymbolFaster);
}

function fUpper() {
  setTimeout(function () {
    password += upperCase[Math.floor(Math.random() * 25)];
    return password;
  }, randomNumberFunction());
}

function fUpperFaster() {
  password += upperCase[Math.floor(Math.random() * 25)];
  return password;
}

function fLower() {
  setTimeout(function () {
    password += lowerCase[Math.floor(Math.random() * 25)];
    return password;
  }, randomNumberFunction());
}

function fLowerFaster() {
  password += lowerCase[Math.floor(Math.random() * 25)];
  return password;
}

function fNumber() {
  setTimeout(function () {
    password += numbers[Math.floor(Math.random() * 10)];
    return password;
  }, randomNumberFunction());
}

function fNumberFaster() {
  password += numbers[Math.floor(Math.random() * 10)];
  return password;
}

function fSymbol() {
  setTimeout(function () {
    password += symbols[Math.floor(Math.random() * 8)];
    return password;
  }, randomNumberFunction());
}

function fSymbolFaster() {
  password += symbols[Math.floor(Math.random() * 8)];
  return password;
}

function randomFasterFunctions() {
  return (Math.floor(Math.random() * 4));
}

function randomNumberFunction(min = 1, max = 4) {
  return (Math.floor(Math.random() * (max - min) + min));
}

submit.addEventListener('click', function() {
  result.innerHTML = '';
  verifier();
})