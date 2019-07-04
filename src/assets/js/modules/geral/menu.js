const Methods = {
	init() {
        if ( window.innerWidth <= 768 ) {
            Methods.open();
            Methods.close();
        }        
    },
    
    cacheSelector: {
        menu: document.querySelector('.j-header__menu'),
        btnOpen: document.querySelector('.j-hamburguer'),
        btnClose: document.querySelector('.js--close-menu')
    },

    open() {
        const btn = Methods.cacheSelector.btnOpen;
        const menu = Methods.cacheSelector.menu;

        btn.addEventListener('click', () => {
            menu.classList.add('is--active');
        });
    },

    close() {
        const btn = Methods.cacheSelector.btnClose;
        const menu = Methods.cacheSelector.menu;

        btn.addEventListener('click', () => {
            menu.classList.remove('is--active');
        });
    }
};

export default {
	init: Methods.init,
}