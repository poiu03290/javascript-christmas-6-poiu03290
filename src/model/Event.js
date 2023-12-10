import ALL_MENU from "../data/menu.js";
import { WEEKEND, SPECIAL } from "../data/discount.js";

class Event {
  #menu;
  #date;

  constructor(menu, date) {
    this.#menu = menu;
    this.#date = date;
  }

  static modifyObj(menu) {
    const obj = { name: "", amount: 0 };

    const split = menu.split("-");
    obj["name"] = split[0];
    obj["amount"] = split[1];

    return obj;
  }

  getMenuList() {
    const menuList = [];
    const split = this.#menu.split(",");
    split.map((menu) => {
      const temp = Event.modifyObj(menu);
      menuList.push(temp);
    });

    return menuList;
  }

  getTotalPrice() {
    const menuList = this.getMenuList();
    let totalPrice = 0;

    menuList.forEach((menu) => {
      const finedMenu = ALL_MENU.find((item) => item.name === menu.name);
      totalPrice += finedMenu.price * Number(menu.amount);
    });

    return totalPrice;
  }

  isPresentation() {
    const totalPrice = this.getTotalPrice();
    if (totalPrice > 120000) {
      return "샴페인 1개";
    }

    return undefined;
  }

  getBenefitList() {
    const totalPrice = this.getTotalPrice();
    if (totalPrice < 10000) {
      return [];
    }
    const christmas = this.#isChristmasDiscount();
    const weekend = this.#isWeekDiscount();
    const special = this.#isSpecialDiscount();
    const presentation = this.#isPresentationBenefit();
    return this.#isCheckUndefined(christmas, weekend, special, presentation);
  }

  getTotalBenefitPrice() {
    const benefitList = this.getBenefitList();
    return benefitList.reduce((acc, cur) => (acc += Number(cur.amount)), 0);
  }

  getTotalPriceAfterDiscount(totalPrice, totalBenefitPrice) {
    const presentation = this.isPresentation();
    if (presentation) {
      return totalPrice - totalBenefitPrice + 25000;
    }

    return totalPrice - totalBenefitPrice;
  }

  getBadge(totalBenefirPrice) {
    if (totalBenefirPrice < 5000) {
      return undefined;
    }
    if (totalBenefirPrice > 5000 && totalBenefirPrice < 10000) {
      return "별";
    }
    if (totalBenefirPrice > 10000 && totalBenefirPrice < 20000) {
      return "트리";
    }
    if (totalBenefirPrice > 20000) {
      return "산타";
    }
  }

  #isCheckUndefined(...rest) {
    const benefitList = [];
    rest.forEach((benefit) => {
      if (benefit) {
        benefitList.push(benefit);
      }
    });

    return benefitList;
  }

  #isChristmasDiscount() {
    let discount = 0;
    if (this.#date > 26) {
      return;
    }
    discount += 1000 + (this.#date - 1) * 100;

    return Event.modifyObj(`크리스마스 디데이 할인-${discount}`);
  }

  #isWeekDiscount() {
    let discount = 0;
    if (WEEKEND.includes(Number(this.#date))) {
      return Event.modifyObj(
        `주말 할인-${this.#calculateDiscount(discount, "main")}`
      );
    }

    return Event.modifyObj(
      `평일 할인-${this.#calculateDiscount(discount, "dessert")}`
    );
  }

  #isSpecialDiscount() {
    if (!SPECIAL.includes(Number(this.#date))) {
      return;
    }

    return Event.modifyObj(`특별 할인-${1000}`);
  }

  #isPresentationBenefit() {
    const presentation = this.isPresentation();
    if (presentation) {
      return Event.modifyObj(`증정 이벤트-${25000}`);
    }
  }

  #calculateDiscount(discount, category) {
    const menuList = this.getMenuList();
    menuList.forEach((menu) => {
      const finedMenu = ALL_MENU.find((item) => menu.name === item.name);
      finedMenu.category === category
        ? (discount += Number(menu.amount) * 2023)
        : discount;
    });

    return discount;
  }
}

export default Event;
