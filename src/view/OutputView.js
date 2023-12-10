import { Console } from "@woowacourse/mission-utils";

import { TITLE } from "../data/message.js";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printError(error) {
    Console.print(error);
  },

  printList(menuList, type) {
    if (type === "menu") {
      Console.print(TITLE.MENU);
      menuList.forEach((menu) => {
        Console.print(`${menu.name} ${menu.count}개`);
      });
    }
  },
};

export default OutputView;
