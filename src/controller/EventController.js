import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import { MESSAGE } from "../data/message.js";

class EventController {
  #date;
  #menuList;

  async requestDate() {
    OutputView.printMessage(MESSAGE.START);
    this.#date = await InputView.readDate();
    await this.getMenuList();
  }

  async getMenuList() {
    this.#menuList = await InputView.readMenu();
    OutputView.printMessage(MESSAGE.PREVIEW(this.#date));
    OutputView.printList(this.#menuList, "menu");
  }
}

export default EventController;
