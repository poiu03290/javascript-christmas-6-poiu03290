import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

import Menu from './domain/Menu.js';
import Benefit from './domain/Benefit.js';

class App {
  async run() {
    OutputView.print("WELCOME");
    const date = await InputView.readDate();
    const input = await InputView.readMenu();
    OutputView.print(+date);

    const menu = new Menu();
    const orderedList = menu.getOrderedList(input);
    OutputView.print("MENU");
    OutputView.listPrint(orderedList, 'menu');

    OutputView.print("TOTAL_PRICE");
    const totalPrice = menu.getTotalPrice(orderedList);
    OutputView.singlePrint(totalPrice, 'price');

    OutputView.print("PRESENTATION");
    const benefit = new Benefit(date);
    const presentation = benefit.isPresentation(totalPrice);
    OutputView.singlePrint(presentation);

    OutputView.print("BENEFIT_LIST");
    const benefitList = benefit.getBenefitList(orderedList, presentation);
    OutputView.listPrint(benefitList, 'benefit');

    OutputView.print("BENEFIT_PRICE");
    const totalBenefitPrice = benefit.getTotalBenefitPrice(benefitList);
    OutputView.singlePrint(totalBenefitPrice, 'benefit');

    OutputView.print("EXPECTATION_PRICE");
    const expectationPrice = menu.getExpectationPrice(totalPrice, totalBenefitPrice);
    OutputView.singlePrint(expectationPrice, 'price');

    OutputView.print("BADGE");
    const badge = benefit.getBadge(totalBenefitPrice);
    OutputView.singlePrint(badge);
  }
}

export default App;
