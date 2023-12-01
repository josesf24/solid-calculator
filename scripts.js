function addToScreen(number) {
  var screen = document.getElementById("screen-calc");
  screen.textContent += number;
}

function addOperator(operator) {
  var screen = document.getElementById("screen-calc");
  screen.textContent += operator;
}

function calculate() {
  var screen = document.getElementById("screen-calc");
  var result = eval(screen.textContent); // Esto evaluará la expresión
  screen.textContent = result.toFixed(2); // Mostrará el resultado
}

function clearScreen(){
  var screen = document.getElementById("screen-calc");
  screen.textContent = '';
}

function eraseLast() {
  var screen = document.getElementById("screen-calc");
  screen.textContent = screen.textContent.slice(0, -1);
}

let hasDot = false;

function addDot() {
  var screen = document.getElementById("screen-calc");


  if (screen.textContent == ''){
    return;
  }
  const lastNum = getLastNumber(screen.textContent);
  if (lastNum.includes('.') && !isNaN(lastNum)) {
    return;
  }
  screen.textContent += '.';
  hasDot = true;
}

// Function to extract the last number from the expression
function getLastNumber(expression) {
  const regex = /[+\-*/]/;
  const numbers = expression.split(regex);
  return numbers[numbers.length - 1];
}