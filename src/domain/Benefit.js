import { WEEKEND, SPECIAL } from '../data/date.js';

class Benefit {
    constructor(date) {
        this.date = date;
        this.obj = {};
    }

    presentation(price) {
        if(+price >= 120000) {
            return "샴페인 1개"
        }

        return "없음"
    }

    getBenefitList(orderedList) {
        let list = [];
        const christmas = this.#christmas();
        const weekend = this.#weekend(orderedList);
        const weekday = this.#weekday(orderedList);
        const special = this.#special();

        return list;
    }

    #christmas() {
        let benefit = 0;
        if(this.date <= 25) {
            benefit += (+this.date - 1) * 100 + 1000;
        }
        
        return benefit;
    }

    #weekend(orderedList) {
        let benefit = 0;
        const filtered = orderedList
            .filter(menu => menu.type === 'main')
            .reduce((acc, cur) => acc + cur.count, 0);
            
        if(WEEKEND.includes(this.date)) {
            benefit = filtered * 2023;
        }
        
        return benefit;
    }

    #weekday(orderedList) {
        let benefit = 0;
        const filtered = orderedList
            .filter(menu => menu.type === 'dessert')
            .reduce((acc, cur) => acc + cur.count, 0);

        if(!WEEKEND.includes(this.date)) {
            benefit = filtered * 2023;
        }
        
        return benefit;
    }

    #special() {
        let benefit = 0;
        if(SPECIAL.includes(this.date)) {
            benefit = 1000;
        }
        
        return benefit;
    }
}

export default Benefit;