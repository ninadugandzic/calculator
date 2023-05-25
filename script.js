const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const symbolInput = document.getElementById('symbol');
const calculateButton = document.getElementById('calculateBtn');
const deleteButton = document.getElementById('deleteBtn');
const result = document.getElementById('result');
const allowedSymbols = ['+', '-', '/', '*', '%'];

function Calculate() {
    let firstNumber = firstNumberInput.value && parseFloat(firstNumberInput.value);
    let secondNumber = secondNumberInput.value && parseFloat(secondNumberInput.value);
    let symbol = symbolInput.value;

    if (symbol == null) {
        result.innerText = '';
    } else if (firstNumber && secondNumber) {
        switch (symbol) {
            case '+':
                result.innerText = firstNumber + secondNumber;
                break;
            case '-':
                result.innerText = firstNumber - secondNumber;
                break;
            case '*':
                result.innerText = firstNumber * secondNumber;
                break;
            case '/':
                result.innerText = firstNumber / secondNumber;
                break;
            default:
                result.innerText = 'ERR';
                break;
        }
    }
}

calculateButton.onclick = function () {
    Calculate();
};

symbolInput.oninput = function () {
    if (symbolInput.value.length > 1) {
        symbolInput.value = symbolInput.value.slice(0, 1);
    } else if (!allowedSymbols.includes(symbolInput.value)) {
        console.log('Not valid');
        symbolInput.value = '';
    }
};

deleteButton.onclick = function () {
    firstNumber.value = '';
    secondNumber.value = '';
    symbol.value = '';
    result.innerText = '';
}
