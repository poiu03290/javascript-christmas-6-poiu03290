import ALL_MENU from '../data/menu.js';

class Menu {
    constructor(menu) {
        this.menu = menu;
    }

    static modifyObj(input) {
        const obj = {};
        const splitedMenu = input.split(',');

        splitedMenu.map(menu => {
            const split = menu.split('-');
            obj[split[0]] = split[1];
        });

        return obj;
    }

    getOrderedList() {
        let orderedList = [];
        for(const [orderedMenu, count] of Object.entries(this.menu)) {
            const finedMenu = ALL_MENU.find(menu => menu.name === orderedMenu);
            finedMenu['count'] = +count;
            orderedList.push(finedMenu);
        }

        return orderedList;
    }

    getTotalPrice() {
        const orderedList = this.getOrderedList();
        return orderedList.reduce((acc, cur) => {
            acc += cur.price * cur.count;

            return acc;
        }, 0)
    }
}

export default Menu;