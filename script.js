const display = document.getElementById('display');
let expression = '';

function append(value) {
  expression += value;
  display.textContent = expression;
}

function clearDisplay() {
  expression = '';
  display.textContent = '0';
}

function calculate() {
  try {
    const result = Function('"use strict"; return (' + expression + ')')();
    display.textContent = result;
    expression = String(result);
  } catch {
    display.textContent = 'Error';
    expression = '';
  }
}
