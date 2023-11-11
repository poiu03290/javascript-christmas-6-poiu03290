import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';

import { INPUT_MESSAGE } from '../data/message.js';

class Validator {
    constructor() {}

    static async isDateValidate(input) {
        let date = input;
        while(true) {
            try {
                Validator.isCheckNumber(date);
                Validator.isCheckProperRange(date);
                break;
            } catch(error) {
                OutputView.errorPrint(error.message);
                date = await InputView.readDate(INPUT_MESSAGE.DATE);
            }
        }

        return date;
    }

    static isCheckNumber(date) {
        if(isNaN(+date)) {
            throw new Error("DATE");
        }
    }

    static isCheckProperRange(date) {
        if(+date < 1 || +date > 31) {
            throw new Error("DATE");
        }
    }
}

export default Validator;