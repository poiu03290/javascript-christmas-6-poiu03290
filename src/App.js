import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

import Menu from './domain/Menu.js';

class App {
  async run() {
    OutputView.print("WELCOME");
    const date = await InputView.readDate();
    const menuList = await InputView.readMenu();
    OutputView.print(+date);

    const menu = new Menu(menuList);
    OutputView.print("MENU");
    OutputView.listPrint(menuList, 'menu');

    OutputView.print("TOTAL_PRICE");
    const totalPrice = menu.getTotalPrice();
    OutputView.singlePrint(totalPrice, 'price');
  }
}

export default App;
