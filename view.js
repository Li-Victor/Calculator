'use strict';

var buttonNumber = document.querySelectorAll('.button__NUMBER');
buttonNumber.forEach(function (button) {
    button.addEventListener('click', function () {
        controlNumberButton(button.value);
    });
});

var buttonToggle = document.querySelector('.button__TOGGLE');
buttonToggle.addEventListener('click', function () {
    controlToggleButton();
});

var buttonCE = document.querySelector('.button__CE');
buttonCE.addEventListener('click', function () {
    controlCEButton();
});

var buttonC = document.querySelector('.button__C');
buttonC.addEventListener('click', function () {
    controlCButton();
});

var buttonBack = document.querySelector('.button__BACK');
buttonBack.addEventListener('click', function () {
    controlBackButton();
});

var buttonOperation = document.querySelectorAll('.button__OPERATION');
buttonOperation.forEach(function (button) {
    button.addEventListener('click', function () {
        controlButtonOperation(button.value);
    });
});

var buttonCalc = document.querySelector('.button__CALC');
buttonCalc.addEventListener('click', function () {
    controlCalcButton();
});
