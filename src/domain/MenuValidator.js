import Menu from './Menu.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';

import { INPUT_MESSAGE } from '../data/message.js';

import ALL_MENU from '../data/menu.js';

class MenuValidator {
    constructor() {};

    static modifyObj(input) {
        const obj = {};
        const splitedMenu = input.split(',');

        splitedMenu.map(menu => {
            const split = menu.split('-');
            obj[split[0]] = split[1];
        });

        return obj;
    }

    async isMenuValidate(input) {
        let menu = input;
        while(true) {
            try {
                MenuValidator.isAllCheck(menu);
                break;
            } catch(error) {
                OutputView.errorPrint(error.message);
                menu = await InputView.readMenu(INPUT_MESSAGE.MENU);
            }
        }

        return menu;
    }

    static isAllCheck(menu) {
        MenuValidator.isCheckProperForm(menu);
        MenuValidator.isHaveMenu(menu);
        MenuValidator.isCheckNumber(menu);
        MenuValidator.isCheckDuplicatedMenu(menu);
        MenuValidator.isCheckOnlyBeverage(menu);
        MenuValidator.isCheckMaximumQuantity(menu);
    }

    static isCheckOnlyBeverage(input) {
        this.menu = new Menu();
        const orderedList = this.menu.getOrderedList(input);
        
        const filtered = orderedList.filter(menu => menu.type === 'beverage');
        if(orderedList.length === filtered.length) {
            throw new Error("BEVERAGE");
        }
    }

    static isCheckMaximumQuantity(input) {
        const menu = MenuValidator.modifyObj(input);
        const menuCount = Object.values(menu);
        const quantity = menuCount.reduce((acc, cur) => {
            return acc += +cur;
        }, 0);

        if(quantity > 20) {
            throw new Error("QUANTITY");
        }
    }

    static isCheckProperForm(input) {
        const menus = input.split(',');
        for(const menu of menus) {
            if(!menu.includes('-')) {
                throw new Error("MENU");
            }
            const split = menu.split('-');
            if(split.length !== 2) {
                throw new Error("MENU");
            }
        }
    }

    static isHaveMenu(input) {
        const menu = MenuValidator.modifyObj(input);
        const menuName = Object.keys(menu);
        const filtered = ALL_MENU.map(menu => menu.name);
        const isHave = menuName.every(menu => filtered.includes(menu));

        if(!isHave) {
            throw new Error("MENU");
        }
    }

    static isCheckNumber(input) {
        const menu = MenuValidator.modifyObj(input);
        const menuCount = Object.values(menu);
        for(const count of menuCount) {
            if(isNaN(+count) || +count < 1) {
                throw new Error("MENU");
            }
        }
    }

    static isCheckDuplicatedMenu(input) {
        const split = input.split(',');
        const menu = MenuValidator.modifyObj(input);
        const menuName = Object.keys(menu);
        if(split.length !== menuName.length) {
            throw new Error("MENU");
        }
    }
}

export default MenuValidator;