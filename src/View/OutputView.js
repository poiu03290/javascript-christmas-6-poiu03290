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
        if(list.length === 0) {
            return Console.print('없음');
        }
        list.forEach(el => {
            if(type === 'menu') {
                Console.print(`${el.name} ${el.count}개`);
            }
            if(type === 'benefit') {
                Console.print(`${el.name}: -${el.benefit.toLocaleString()}원`)
            }
        })
    },

    singlePrint(data, type) {
        if(type === 'price') {
            return Console.print(`${data.toLocaleString()}원`);
        }
        if(type === 'benefit') {
            return Console.print(`-${data.toLocaleString()}원`);
        }
        return Console.print(data ?? "없음");
    },
}

export default OutputView;