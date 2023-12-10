import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printError(error) {
    Console.print(error);
  },

  printMenu() {
    Console.print("<주문 메뉴>");
    // ...
  },
  // ...
};

export default OutputView;
