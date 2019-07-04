const Methods = {
    init() {
        Methods.sliderBrands();
        
        if( window.innerWidth > 768 ) {
            Methods.thumbSlider();
        } else {
            Methods.slideMobile();
        }
    },

    sliderBrands() {
        $('.js--brands__list').slick({
            arrows: true,
            dots: false,
            slidesToShow: 5,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
                }
              }
            ]
        });
    },

    thumbSlider() {
        $("#show > ul.thumbs").slick({
            arrows: true,
            dots: false,
            vertical: true,
            slidesToShow: 3
        });
    },
    
    slideMobile() {
        const images = $('.slider-mobile');
        
        images.slick({
            arrows: false,
            dots: true
        });
    }
};
  
export default {
    init: Methods.init
};