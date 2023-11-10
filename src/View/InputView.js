import { Console } from '@woowacourse/mission-utils';
import Menu from '../domain/Menu.js';

import { INPUT_MESSAGE } from '../data/message.js';

const InputView = {
    async readDate() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.DATE);

        return input;
    },

    async readMenu() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.MENU);
        const MenuList = Menu.modifyObj(input);
        
        return MenuList;
    }
}

export default InputView;