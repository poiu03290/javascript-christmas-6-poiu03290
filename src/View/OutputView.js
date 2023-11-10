import { Console } from '@woowacourse/mission-utils';

import { OUTPUT_MESSAGE } from '../data/message.js';

const OutputView = {
    print(message) {
        if(!isNaN(+message)) {
            return Console.print(`${OUTPUT_MESSAGE.PREVIEW(message)}`);
        }
        Console.print(`${OUTPUT_MESSAGE[message]}`);
    },

    listPrint(list, type) {
        for(const [key, value] of Object.entries(list)){
            if(type === 'menu') {
                Console.print(`${key} ${value}개`);
            } 
            if(type === 'benefit') {
                Console.print(`${key}: ${value.toLocaleString()}원`);
            }
        };
    }
}

export default OutputView;