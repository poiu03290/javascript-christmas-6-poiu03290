import { Console } from "@woowacourse/mission-utils";

import DateValidate from "../model/DateValidate.js";
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
};

export default InputView;
