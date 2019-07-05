import Search from './search';
import Qrcode from './qrcode';

const Methods = {
  init() {
    Search.init(); 
    Qrcode.init();   
  }
};

export default {
  init: Methods.init
};
