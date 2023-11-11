import { Console } from '@woowacourse/mission-utils';
import DateValidator from '../Domain/DateValidator.js';
import MenuValidator from '../Domain/MenuValidator.js';

import { INPUT_MESSAGE } from '../data/message.js';

const InputView = {
    async readDate() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.DATE);

        const dateValidator = new DateValidator();
        const result = await dateValidator.isDateValidate(input);

        return result;
    },

    async readMenu() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.MENU);

        const menuValidator = new MenuValidator();
        const result = await menuValidator.isMenuValidate(input);
        
        return result;
    }
}

export default InputView;