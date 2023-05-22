let display = document.getElementById('display');
let calculation = '';

function appendNumber(number) {
  calculation += number;
  display.value = calculation;
}

function appendOperator(operator) {
  calculation += operator;
  display.value = calculation;
}

function clearDisplay() {
  calculation = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(calculation);
    display.value = result;
    calculation = '';
  } catch (error) {
    display.value = 'Error';
  }
}

function handleKeyboardInput(event) {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    appendNumber(key);
  } else if (['+', '-', '*', '/', '.'].includes(key)) {
    appendOperator(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  }
}

// Agregar evento de teclado al documento
document.addEventListener('keydown', handleKeyboardInput);
