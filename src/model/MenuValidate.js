import MENU from "../data/menu.js";
import { ERROR_MESSAGE } from "../data/message.js";

const MenuValidate = {
  isMenuValidate(menuList, input) {
    MenuValidate.isProperForm(input);
    MenuValidate.isDuplicatedMenu(menuList);
    MenuValidate.isProperQuantity(menuList);
    MenuValidate.isCheckAtLeastQuantity(menuList);
    MenuValidate.isCheckExistedMenu(menuList);
    MenuValidate.isCheckOnlyBeverage(menuList);
  },

  isDuplicatedMenu(menuList) {
    const menuName = menuList.map((menu) => menu.name);
    if (menuName.length !== new Set(menuName).size) {
      throw new Error(ERROR_MESSAGE.MENU);
    }
  },

  isProperQuantity(menuList) {
    const menuTotalQuantity = menuList
      .map((menu) => menu.count)
      .reduce((acc, cur) => (acc += Number(cur)), 0);

    if (menuTotalQuantity > 20) {
      throw new Error(ERROR_MESSAGE.MENU);
    }
  },

  isCheckAtLeastQuantity(menuList) {
    const menuQuantity = menuList.map((menu) => menu.count);
    menuQuantity.forEach((quantity) => {
      if (Number(quantity) < 1) {
        throw new Error(ERROR_MESSAGE.MENU);
      }
    });
  },

  isProperForm(input) {
    const array = input.split(",");
    array.forEach((menu) => {
      const split = menu.split("-");
      if (split.length !== 2) {
        throw new Error(ERROR_MESSAGE.MENU);
      }
    });
  },

  isCheckExistedMenu(menuList) {
    menuList.forEach((menu) => {
      const finedMenu = MENU.find((item) => menu.name === item.name);
      if (!finedMenu) {
        throw new Error(ERROR_MESSAGE.MENU);
      }
    });
  },

  isCheckOnlyBeverage(menuList) {
    const categories = [];
    menuList.forEach((menu) => {
      const finedMenu = MENU.find((item) => menu.name === item.name);
      categories.push(finedMenu.category);
    });

    if (new Set(categories).size === 1 && new Set(categories).has("beverage")) {
      throw new Error(ERROR_MESSAGE.MENU);
    }
  },
};

export default MenuValidate;
