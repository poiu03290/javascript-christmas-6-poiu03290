import EventController from './Controller/EventController.js';

class App {
  constructor() {
    this.eventController = new EventController();
  }
  async run() {
    await this.eventController.start();
  }
}

export default App;