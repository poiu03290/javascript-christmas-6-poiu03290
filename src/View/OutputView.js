import { Console } from '@woowacourse/mission-utils';

import { OUTPUT_MESSAGE } from '../data/message.js';

const OutputView = {
    print(message) {
        Console.print(`${OUTPUT_MESSAGE[message]}`);
    }
    // ...
}

export default OutputView;