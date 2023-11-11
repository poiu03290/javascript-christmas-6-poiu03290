import MenuValidator from '../Domain/MenuValidator.js';

import ALL_MENU from '../data/menu.js';

class Menu {
    constructor() {}

    getOrderedList(input) {
        const menuList = MenuValidator.modifyObj(input);
        let orderedList = [];
        for(const [orderedMenu, count] of Object.entries(menuList)) {
            const finedMenu = ALL_MENU.find(menu => menu.name === orderedMenu);
            finedMenu['count'] = +count;
            orderedList.push(finedMenu);
        }
        
        return orderedList;
    }

    getTotalPrice(orderedList) {
        return orderedList.reduce((acc, cur) => {
            acc += cur.price * cur.count;

            return acc;
        }, 0)
    }

    getExpectationPrice(totalPrice, totalBenefitPrice) {
        const event = totalPrice >= 120000 ? 25000 : 0;
        return totalPrice - totalBenefitPrice + event;
    }
}

export default Menu;