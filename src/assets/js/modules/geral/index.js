import NewsLetter from "./newsletter";
import Minicart from "./minicart";
import Login from "./login";
import Menu from "./menu";

const Methods = {
  init() {
    Login.init();
    NewsLetter.init();
    Minicart.init();
    Menu.init();
  }
};

export default {
  init: Methods.init
};
