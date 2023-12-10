import { Console } from "@woowacourse/mission-utils";

import DateValidate from "../model/DateValidate.js";
import MenuValidate from "../model/MenuValidate.js";
import Event from "../model/Event.js";
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
      const menuList = new Event().getMenuList(input);
      MenuValidate.isMenuValidate(menuList, input);

      return menuList;
    } catch (error) {
      OutputView.printError(error.message);
      return InputView.readMenu();
    }
  },
};

export default InputView;
