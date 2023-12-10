import { Console } from "@woowacourse/mission-utils";

import { TITLE } from "../data/message.js";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printError(error) {
    Console.print(error);
  },

  printList(list, type) {
    if (type === "menu") {
      Console.print(TITLE.MENU);
      list.forEach((menu) => {
        Console.print(`${menu.name} ${menu.amount}개`);
      });
    }
    if (type === "benefit") {
      Console.print(TITLE.DISCOUNT);
      if (list.length < 1) {
        Console.print("없음");
      }
      list.forEach((benefit) => {
        Console.print(
          `${benefit.name}: -${Number(benefit.amount).toLocaleString()}원`
        );
      });
    }
  },

  printPrice(price, title) {
    Console.print(title);
    if (title === "<총혜택 금액>") {
      return Console.print(`-${price.toLocaleString()}원`);
    }
    Console.print(`${price.toLocaleString()}원`);
  },

  printWhether(benefit, title) {
    Console.print(title);
    Console.print(benefit ?? "없음");
  },
};

export default OutputView;
