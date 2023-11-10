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
    menu.getMenuList();
  }
}

export default App;
