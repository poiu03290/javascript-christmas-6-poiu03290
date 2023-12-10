import EventController from "./controller/EventController.js";

class App {
  async run() {
    new EventController().requestDate();
  }
}

export default App;
