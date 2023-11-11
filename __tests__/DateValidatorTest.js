import DateValidator from '../src/Domain/DateValidator.js';

describe("날짜 테스트", () => {
    test("입력한 값이 숫자인지 테스트", () => {
        const input = ['a', '10a', 'a1', '1a0'];

        input.forEach(el => {
            expect(() => 
                DateValidator.isCheckNumber(el)).toThrow();
        });
    });

    test("입력한 숫자가 1부터 31인지 테스트", () => {
        const input = ['0', '32', '100'];

        input.forEach(el => {
            expect(() => 
                DateValidator.isCheckProperRange(el)).toThrow();
        });
    });
});