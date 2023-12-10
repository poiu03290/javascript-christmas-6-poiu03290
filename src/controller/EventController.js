import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import Event from "../model/Event.js";

import { MESSAGE, TITLE } from "../data/message.js";

class EventController {
  #event;

  async requestUserInput() {
    OutputView.printMessage(MESSAGE.START);
    const date = await InputView.readDate();
    const menu = await InputView.readMenu();
    OutputView.printMessage(MESSAGE.PREVIEW(date));

    this.#event = new Event(menu, date);
    this.handleEventApplication();
  }

  handleEventApplication() {
    const menuList = this.#event.getMenuList();
    OutputView.printList(menuList, "menu");

    const totalPrice = this.#event.getTotalPrice();
    OutputView.printPrice(totalPrice, TITLE.PRICE_BEFORE_DISCOUNT);

    const presentation = this.#event.isPresentation(totalPrice);
    OutputView.printWhether(presentation, TITLE.PRESENTATION);

    const benefitList = this.#event.getBenefitList();
    OutputView.printList(benefitList, "benefit");

    const totalBenefitPrice = this.#event.getTotalBenefitPrice();
    OutputView.printTotalBenefitPrice(totalBenefitPrice, TITLE.TOTAL_DISCOUNT);

    const totalPriceAfterDiscount = this.#event.getTotalPriceAfterDiscount(
      totalPrice,
      totalBenefitPrice
    );
    OutputView.printPrice(totalPriceAfterDiscount, TITLE.PRICE_AFTER_DISCOUNT);

    const badge = this.#event.getBadge(totalBenefitPrice);
    OutputView.printWhether(badge, TITLE.BADGE);
  }
}

export default EventController;
