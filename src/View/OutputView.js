import { Console } from '@woowacourse/mission-utils';

import { OUTPUT_MESSAGE } from '../data/message.js';

const OutputView = {
    print(message) {
        if(!isNaN(+message)) {
            return Console.print(`${OUTPUT_MESSAGE.PREVIEW(message)}`);
        }
        Console.print(`${OUTPUT_MESSAGE[message]}`);
    }
}

export default OutputView;