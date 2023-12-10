import ALL_MENU from "../data/menu.js";

class Menu {
  #menu;

  constructor(input) {
    this.#menu = input;
  }

  static modifyObj(menu) {
    const obj = { name: "", count: 0 };

    const split = menu.split("-");
    obj["name"] = split[0];
    obj["count"] = split[1];

    return obj;
  }

  getMenuList() {
    const menuList = [];
    const split = this.#menu.split(",");
    split.map((menu) => {
      const temp = Menu.modifyObj(menu);
      menuList.push(temp);
    });

    return menuList;
  }

  getTotalPrice() {
    const menuList = this.getMenuList();
    let totalPrice = 0;

    menuList.forEach((menu) => {
      const finedMenu = ALL_MENU.find((item) => item.name === menu.name);
      totalPrice += finedMenu.price * Number(menu.count);
    });

    return totalPrice;
  }
}

export default Menu;
