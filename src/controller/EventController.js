import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import { MESSAGE } from "../data/message.js";

class EventController {
  #date;
  #menu;

  async requestDate() {
    OutputView.printMessage(MESSAGE.START);
    this.#date = await InputView.readDate();
    console.log(this.#date);
    await this.getMenuList();
  }

  async getMenuList() {
    InputView.readMenu();
  }
}

export default EventController;
