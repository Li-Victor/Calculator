describe('During start up', function () {

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

    it('The starting variables should be', function () {
        expect(currentNumber).toBe('0');
        expect(previousNumber).toBe(null);
        expect(operator).toBe(null);
    });
});

describe('fixNumber function', function () {
    beforeEach(function () {
        currentNumber = '0';
    });

    afterEach(function () {
        currentNumber = '0';
    });

    function expectCorrectNumber(expectedResult) {
        fixCurrentNumber();
        expect(currentNumber).toBe(expectedResult);
    }

    describe('Special Numbers', function () {
        it('0 / 0 = NaN would be Error', function () {
            currentNumber = (0 / 0);
            expectCorrectNumber('Error');
        });

        it('5 / 0 = Infinity would be Error', function () {
            currentNumber = (5 / 0);
            expectCorrectNumber('Error');
        });

        it('-5 / 0 = -Infinity would be Error', function () {
            currentNumber = (-5 / 0);
            expectCorrectNumber('Error');
        });
    });

    describe('correct decimal calculations', function () {

        describe('add', function () {
            it('0.1 + 0.2 = 0.3', function () {
                currentNumber = (0.1 + 0.2);
                expectCorrectNumber('0.3');
            });

            it('3.1 + 3.2 = 6.3', function () {
                currentNumber = (3.1 + 3.2);
                expectCorrectNumber('6.3');
            });

            it('100000 + 0.1 = 100000.1, result is 8 characters', function () {
                currentNumber = (100000 + 0.1);
                expectCorrectNumber('100000.1');
            });
        });

        describe('subtract', function () {
            it('0.1 - 0.2 = 0.3', function () {
                currentNumber = (0.1 - 0.2);
                expectCorrectNumber('-0.1');
            });

            it('3.2 - 3.1 = 6.3', function () {
                currentNumber = (3.2 - 3.1);
                expectCorrectNumber('0.1');
            });
        });

        describe('multiply', function () {
            it('0.1 * 0.2 = 0.02', function () {
                currentNumber = (0.1 * 0.2);
                expectCorrectNumber('0.02');
            });

            it('3.1 * 3.2 = 9.92', function () {
                currentNumber = (3.1 * 3.2);
                expectCorrectNumber('9.92');
            });
        });

        describe('divide', function () {
            it('0.1 / 0.2 = 0.3', function () {
                currentNumber = (0.1 / 0.2);
                expectCorrectNumber('0.5');
            });

            it('3.1 / 3.2 = 0.96875', function () {
                currentNumber = (3.1 / 3.2);
                expectCorrectNumber('0.96875');
            });

            it('3.2 / 3.1 = 1.032258', function () {
                currentNumber = (3.2 / 3.1);
                expectCorrectNumber('1.032258');
            });
        });


    });

    describe('positive whole numbers', function () {

        it('should display zero', function () {
            currentNumber = 0;
            expectCorrectNumber('0');
        });

        it('should display 1 character', function () {
            currentNumber = 1;
            expectCorrectNumber('1');
        });

        it('should display 2 characters', function () {
            currentNumber = 11;
            expectCorrectNumber('11');
        });

        it('should display 3 characters', function () {
            currentNumber = 111;
            expectCorrectNumber('111');
        });

        it('should display 4 characters', function () {
            currentNumber = 1111;
            expectCorrectNumber('1111');
        });

        it('should display 5 characters', function () {
            currentNumber = 11111;
            expectCorrectNumber('11111');
        });

        it('should display 6 characters', function () {
            currentNumber = 111111;
            expectCorrectNumber('111111');
        });

        it('should display 7 characters', function () {
            currentNumber = 1111111;
            expectCorrectNumber('1111111');
        });

        it('should display 8 characters', function () {
            currentNumber = 11111111;
            expectCorrectNumber('11111111');
        });

        it('should display Error on 9 characters', function () {
            currentNumber = 100000000;
            expectCorrectNumber('Error');
        });

        it('should display Error on 10 characters', function () {
            currentNumber = 1000000000;
            expectCorrectNumber('Error');
        });

    });

    describe('negative whole numbers', function () {

        it('should display negative and 1 character', function () {
            currentNumber = -1;
            expectCorrectNumber('-1');
        });

        it('should display negative and 2 characters', function () {
            currentNumber = -11;
            expectCorrectNumber('-11');
        });

        it('should display negative and 3 characters', function () {
            currentNumber = -111;
            expectCorrectNumber('-111');
        });

        it('should display negative and 4 characters', function () {
            currentNumber = -1111;
            expectCorrectNumber('-1111');
        });

        it('should display negative and 5 characters', function () {
            currentNumber = -11111;
            expectCorrectNumber('-11111');
        });

        it('should display negative and 6 characters', function () {
            currentNumber = -111111;
            expectCorrectNumber('-111111');
        });

        it('should display negative and 7 characters', function () {
            currentNumber = -1111111;
            expectCorrectNumber('-1111111');
        });

        it('should display smallest number', function () {
            currentNumber = -9999999;
            expectCorrectNumber('-9999999');
        });

        it('should display Error on negative and 8 characters', function () {
            currentNumber = -11111111;
            expectCorrectNumber('Error');
        });

        it('should display Error on negative and 9 characters', function () {
            currentNumber = -111111111;
            expectCorrectNumber('Error');
        });
    });

    describe('postive decimal numbers', function () {

        describe('3 characters', function () {
            it('0.1', function () {
                currentNumber = 0.1;
                expectCorrectNumber('0.1');
            });

            it('1.1', function () {
                currentNumber = 1.1;
                expectCorrectNumber('1.1');
            });
        });

        describe('7 characters', function () {
            it('11111.1', function () {
                currentNumber = 11111.1;
                expectCorrectNumber('11111.1');
            });

            it('1111.11', function () {
                currentNumber = 1111.11;
                expectCorrectNumber('1111.11');
            });

            it('111.111', function () {
                currentNumber = 111.111;
                expectCorrectNumber('111.111');
            });

            it('11.1111', function () {
                currentNumber = 11.1111;
                expectCorrectNumber('11.1111');
            });

            it('1.11111', function () {
                currentNumber = 1.11111;
                expectCorrectNumber('1.11111');
            });

            it('0.11111', function () {
                currentNumber = 0.11111;
                expectCorrectNumber('0.11111');
            });

            it('0.00001', function () {
                currentNumber = 0.00001;
                expectCorrectNumber('0.00001');
            });
        });

        describe('8 characters', function () {
            it('111111.1', function () {
                currentNumber = 111111.1;
                expectCorrectNumber('111111.1');
            });

            it('11111.11', function () {
                currentNumber = 11111.11;
                expectCorrectNumber('11111.11');
            });

            it('1111.111', function () {
                currentNumber = 1111.111;
                expectCorrectNumber('1111.111');
            });

            it('111.1111', function () {
                currentNumber = 111.1111;
                expectCorrectNumber('111.1111');
            });

            it('11.11111', function () {
                currentNumber = 11.11111;
                expectCorrectNumber('11.11111');
            });

            it('1.111111', function () {
                currentNumber = 1.111111;
                expectCorrectNumber('1.111111');
            });

            it('0.111111', function () {
                currentNumber = 0.111111;
                expectCorrectNumber('0.111111');
            });

            it('0.000001', function () {
                currentNumber = 0.000001;
                expectCorrectNumber('0.000001');
            });
        });

        describe('9 characters', function () {
            it('1111111.1', function () {
                currentNumber = 1111111.1;
                expectCorrectNumber('1111111');
            });

            it('111111.11', function () {
                currentNumber = 111111.11;
                expectCorrectNumber('111111.1');
            });

            it('11111.111', function () {
                currentNumber = 11111.111;
                expectCorrectNumber('11111.11');
            });

            it('1111.1111', function () {
                currentNumber = 1111.1111;
                expectCorrectNumber('1111.111');
            });

            it('111.11111', function () {
                currentNumber = 111.11111;
                expectCorrectNumber('111.1111');
            });

            it('11.111111', function () {
                currentNumber = 11.111111;
                expectCorrectNumber('11.11111');
            });

            it('1.1111111', function () {
                currentNumber = 1.1111111;
                expectCorrectNumber('1.111111');
            });

            it('0.1111111', function () {
                currentNumber = 0.1111111;
                expectCorrectNumber('0.111111');
            });

            it('0.0000001', function () {
                currentNumber = 0.0000001;
                expectCorrectNumber('Error');
            });
        });

        describe('10 characters', function () {
            it('11111111.1', function () {
                currentNumber = 11111111.1;
                expectCorrectNumber('Error');
            });

            it('1111111.11', function () {
                currentNumber = 1111111.11;
                expectCorrectNumber('1111111');
            });

            it('111111.111', function () {
                currentNumber = 111111.111;
                expectCorrectNumber('111111.1');
            });

            it('11111.1111', function () {
                currentNumber = 11111.1111;
                expectCorrectNumber('11111.11');
            });

            it('1111.11111', function () {
                currentNumber = 1111.11111;
                expectCorrectNumber('1111.111');
            });

            it('111.111111', function () {
                currentNumber = 111.111111;
                expectCorrectNumber('111.1111');
            });

            it('11.1111111', function () {
                currentNumber = 11.1111111;
                expectCorrectNumber('11.11111');
            });

            it('1.11111111', function () {
                currentNumber = 1.11111111;
                expectCorrectNumber('1.111111');
            });

            it('0.11111111', function () {
                currentNumber = 0.11111111;
                expectCorrectNumber('0.111111');
            });

            it('0.00000001', function () {
                currentNumber = 0.00000001;
                expectCorrectNumber('Error');
            });
        });

        describe('more than 10 characters', function () {
            it('0.00000001', function () {
                currentNumber = 0.00000001;
                expectCorrectNumber('Error');
            });

            it('1111111.111', function () {
                currentNumber = 1111111.111;
                expectCorrectNumber('1111111');
            });
        });
    });

    describe('negative decimal numbers', function () {

        describe('4 characters', function () {
            it('-0.1', function () {
                currentNumber = -0.1;
                expectCorrectNumber('-0.1');
            });

            it('-1.1', function () {
                currentNumber = -1.1;
                expectCorrectNumber('-1.1');
            });

        });

        describe('7 characters', function () {
            it('-1111.1', function () {
                currentNumber = -1111.1;
                expectCorrectNumber('-1111.1');
            });

            it('-111.11', function () {
                currentNumber = -111.11;
                expectCorrectNumber('-111.11');
            });

            it('-11.111', function () {
                currentNumber = -11.111;
                expectCorrectNumber('-11.111');
            });

            it('-1.1111', function () {
                currentNumber = -1.1111;
                expectCorrectNumber('-1.1111');
            });

            it('-0.1111', function () {
                currentNumber = -0.1111;
                expectCorrectNumber('-0.1111');
            });

            it('-0.0001', function () {
                currentNumber = -0.0001;
                expectCorrectNumber('-0.0001');
            });
        });

        describe('8 characters', function () {
            it('-11111.1', function () {
                currentNumber = -11111.1;
                expectCorrectNumber('-11111.1');
            });

            it('-1111.11', function () {
                currentNumber = -1111.11;
                expectCorrectNumber('-1111.11');
            });

            it('-111.111', function () {
                currentNumber = -111.111;
                expectCorrectNumber('-111.111');
            });

            it('-11.1111', function () {
                currentNumber = -11.1111;
                expectCorrectNumber('-11.1111');
            });

            it('-1.11111', function () {
                currentNumber = -1.11111;
                expectCorrectNumber('-1.11111');
            });

            it('-0.11111', function () {
                currentNumber = -0.11111;
                expectCorrectNumber('-0.11111');
            });

            it('-0.00001', function () {
                currentNumber = -0.00001;
                expectCorrectNumber('-0.00001');
            });
        });

        describe('9 characters', function () {
            it('-111111.1', function () {
                currentNumber = -111111.1;
                expectCorrectNumber('-111111');
            });

            it('-11111.11', function () {
                currentNumber = -11111.11;
                expectCorrectNumber('-11111.1');
            });

            it('-1111.111', function () {
                currentNumber = -1111.111;
                expectCorrectNumber('-1111.11');
            });

            it('-111.1111', function () {
                currentNumber = -111.1111;
                expectCorrectNumber('-111.111');
            });

            it('-11.11111', function () {
                currentNumber = -11.11111;
                expectCorrectNumber('-11.1111');
            });

            it('-1.111111', function () {
                currentNumber = -1.111111;
                expectCorrectNumber('-1.11111');
            });

            it('-0.111111', function () {
                currentNumber = -0.111111;
                expectCorrectNumber('-0.11111');
            });

            it('-0.000001', function () {
                currentNumber = -0.000001;
                expectCorrectNumber('0');
            });
        });

        describe('10 characters', function () {
            it('-1111111.1', function () {
                currentNumber = -1111111.1;
                expectCorrectNumber('-1111111');
            });

            it('-111111.11', function () {
                currentNumber = -111111.11;
                expectCorrectNumber('-111111');
            });

            it('-11111.111', function () {
                currentNumber = -11111.111;
                expectCorrectNumber('-11111.1');
            });

            it('-1111.1111', function () {
                currentNumber = -1111.1111;
                expectCorrectNumber('-1111.11');
            });

            it('-111.11111', function () {
                currentNumber = -111.11111;
                expectCorrectNumber('-111.111');
            });

            it('-11.111111', function () {
                currentNumber = -11.111111;
                expectCorrectNumber('-11.1111');
            });

            it('-1.1111111', function () {
                currentNumber = -1.1111111;
                expectCorrectNumber('-1.11111');
            });

            it('-0.1111111', function () {
                currentNumber = -0.1111111;
                expectCorrectNumber('-0.11111');
            });

            it('-0.000001', function () {
                currentNumber = -0.0000001;
                expectCorrectNumber('Error');
            });
        });

        describe('more than 10 characters', function () {
            it('-1111111.1', function () {
                currentNumber = -1111111.11;
                expectCorrectNumber('-1111111');
            });

            it('-0.0000001', function () {
                currentNumber = -0.00000001;
                expectCorrectNumber('Error');
            });
        });
    });


});
