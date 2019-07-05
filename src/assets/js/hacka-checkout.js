import Checkout from './modules/checkout';

const Methods = {
    init() {
        Checkout.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
})