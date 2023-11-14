import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

import Menu from '../model/Menu.js';
import Benefit from '../model/Benefit.js';

class EventController {
    #date;
    #menu;
    #orderedList;
    #totalPrice;
    #presentation;
    #benefitList;
    #totalBenefitPrice;
    #expectationPrice;
    #badge;

    constructor() {
        this.menu = new Menu();
    }

    async start() {
        OutputView.print("WELCOME");
        await this.getUserInput();
    }

    async getUserInput() {
        this.#date = await InputView.readDate();
        this.#menu = await InputView.readMenu();
        OutputView.print(+this.#date);
        this.orderedList();
    }

    orderedList() {
        this.#orderedList = this.menu.getOrderedList(this.#menu);
        OutputView.print("MENU");
        OutputView.listPrint(this.#orderedList, 'menu');
        this.totalPrice();
    }

    totalPrice() {
        OutputView.print("TOTAL_PRICE");
        this.#totalPrice = this.menu.getTotalPrice(this.#orderedList);
        OutputView.singlePrint(this.#totalPrice, 'price');
        this.presentation();
    }

    presentation() {
        OutputView.print("PRESENTATION");
        const benefit = new Benefit(this.#date);
        this.#presentation = benefit.isPresentation(this.#totalPrice);
        OutputView.singlePrint(this.#presentation);
        this.benefitList();
    }

    benefitList() {
        OutputView.print("BENEFIT_LIST");
        const benefit = new Benefit(this.#date);
        this.#benefitList = benefit.getBenefitList(this.#orderedList, this.#presentation, this.#totalPrice);
        OutputView.listPrint(this.#benefitList, 'benefit');
        this.benefitPrice();
    }

    benefitPrice() {
        OutputView.print("BENEFIT_PRICE");
        const benefit = new Benefit(this.#date);
        this.#totalBenefitPrice = benefit.getTotalBenefitPrice(this.#benefitList);
        OutputView.singlePrint(this.#totalBenefitPrice, 'benefit');
        this.expectationPrice();
    }

    expectationPrice() {
        OutputView.print("EXPECTATION_PRICE");
        this.#expectationPrice = this.menu.getExpectationPrice(this.#totalPrice, this.#totalBenefitPrice);
        OutputView.singlePrint(this.#expectationPrice, 'price');
        this.badge();
    }

    badge() {
        OutputView.print("BADGE");
        const benefit = new Benefit(this.#date);
        this.#badge = benefit.getBadge(this.#totalBenefitPrice);
        OutputView.singlePrint(this.#badge);
    }
}

export default EventController;