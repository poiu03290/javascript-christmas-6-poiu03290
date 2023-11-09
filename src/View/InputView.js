import { Console } from '@woowacourse/mission-utils';
import Menu from '../domain/Menu.js';

import { INPUT_MESSAGE } from '../data/message.js';

const InputView = {
    async readDate() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.DATE);
        // ...
    },

    async readMenu() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.MENU);

        const menu = Menu.modifyObj(input);
        console.log(menu);
    }
}

export default InputView;