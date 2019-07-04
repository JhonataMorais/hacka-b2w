const Methods = {
    init() {
        if ( window.innerWidth <= 768 ) {
            Methods.structureMobile();
        }
    },

    structureMobile() {
        // Append title under the image
        const title = document.querySelector('.j-product__name');
        const wrapperImg = document.querySelector('.j-content__product--img');

        wrapperImg.appendChild(title);

        // Append all images the product

        const images = document.querySelectorAll('.j-content__product--img .thumbs img, #image-main');
        const wrapperImages = document.querySelector('#image');
        const allImages = document.createElement('ul');

        allImages.classList.add('slider-mobile');

        for ( let i = 0; i < images.length; i++ ) {
            allImages.appendChild(images[i]);
        }
        
        wrapperImages.appendChild(allImages);
    }
};

export default {
    init: Methods.init
}