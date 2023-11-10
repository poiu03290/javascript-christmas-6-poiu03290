import Menu from './Menu.js';

class Benefit {
    constructor(date) {
        this.menu = new Menu();
        this.date = date;
        this.obj = {};
    }

    presentation(price) {
        if(+price >= 120000) {
            return "샴페인 1개"
        }

        return "없음"
    }

    getBenefitList() {
        return this.christmas();
    }

    christmas() {
        let sum = 0;
        if(this.date <= 25) {
            sum += (+this.date - 1) * 100 + 1000;
        }
        const christmasBenefit = {
            ...this.obj,
            name: '크리스마스 디데이 할인',
            benefit: sum
        }
        
        return christmasBenefit;
    }
}

export default Benefit;