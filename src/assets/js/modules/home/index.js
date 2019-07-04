const Methods = {
  init() {
    Methods.bannerMain();
    Methods.bannerBrands();

    if ( window.innerWidth <= 768) {
      Methods.slidesMobile();
    }
  },

  bannerMain() {

    $(".j-banner__slider").slick({
      arrows: false,
      dots: true
    });
  },

  slidesMobile() {

     $('.j-list__departments-mobile').slick({
      arrows: true,
      dots: false,
      slidesToShow: 3
    });
  },

  bannerBrands() {

    $(".js--brands__list").slick({
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
  }
};

export default {
  init: Methods.init
};
