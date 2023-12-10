import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class EventController {
  #date;

  async requestDate() {
    this.#date = await InputView.readDate();
    console.log(this.date);
  }
}

export default EventController;
