import InputView from './InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    OutputView.print("WELCOME");
    const date = await InputView.readDate();
    await InputView.readMenu();
    OutputView.print(+date);
  }
}

export default App;
