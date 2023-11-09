class Menu {
    constructor() {}

    static modifyObj(input) {
        const obj = {};
        const ordredMenu = input.split(',');

        ordredMenu.map(menu => {
            const split = menu.split('-');
            obj[split[0]] = split[1];
        });

        return obj;
    }
}

export default Menu;