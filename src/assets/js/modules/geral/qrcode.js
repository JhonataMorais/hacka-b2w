const Methods = {
	init() {
        Methods.renderQrCode();
        
    },
    
    renderQrCode() {
        const footer = document.querySelector('footer');

        footer.innerHTML += '<a class="qrcode-link" href="/qrcode"><img src="/assets/img/qrcode.svg" height="30" width="30"></a>';

    }
};

export default {
	init: Methods.init,
}