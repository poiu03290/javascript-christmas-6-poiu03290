import EventController from "./controller/EventController.js";

class App {
  async run() {
    new EventController().requestUserInput();
  }
}

export default App;
