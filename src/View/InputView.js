import { Console } from '@woowacourse/mission-utils';
import Validator from '../Domain/Validator.js';

import { INPUT_MESSAGE } from '../data/message.js';

const InputView = {
    async readDate() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.DATE);
        const result = await Validator.isDateValidate(input);

        return result;
    },

    async readMenu() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.MENU);
        
        return input;
    }
}

export default InputView;