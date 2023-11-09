import InputView from './InputView.js';

class App {
  async run() {
    await InputView.readMenu();
  }
}

export default App;
