import Benefit from '../src/Domain/Benefit.js';

describe("혜택 클래스 테스트", () => {
    let benefit;

    beforeEach(() => {
        benefit = new Benefit();
    });

    test("증정 여부 테스트", () => {
        expect(benefit.isPresentation(50000)).toBe(undefined);
        expect(benefit.isPresentation(120000)).toBe("샴페인 1개");
    });

    test("배지 부여 테스트", () => {
        expect(benefit.getBadge(5000)).toBe('별');
        expect(benefit.getBadge(10000)).toBe('트리');
        expect(benefit.getBadge(20000)).toBe('산타');
    });

    describe("총 혜택 금액 테스트", () => {
        test("혜택이 없을 시 테스트", () => {
            const benefitList = [];
    
            expect(benefit.getTotalBenefitPrice(benefitList)).toBe(0);
        });

        test("1개의 혜택만 주어졌을 시 테스트", () => {
            const benefitList = [
                { 'name': '테스트', 'benefit': 55000 },
            ];
    
            expect(benefit.getTotalBenefitPrice(benefitList)).toBe(55000);
        });

        test("1개 이상의 혜택이 주어졌을 시 테스트", () => {
            const benefitList = [
                { 'name': '테스트', 'benefit': 25000 },
                { 'name': '테스트', 'benefit': 35000 },
            ];
    
            expect(benefit.getTotalBenefitPrice(benefitList)).toBe(60000);
        });
    });

    describe("혜택 내역 테스트", () => {
        test("총 주문 금액이 10000원이 넘지 않을 경우 이벤트 내역이 없는 경우 테스트", () => {
            const orderedList = [];
            const presentation = "샴페인 1개";
            const totalPrice = 9999;
    
            expect(benefit.getBenefitList(orderedList, presentation, totalPrice)).toEqual([]);
        });

        test("증정 상품을 제공하지 않았을 경우(undefined) 테스트", () => {
            const orderedList = [];
            const presentation = undefined;
            const totalPrice = 12000;

            expect(benefit.getBenefitList(orderedList, presentation, totalPrice)).toEqual([]);
        });

        test("증정 상품을 제공했을 경우 테스트", () => {
            const orderedList = [];
            const presentation = "샴페인 1개";
            const totalPrice = 12000;

            expect(benefit.getBenefitList(orderedList, presentation, totalPrice)).toEqual(
                expect.arrayContaining([
                    expect.objectContaining(
                        { 'name': '증정 이벤트' }
                    )
                ])
            );
        });
    });
});