'use strict';

function controlNumberButton(number) {
    updateCurrentNumber(number);
    displayCurrentNumber();
}

function displayCurrentNumber() {
    var displayCurrentNumber = document.querySelector('.display__currentNumber');
    var displayOperations = document.querySelector('.display__operations');
    if(previousNumber != null && operator != null) {
        displayOperations.innerText = previousNumber + ' ' + operator;
    } else {
        displayOperations.innerText = '';
    }

    displayCurrentNumber.innerText = currentNumber;
}

function controlToggleButton() {
    toggleSign();
    displayCurrentNumber();
}

function controlCEButton() {
    clearEntry();
    displayCurrentNumber();
}

function controlCButton() {
    clearAll();
    displayCurrentNumber();
}

function controlBackButton() {
    deleteOneNumber();
    displayCurrentNumber();
}

function controlButtonOperation(operation) {
    updateOperator(operation);
    displayCurrentNumber();
}

function controlCalcButton() {
    calculate();
    displayCurrentNumber();
}
