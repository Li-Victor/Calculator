var currentNumber = '0';
var previousNumber = null;
var operator = null;

//updates current number with every pressed number button
//number parameter is a string coming from button value
function updateCurrentNumber(number) {
    if(currentNumber === 'Error') currentNumber = '0';
    if(currentNumber.length === 8) {
        currentNumber = 'Error';
        return;
    }

    if(number === '.' && currentNumber.includes('.')) return;

    if(number === '.' && currentNumber === '0') currentNumber = currentNumber + number;
    else if(currentNumber === '0') currentNumber = number;
    else currentNumber = currentNumber + number; //concat currentNumber and number

}

function deleteOneNumber() {
    if(currentNumber.length <= 1 || currentNumber === 'Error') currentNumber = '0';
    else currentNumber = currentNumber.substring(0, currentNumber.length - 1);
}

function clearAll() {
    currentNumber = '0';
    previousNumber = null;
    operator = null;
}

function clearEntry() {
    currentNumber = '0';
}

function toggleSign() {
    if(currentNumber.length === 8) {
        currentNumber = 'Error';
        return;
    }
    if(currentNumber === '0' || currentNumber === 'Error') return;
    if(currentNumber.includes('-')) currentNumber = currentNumber.substr(1);
    else currentNumber = '-' + currentNumber;

}

//can change operators if made a mistake
function updateOperator(operatorValue) {

    if(operator) {
        calculate();
    }
    if(currentNumber === 'Error') {
        operator = null;
        return;
    }
    previousNumber = Number(currentNumber);
    currentNumber = '0';
    operator = operatorValue;
}

function calculate() {
    if(operator) {

        if(previousNumber || previousNumber === 0) {
            switch (operator) {
                case '+':
                    currentNumber = (previousNumber + Number(currentNumber));
                    break;
                case '-':
                    currentNumber = (previousNumber - Number(currentNumber));
                    break;
                case '*':
                    currentNumber = (previousNumber * Number(currentNumber));
                    break;
                case '/':
                    currentNumber = (previousNumber / Number(currentNumber));
                    break;
                default:
                    break;
            }
        }
        previousNumber = null;
        operator = null;
    }

    fixCurrentNumber();

}

//currentNumber should be Error when it is NaN, Infinity, or its length is greater than 8

//number cannot be represented as more than 0 and less than 0.000001
//number cannot be represented as less than 0 and less than -0.000001 with the negative sign

//highest positive whole number represented can be a length of 8 even with decimals
//lowest negative whole number represented can be a length of 7 even with decimals

//return a string of length 8 or less
function fixCurrentNumber() {

    if(currentNumber === '-') {
        currentNumber = 0;
        return;
    }

    var stringifyCurrentNumber = currentNumber.toString();

    if(stringifyCurrentNumber.includes('NaN') || stringifyCurrentNumber.includes('Infinity') || stringifyCurrentNumber.includes('e')) {
        currentNumber = 'Error';
        return;
    }

    if(stringifyCurrentNumber.length > 8) {

        //working with decimal numbers sometimes give floating point results
        //length is greater than 9 and has decimal number
        if(stringifyCurrentNumber.includes('.')) {

            if(Number(stringifyCurrentNumber).toPrecision(7).includes('e')) {
                currentNumber = 'Error';
                return;
            }
            //have to use a second Number() because sometimes there can be a -0 or a decimal point at the end such as 9.
            currentNumber = Number(Number(stringifyCurrentNumber).toPrecision(7).substr(0, 8)).toString();


        } else {
            currentNumber = 'Error';
            return;
        }
    } else {
        currentNumber = stringifyCurrentNumber;
    }

}
