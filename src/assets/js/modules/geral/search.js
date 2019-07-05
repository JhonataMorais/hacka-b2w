const Methods = {
	init() {
        Methods.sendSearch();
        
    },
    
    sendSearch() {
        const form = document.querySelector('#form-search');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const searchTerm = document.querySelector('#input-search');
            const url = `/search?ft=${searchTerm.value}`;

            window.location = url;
        });
    }
};

export default {
	init: Methods.init,
}