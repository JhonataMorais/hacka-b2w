import getProducts from './getProducts';
import searchTerm from './searchTerm';

const Methods = {
    init() {
      getProducts.init();
      searchTerm.init();
    }
};

export default {
  init: Methods.init
};
