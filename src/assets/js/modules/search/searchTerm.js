const Methods = {
    init() {
        Methods.setTerm();
    },

    setTerm() {
        const title = document.querySelector('.search-term');
        const searchTerm = window.location.search.split('=')[1].replace(/%20/g, ' ');
        title.innerHTML = searchTerm;
    }
};

export default {
    init: Methods.init,
}