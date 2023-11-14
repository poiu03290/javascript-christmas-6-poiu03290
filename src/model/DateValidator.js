import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

import { INPUT_MESSAGE } from '../data/message.js';

class DateValidator {
    constructor() {}

    async isDateValidate(input) {
        let date = input;
        while(true) {
            try {
                DateValidator.isCheckNumber(date);
                DateValidator.isCheckProperRange(date);
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

export default DateValidator;