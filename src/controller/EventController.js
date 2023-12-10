import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import { MESSAGE } from "../data/message.js";

class EventController {
  #date;
  #menu;

  async requestDate() {
    OutputView.printMessage(MESSAGE.START);
    this.#date = await InputView.readDate();
    await this.getMenuList();
  }

  async getMenuList() {
    this.#menu = await InputView.readMenu();
    OutputView.printMessage(MESSAGE.PREVIEW(this.#date));

    const menuList = this.#menu.getMenuList();
    OutputView.printList(menuList, "menu");
    this.handleEventApplication();
  }

  handleEventApplication() {
    const totalPrice = this.#menu.getTotalPrice();
    OutputView.printPrice(totalPrice);
  }
}

export default EventController;
