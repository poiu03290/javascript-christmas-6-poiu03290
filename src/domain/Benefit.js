import Menu from './Menu.js';

class Benefit {
    constructor() {
        this.menu = new Menu();
    }

    presentation(price) {
        if(+price >= 120000) {
            return "샴페인 1개"
        }

        return "없음"
    }
}

export default Benefit;