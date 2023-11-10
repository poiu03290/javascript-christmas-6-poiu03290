import OutputView from '../View/OutputView.js';

class Menu {
    constructor(menu) {
        this.menu = menu;
    }

    static modifyObj(input) {
        const obj = {};
        const ordredMenu = input.split(',');

        ordredMenu.map(menu => {
            const split = menu.split('-');
            obj[split[0]] = split[1];
        });

        return obj;
    }

    getMenuList() {
        OutputView.listPrint(this.menu, 'menu');
    }
}

export default Menu;