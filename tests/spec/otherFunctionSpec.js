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
});
