var indexCtrl = {
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

        var swiperTopB = new Swiper('.i-banner', {
            pagination: '.i-banner .swiper-pagination',
            paginationClickable: true
        });
        var swiperTabList = new Swiper('.i-tabList .tab', {
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

        var swiperSH = new Swiper('.sh-swiper', {
            slidesPerView: 2.5,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
        });
        var swiperGZ = new Swiper('.gz-swiper', {
            slidesPerView: 2.5,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
        });
        var swiperJK = new Swiper('.jk-swiper', {
            slidesPerView: 2.5,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
        });
        var swiperJR = new Swiper('.jr-swiper', {
            slidesPerView: 2.5,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
        });

    }
}
indexCtrl.init();