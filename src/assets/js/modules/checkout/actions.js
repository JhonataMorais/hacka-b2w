const Methods = {
    init() {
        Methods.accordion();
    },

    accordion() {
        const btns = document.querySelectorAll('.open-tab');

        for ( var i = 0; i < btns.length; i++ ) {
            btns[i].addEventListener('click', (ev) => {
                const that = ev.currentTarget;

                that.parentNode.querySelector('.tab').classList.toggle('active');
            });
        }
    }
}

export default {
    init: Methods.init
}