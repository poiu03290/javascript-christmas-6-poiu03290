import { ERROR_MESSAGE } from "../data/message.js";

const DateValidate = {
  isDateValidate(date) {
    DateValidate.isNumber(date);
    DateValidate.isProperRange(date);
  },

  isNumber(date) {
    if (date.length < 1 || isNaN(date)) {
      throw new Error(ERROR_MESSAGE.DATE);
    }
  },

  isProperRange(date) {
    if (Number(date) < 1 || Number(date) > 31) {
      throw new Error(ERROR_MESSAGE.DATE);
    }
  },
};

export default DateValidate;
