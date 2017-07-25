describe('updateCurrentNumber function', function () {
    beforeEach(function () {
        currentNumber = '0';
    });

    afterEach(function () {
        currentNumber = '0';
    });

    function expectUpdateCurrentNumber(number, expectedResult) {
        updateCurrentNumber(number);
        expect(currentNumber).toBe(expectedResult);
    }

    it('12345678', function () {
        expectUpdateCurrentNumber('1', '1');
        expectUpdateCurrentNumber('2', '12');
        expectUpdateCurrentNumber('3', '123');
        expectUpdateCurrentNumber('4', '1234');
        expectUpdateCurrentNumber('5', '12345');
        expectUpdateCurrentNumber('6', '123456');
        expectUpdateCurrentNumber('7', '1234567');
        expectUpdateCurrentNumber('8', '12345678');
        expectUpdateCurrentNumber('9', 'Error');
    });

    it('Error and put new number', function () {
        currentNumber = 'Error';
        expectUpdateCurrentNumber('1', '1');
    });

    it('Error and put zero', function () {
        currentNumber = 'Error';
        expectUpdateCurrentNumber('0', '0');
    });

    it('Error and put decimal', function () {
        currentNumber = 'Error';
        expectUpdateCurrentNumber('.', '0.');
    });

    it('decimal at start', function () {
        expectUpdateCurrentNumber('.', '0.');
    });

    it('deciaml after some number and two decimal points', function () {
        currentNumber = '5';
        expectUpdateCurrentNumber('.', '5.');
        expectUpdateCurrentNumber('.', '5.');
        expectUpdateCurrentNumber('6', '5.6');
    });

    it('decimal after zero', function () {
        expectUpdateCurrentNumber('0', '0');
        expectUpdateCurrentNumber('.', '0.');
        expectUpdateCurrentNumber('0', '0.0');
        expectUpdateCurrentNumber('1', '0.01');
    });

    it('adding zero after zero', function () {
        expectUpdateCurrentNumber('0', '0');
        expectUpdateCurrentNumber('0', '0');
        expectUpdateCurrentNumber('0', '0');
    });

    it('put 0.000001 safe number', function () {
        expectUpdateCurrentNumber('.', '0.');
        expectUpdateCurrentNumber('0', '0.0');
        expectUpdateCurrentNumber('0', '0.00');
        expectUpdateCurrentNumber('0', '0.000');
        expectUpdateCurrentNumber('0', '0.0000');
        expectUpdateCurrentNumber('0', '0.00000');
        expectUpdateCurrentNumber('1', '0.000001');
    });

    it('can\'t reach 0.0000001, instead Error', function () {
        expectUpdateCurrentNumber('.', '0.');
        expectUpdateCurrentNumber('0', '0.0');
        expectUpdateCurrentNumber('0', '0.00');
        expectUpdateCurrentNumber('0', '0.000');
        expectUpdateCurrentNumber('0', '0.0000');
        expectUpdateCurrentNumber('0', '0.00000');
        expectUpdateCurrentNumber('0', '0.000000');
        expectUpdateCurrentNumber('1', 'Error');
    });
});

describe('deleteOneNumber function', function () {
    beforeEach(function () {
        currentNumber = '0';
    });

    afterEach(function () {
        currentNumber = '0';
    });

    function expectDeleteOneNumber(expectedResult) {
        deleteOneNumber();
        expect(currentNumber).toBe(expectedResult);
    }

    it('single number', function () {
        currentNumber = '1';
        expectDeleteOneNumber('0');
    });

    it('zero', function () {
        currentNumber = '0';
        expectDeleteOneNumber('0');
    })

    it('two numbers', function () {
        currentNumber = '11';
        expectDeleteOneNumber('1');
        expectDeleteOneNumber('0');
    });

    it('numbers and decimal', function () {
        currentNumber = '1.23';
        expectDeleteOneNumber('1.2');
        expectDeleteOneNumber('1.');
        expectDeleteOneNumber('1');
        expectDeleteOneNumber('0');
    });

    it('eight number to zero', function () {
        currentNumber = '12345678';
        expectDeleteOneNumber('1234567');
        expectDeleteOneNumber('123456');
        expectDeleteOneNumber('12345');
        expectDeleteOneNumber('1234');
        expectDeleteOneNumber('123');
        expectDeleteOneNumber('12');
        expectDeleteOneNumber('1');
        expectDeleteOneNumber('0');
    });

    it('just negative sign', function () {
        currentNumber = '-';
        expectDeleteOneNumber('0');
    });

    it('Error', function () {
        currentNumber = 'Error';
        expectDeleteOneNumber('0');
    })
});

describe('clearAll function', function () {
    beforeEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    afterEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    it('basic operation add', function () {
        currentNumber = '1';
        previousNumber = 1;
        operator = '+'

        clearAll();
        expect(currentNumber).toBe('0');
        expect(previousNumber).toBe(null);
        expect(operator).toBe(null);
    });

});

describe('clearEntry function', function () {
    beforeEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    afterEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    it('current number is 0', function () {
        currentNumber = '0';

        clearEntry();
        expect(currentNumber).toBe('0');
    })

    it('current number is 5 with operator and previousNumber', function () {
        currentNumber = '0';
        previousNumber = 10;
        operator = '*';

        clearEntry();
        expect(currentNumber).toBe('0');
        expect(previousNumber).toBe(10);
        expect(operator).toBe('*');
    });
});

describe('toggleSign function', function () {

    beforeEach(function () {
        currentNumber = '0';
    });

    afterEach(function () {
        currentNumber = '0';
    });

    it('zero', function () {
        toggleSign();
        expect(currentNumber).toBe('0');
    });

    it('negative zero', function () {
        currentNumber = '-0';
        toggleSign();
        expect(currentNumber).toBe('0');
    });

    it('negative number', function () {
        currentNumber = '-6';
        toggleSign();
        expect(currentNumber).toBe('6');
    });

    it('7 digits', function () {
        currentNumber = '1234567';
        toggleSign();
        expect(currentNumber).toBe('-1234567');
    });

    it('8 digits to be Error', function () {
        currentNumber = '12345678';
        toggleSign();
        expect(currentNumber).toBe('Error');
    });

    it('some decimal number', function () {
        currentNumber = '3.14';
        toggleSign();
        expect(currentNumber).toBe('-3.14');
    })

    it('Error', function () {
        currentNumber = 'Error';
        toggleSign();
        expect(currentNumber).toBe('Error');
    });

});

describe('updateOperator function', function () {

    beforeEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    afterEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    it('set currentNumber and operator', function () {
        currentNumber = '4';
        updateOperator('+');

        expect(currentNumber).toBe('0');
        expect(previousNumber).toBe(4);
        expect(operator).toBe('+');
    });

    it('just put operator without any currentNumber set', function () {
        updateOperator('-');

        expect(currentNumber).toBe('0');
        expect(previousNumber).toBe(0);
        expect(operator).toBe('-');
    })

    it('set operator with Error', function () {
        currentNumber = 'Error';
        updateOperator('*');

        expect(currentNumber).toBe('Error');
        expect(previousNumber).toBe(null);
        expect(operator).toBe(null);
    });

    it('chaining operations', function () {
        currentNumber = 10;
        updateOperator('+');
        currentNumber = 20;
        updateOperator('*');

        expect(currentNumber).toBe('0');
        expect(previousNumber).toBe(30);
        expect(operator).toBe('*');
    });

    it('set operator with negative decimal number', function () {
        currentNumber = '-4.44';
        updateOperator('-');

        expect(currentNumber).toBe('0');
        expect(previousNumber).toBe(-4.44);
        expect(operator).toBe('-');
    });
});

describe('calculate function', function () {
    beforeEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    afterEach(function () {
        currentNumber = '0';
        previousNumber = null;
        operator = null;
    });

    function expectCalculate(expectedResult) {
        calculate();
        expect(currentNumber).toBe(expectedResult);
        expect(previousNumber).toBe(null);
        expect(operator).toBe(null);
    }

    describe('add operation', function () {
        it('add zero zero', function () {
            currentNumber = '0';
            previousNumber = 0;
            operator = '+';

            expectCalculate('0');
        });

        it('add zero number', function () {
            currentNumber = '6';
            previousNumber = 0;
            operator = '+';

            expectCalculate('6');
        });

        it('add decimal decimal', function () {
            currentNumber = '3.14';
            previousNumber = 3.14;
            operator = '+';

            expectCalculate('6.28');

            currentNumber = '0.1';
            previousNumber = 0.2;
            operator = '+';
            expectCalculate('0.3');
        });

        it('add decimal negative decimal', function () {
            currentNumber = '-1.23';
            previousNumber = 3.14;
            operator = '+';

            expectCalculate('1.91');
        })

        it('add negative decimal negative decimal', function () {
            currentNumber = '-1.23';
            previousNumber = -2.46;
            operator = '+';

            expectCalculate('-3.69');
        });


    });

    describe('subtract operation', function () {
        it('subtract zero zero', function () {
            currentNumber = '0';
            previousNumber = 0;
            operator = '-';

            expectCalculate('0');
        })

        it('subtract zero number', function () {
            currentNumber = '0';
            previousNumber = 6;
            operator = '-';

            expectCalculate('6');
        });

        it('subtract decimal decimal', function () {
            currentNumber = '0';
            previousNumber = 0;
            operator = '-';

            expectCalculate('0');
        });

        it('subtract decimal negative decimal', function () {
            currentNumber = '3.14';
            previousNumber = -1.23;
            operator = '-';

            expectCalculate('-4.37');
        });

        it('subtract negative decimal negative decimal', function () {
            currentNumber = '-1.23';
            previousNumber = -1.23;
            operator = '-';

            expectCalculate('0');
        });
    });

    describe('multiply operation', function () {
        it('multiply zero zero', function () {
            currentNumber = '0';
            previousNumber = 0;
            operator = '*';

            expectCalculate('0');
        });

        it('multiply zero number', function () {
            currentNumber = '90';
            previousNumber = 0;
            operator = '*';

            expectCalculate('0');
        })

        it('multiply decimal decimal', function () {
            currentNumber = '0';
            previousNumber = 0;
            operator = '*';

            expectCalculate('0');
        })

        it('multiply decimal negative decimal', function () {
            currentNumber = '-1.23';
            previousNumber = 3.14;
            operator = '*';

            expectCalculate('-3.8622');
        });

        it('multiply negative decimal negative decimal', function () {
            currentNumber = '-1.23';
            previousNumber = -1.23;
            operator = '*';

            expectCalculate('1.5129');
        });
    });

    describe('divide operation', function () {
        it('divide zero number', function () {
            currentNumber = '3';
            previousNumber = 0;
            operator = '/';

            expectCalculate('0');
        });

        it('divide decimal decimal', function () {
            currentNumber = '3.14';
            previousNumber = 1.23;
            operator = '/';

            expectCalculate('0.391719');
        });

        it('divide decimal negative decimal', function () {
            currentNumber = '-4.56';
            previousNumber = 7.89;
            operator = '/';

            expectCalculate('-1.73026');
        });

        it('divide negative decimal negative decimal', function () {
            currentNumber = '-1.23';
            previousNumber = -3.14;
            operator = '/';

            expectCalculate('2.552846');
        });

        it('divide same number', function () {
            currentNumber = '55';
            previousNumber = 55;
            operator = '/';

            expectCalculate('1');
        });
    });

    describe('Error operation', function () {
        it('divide zero zero', function () {
            currentNumber = '0';
            previousNumber = 0;
            operator = '/';

            expectCalculate('Error');
        });

        it('divide whole number zero', function () {
            currentNumber = '0';
            previousNumber = 55;
            operator = '/';

            expectCalculate('Error');
        });
    });

    describe('no operation', function () {
        it('just error', function () {
            currentNumber = 'Error';

            expectCalculate('Error');
        });

        it('decimal number', function () {
            currentNumber = '1.234567';

            expectCalculate('1.234567');
        });
    });


});
