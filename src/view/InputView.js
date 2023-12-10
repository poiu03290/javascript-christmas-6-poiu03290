import { Console } from "@woowacourse/mission-utils";

import DateValidate from "../model/DateValidate.js";
import MenuValidate from "../model/MenuValidate.js";
import Menu from "../model/Menu.js";
import OutputView from "./OutputView.js";

import { MESSAGE } from "../data/message.js";

const InputView = {
  async readDate() {
    try {
      const input = await Console.readLineAsync(MESSAGE.DATE);
      DateValidate.isDateValidate(input);

      return input;
    } catch (error) {
      OutputView.printError(error.message);
      return InputView.readDate();
    }
  },

  async readMenu() {
    try {
      const input = await Console.readLineAsync(MESSAGE.MENU);
      const menu = new Menu(input);
      const menuList = menu.getMenuList();
      MenuValidate.isMenuValidate(menuList, input);

      return menu;
    } catch (error) {
      OutputView.printError(error.message);
      return InputView.readMenu();
    }
  },
};

export default InputView;
