import EventController from "./controller/EventController.js";

class App {
  async run() {
    await new EventController().requestUserInput();
  }
}

export default App;
