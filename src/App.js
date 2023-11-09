import InputView from './InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    OutputView.print("WELCOME");
    await InputView.readMenu();
  }
}

export default App;
