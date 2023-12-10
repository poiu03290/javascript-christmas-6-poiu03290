class Event {
  static modifyObj(menu) {
    const obj = { name: "", count: 0 };

    const split = menu.split("-");
    obj["name"] = split[0];
    obj["count"] = split[1];

    return obj;
  }

  getMenuList(input) {
    const menuList = [];
    const split = input.split(",");
    split.map((menu) => {
      const temp = Event.modifyObj(menu);
      menuList.push(temp);
    });

    return menuList;
  }
}

export default Event;
