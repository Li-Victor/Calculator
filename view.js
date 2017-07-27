'use strict';

var buttonNumber = document.querySelectorAll('.button__NUMBER');
var buttonToggle = document.querySelector('.button__TOGGLE');
var buttonCE = document.querySelector('.button__CE');
var buttonC = document.querySelector('.button__C');
var buttonBack = document.querySelector('.button__BACK');
var buttonOperation = document.querySelectorAll('.button__OPERATION');
var buttonCalc = document.querySelector('.button__CALC');

buttonNumber.forEach(function (button) {
    button.addEventListener('click', function () {
        controlNumberButton(button.value);
    });
});

buttonToggle.addEventListener('click', function () {
    controlToggleButton();
});

buttonCE.addEventListener('click', function () {
    controlCEButton();
});

buttonC.addEventListener('click', function () {
    controlCButton();
});

buttonBack.addEventListener('click', function () {
    controlBackButton();
});

buttonOperation.forEach(function (button) {
    button.addEventListener('click', function () {
        controlButtonOperation(button.value);
    });
});

buttonCalc.addEventListener('click', function () {
    controlCalcButton();
});
