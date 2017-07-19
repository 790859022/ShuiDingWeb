var shopCtrl = {
    dom: function() {
        var _this = this;
    },
    bind: function() {
        var _this = this;
    },
    init: function() {
        var _this = this;
        _this.dom();
        _this.bind();


        var swiperShopB = new Swiper('.shop-banner', {
            pagination: '.shop-banner .swiper-pagination',
            paginationClickable: true
        });
        var swiperShopTab = new Swiper('.shop-tab', {
            pagination: '.i-tabList .tab .swiper-pagination',
            paginationClickable: true,
            slidesPerView: 4,
            spaceBetween: 0,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                320: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            }
        });
        var swiperListTab = new Swiper('.shop-typeList .tab', {
            slidesPerView: 3.2,
            paginationClickable: true,
            spaceBetween: 0,
            freeMode: true
        });
    }
};
shopCtrl.init();