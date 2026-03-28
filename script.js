let displayValue = '0';
function updateDisplay() { document.getElementById('display').innerText = displayValue; }
function appendNumber(num) {
    if (displayValue === '0') displayValue = num;
    else displayValue += num;
    updateDisplay();
}
function appendOperator(op) {
    const lastChar = displayValue.slice(-1);
    if (['+','-','*','/'].includes(lastChar)) displayValue = displayValue.slice(0, -1) + op;
    else displayValue += op;
    updateDisplay();
}
function clearDisplay() { displayValue = '0'; updateDisplay(); }
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') displayValue = '0';
    updateDisplay();
}
function calculate() {
    try { displayValue = eval(displayValue).toString(); }
    catch { displayValue = 'Error'; }
    updateDisplay();
}
