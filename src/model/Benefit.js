import { WEEKEND, SPECIAL } from '../data/date.js';

class Benefit {
    constructor(date) {
        this.date = date;
        this.obj = {};
    }

    isPresentation(price) {
        if(+price >= 120000) {
            return "샴페인 1개"
        }

        return undefined;
    }

    #modifyObj(name, benefit) {
        const temp = { ...this.obj, name: name, benefit: benefit };

        return temp;
    }

    getBadge(price) {
        if(5000 <= price && price < 10000) {
            return '별';
        }
        if(10000 <= price && price < 20000) {
            return '트리';
        }
        if(20000 <= price) {
            return '산타';
        }

        return undefined;
    }

    getTotalBenefitPrice(benefitList) {
        return benefitList.reduce((acc, cur) => {
            return acc += cur.benefit;
        }, 0)
    }

    getBenefitList(orderedList, presentation, totalPrice) {
        let list = [];
        if(totalPrice < 10000) {
            return list;
        }
        const christmas = this.#christmas();
        const weekend = this.#weekend(orderedList);
        const weekday = this.#weekday(orderedList);
        const special = this.#special();
        const event = this.#presentation(presentation);

        list.push(christmas, weekend, weekday, special, event);
        const benefitList = list.filter(v => v.benefit !== 0);
        return benefitList;
    }

    #christmas() {
        let benefit = 0;
        if(this.date <= 25) {
            benefit += (+this.date - 1) * 100 + 1000;
        }
        
        const result = this.#modifyObj('크리스마스 디데이 할인', benefit);
        return result;
    }

    #weekend(orderedList) {
        let benefit = 0;
        const filtered = orderedList
            .filter(menu => menu.type === 'main')
            .reduce((acc, cur) => acc + cur.count, 0);
            
        if(WEEKEND.includes(this.date)) {
            benefit = filtered * 2023;
        }
        const result = this.#modifyObj('주말 할인', benefit);
        
        return result;
    }

    #weekday(orderedList) {
        let benefit = 0;
        const filtered = orderedList
            .filter(menu => menu.type === 'dessert')
            .reduce((acc, cur) => acc + cur.count, 0);

        if(!WEEKEND.includes(this.date)) {
            benefit = filtered * 2023;
        }
        const result = this.#modifyObj('평일 할인', benefit);
        
        return result;
    }

    #special() {
        let benefit = 0;
        if(SPECIAL.includes(this.date)) {
            benefit = 1000;
        }
        const result = this.#modifyObj('특별 할인', benefit);

        return result;
    }


    #presentation(data) {
        const benefit = data === undefined ? 0 : 25000;

        const result = this.#modifyObj('증정 이벤트', benefit);
        return result;
    }
}

export default Benefit;