import EventController from './controller/EventController';

class App {
  constructor() {
    this.eventController = new EventController();
  }
  async run() {
    await this.eventController.start();
  }
}

export default App;