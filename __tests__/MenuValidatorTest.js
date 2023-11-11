import MenuValidator from '../src/Domain/MenuValidator.js';

describe("메뉴 테스트", () => {
    test("사용자가 입력한 주문 문자열을 객체로 변환하는지 테스트", () => {
        const input = '해산물파스타-1,초코케이크-2,레드와인-1';
        const result = {'해산물파스타': '1', '초코케이크': '2', '레드와인': '1'};

        expect(MenuValidator.modifyObj(input)).toEqual(result);
    });

    test("사용자가 입력한 주문 문자열에서 음료만 있는지 테스트", () => {
        const input = '제로콜라-1,레드와인-1';
        
        expect(() => 
            MenuValidator.isCheckOnlyBeverage(input)).toThrow(Error);
    });
    
    describe("최대 주문 수량 테스트", () => {
        test("단일 주문 시 수량을 합산하는지 테스트", () => {
            const input = '아이스크림-30';
            
            expect(() => 
                MenuValidator.isCheckMaximumQuantity(input)).toThrow(Error);
        });

        test("여러 개 주문 시 각 수량을 합산하는지 테스트", () => {
            const input = '티본스테이크-5,해산물파스타-5,초코케이크-5,시저샐러드-5,제로콜라-1';
            
            expect(() => 
                MenuValidator.isCheckMaximumQuantity(input)).toThrow(Error);
        });
    });

    describe("입력 형식 테스트", () => {
        test("'-'을 통해 입력하지 않았을 시 테스트", () => {
            const input = ['시저샐러드:3,타파스:1', '제로콜라/1', '해산물파스타=1,아이스크림=1'];
            
            input.forEach(el => {
                expect(() => 
                    MenuValidator.isCheckProperForm(el)).toThrow(Error);
            });
        });

        test("'-'을 여러 개 입력했을 시 테스트", () => {
            const input = ['초코케이크---5', '티본스테이크--5,해산물파스타-5'];
            
            input.forEach(el => {
                expect(() => 
                 MenuValidator.isCheckProperForm(el)).toThrow(Error);
            });
        });
    });

    test("메뉴판에 없는 메뉴를 주문했을 시 테스트", () => {
        const input = ['딸기케이크-5', '해산물파스타-5,화이트와인-5'];
        
        input.forEach(el => {
            expect(() => 
             MenuValidator.isHaveMenu(el)).toThrow(Error);
        });
    });

    describe("수량 테스트", () => {
        test("숫자를 작성했는지 테스트", () => {
            const input = ['시저샐러드-a', '시저샐러드-1a'];
            
            input.forEach(el => {
                expect(() => 
                    MenuValidator.isCheckNumber(el)).toThrow(Error);
            });
        });

        test("입력한 숫자가 1 이상 인지 테스트", () => {
            const input = '크리스마스파스타-0';
            
            expect(() => 
                MenuValidator.isCheckNumber(input)).toThrow(Error);
        });
    });
});