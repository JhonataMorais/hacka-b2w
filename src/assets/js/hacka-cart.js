import Cart from './modules/cart';

const Methods = {
    init() {
        Cart.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
})