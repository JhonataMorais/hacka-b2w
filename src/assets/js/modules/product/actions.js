const Methods = {
    init() {
        if ( window.innerWidth <= 768 ) {
            Methods.structureMobile();
        }
    },

    structureMobile() {
        
        const id = window.location.search.split('=')[1];
        
    }
};

export default {
    init: Methods.init
}