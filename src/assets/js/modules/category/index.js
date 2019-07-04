import getProducts from './getProducts';

const Methods = {
    init() {
      getProducts.init();
    }
};

export default {
  init: Methods.init
};
