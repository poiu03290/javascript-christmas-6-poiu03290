import ALL_MENU from '../data/menu.js';

class Menu {
    constructor() {}

    static modifyObj(input) {
        const obj = {};
        const splitedMenu = input.split(',');

        splitedMenu.map(menu => {
            const split = menu.split('-');
            obj[split[0]] = split[1];
        });

        return obj;
    }

    getOrderedList(input) {
        const menuList = Menu.modifyObj(input);
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
}

export default Menu;