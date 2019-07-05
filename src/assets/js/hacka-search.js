import Category from './modules/search';

const Methods = {
    init() {
        Category.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
})