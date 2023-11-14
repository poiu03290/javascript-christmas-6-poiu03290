import Menu from '../src/model/Menu.js';

describe("메뉴 클래스 테스트", () => {
    let menu;

    beforeEach(() => {
        menu = new Menu();
    });

    describe("주문 리스트 테스트", () => {
        test("1개 주문 시 주문 리스트를 만드는지 테스트", () => {
            const input = '해산물파스타-2';

            expect(menu.getOrderedList(input).length).toBe(1);
            expect(menu.getOrderedList(input)).toEqual([{ name: '해산물파스타', type: 'main', price: 35000, count: 2 }]);
        });

        test("1개 이상 주문 시 주문 리스트를 만드는지 테스트", () => {
            const input = '티본스테이크-1,해산물파스타-1,레드와인-2';
            const result = [
                { "name": "티본스테이크", "price": 55000, "type": "main", "count": 1 }, 
                { "name": "해산물파스타", "price": 35000, "type": "main", "count": 1 }, 
                { "name": "레드와인", "price": 60000, "type": "beverage", "count": 2 }
            ];

            expect(menu.getOrderedList(input).length).toBe(3);
            expect(menu.getOrderedList(input)).toEqual(result);
        });
    });

    describe("총 금액 계산 테스트", () => {
        test("1개 주문을 계산하는지 테스트", () => {
            const stake = [{ name: '티본스테이크', type: 'main', price: 55000, count: 1 }];
            const pasta = [{ name: '해산물파스타', type: 'main', price: 35000, count: 2 }];
            
            expect(menu.getTotalPrice(stake)).toBe(55000);
            expect(menu.getTotalPrice(pasta)).toBe(70000);
        });

        test("1개 이상 주문을 계산하는지 테스트", () => {
            const manyList = [
                { "name": "티본스테이크", "price": 55000, "type": "main", "count": 1 }, 
                { "name": "해산물파스타", "price": 35000, "type": "main", "count": 1 }, 
                { "name": "레드와인", "price": 60000, "type": "beverage", "count": 2 }
            ];
            const dessertList = [
                { "name": "초코케이크", "type": "dessert", "price": 15000, "count": 1 },    
                { "name": "아이스크림", "type": "dessert", "price": 5000, "count": 1 }
            ]
            expect(menu.getTotalPrice(manyList)).toBe(210000);
            expect(menu.getTotalPrice(dessertList)).toBe(20000);
        });
    });

    describe("예상 결제 금액 계산 테스트", () => {
        test("증정 메뉴가 있을 경우(=주문 금액이 12만원이 넘지 않을 경우) 테스트", () => {
            const totalPrice = 120000;
            const totalBenefitPrice = 50000;
            
            expect(menu.getExpectationPrice(totalPrice, totalBenefitPrice)).toBe(95000);
        });

        test("증정 메뉴가 없을 경우(=주문 금액이 12만원이 넘지 않을 경우) 테스트", () => {
            const totalPrice = 80000;
            const totalBenefitPrice = 50000;
            
            expect(menu.getExpectationPrice(totalPrice, totalBenefitPrice)).toBe(30000);
        });

        test("혜택 금액이 0원일 경우", () => {
            const totalPrice = 50000;
            const totalBenefitPrice = 0;
            
            expect(menu.getExpectationPrice(totalPrice, totalBenefitPrice)).toBe(50000);
        });
    });
});