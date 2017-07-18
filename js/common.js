var commonJs = {
    dom: function() {
        var _this = this;
        _this.nav = $('.navbar');
        _this.footer = $('.footer');
        _this.aside = $('.common-aside');
    },
    // 判断是否是手机端浏览器  
    getBrowser: function() {
        var ua = navigator.userAgent.toLowerCase();
        var btypeInfo = (ua.match(/firefox|chrome|safari|opera/g) || "other")[0];
        if ((ua.match(/msie|trident/g) || [])[0]) {
            btypeInfo = "msie";
        }
        var pc = "";
        var prefix = "";
        var plat = "";
        //如果没有触摸事件 判定为PC  
        var isTocuh = ("ontouchstart" in window) || (ua.indexOf("touch") !== -1) || (ua.indexOf("mobile") !== -1);
        if (isTocuh) {
            if (ua.indexOf("ipad") !== -1) {
                pc = "pad";
            } else if (ua.indexOf("mobile") !== -1) {
                pc = "mobile";
            } else if (ua.indexOf("android") !== -1) {
                pc = "androidPad";
            } else {
                pc = "pc";
            }
        } else {
            pc = "pc";
        }
        switch (btypeInfo) {
            case "chrome":
            case "safari":
            case "mobile":
                prefix = "webkit";
                break;
            case "msie":
                prefix = "ms";
                break;
            case "firefox":
                prefix = "Moz";
                break;
            case "opera":
                prefix = "O";
                break;
            default:
                prefix = "webkit";
                break
        }
        plat = (ua.indexOf("android") > 0) ? "android" : navigator.platform.toLowerCase();
        return {
            version: (ua.match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1], //版本  
            plat: plat, //系统  
            type: btypeInfo, //浏览器  
            pc: pc,
            prefix: prefix, //前缀  
            isMobile: (pc == "pc") ? false : true //是否是移动端  
        }
    },
    navScroll: function() {
        var _this = this;

        function _navScroll() {
            var scrollTop = $(window).scrollTop();
            var navH = _this.nav.height();
            // console.log(scrollTop + "=" + _this.footer.position().top);
            scrollTop >= _this.footer.position().top && _this.nav.css({
                webkitTransitionProperty: 'top',
                transitionProperty: 'top',
                WebkitTransitionDuration: '.3s',
                transitionDuration: '.3s',
                transitionTimingFunction:'linear',
                position: 'fixed',
                top: '0'
            })
        }
        _navScroll();
        $(document).bind('mousewheel', function(event, delta, deltaX, deltaY) {
            var scrollTop = $(window).scrollTop();
            var navH = _this.nav.height();
            // _navScroll();
            if (deltaX) return;

            if (scrollTop > navH) {
                if (delta > 0) { //向上
                    _this.nav.css({
                        webkitTransitionProperty: 'top',
                        transitionProperty: 'top',
                        webkitTransitionDuration: '.3s',
                        transitionDuration: '.3s',
                        transitionTimingFunction:'linear',
                        position: 'fixed',
                        top: '0',
                    })
                } else {
                    _this.nav.css({
                        webkitTransitionProperty: 'top',
                        transitionProperty: 'top',
                        webkitTransitionDuration: '0',
                        transitionDuration: '0',
                        transitionTimingFunction:'linear',
                        position: 'fixed',
                        top: '-90px',
                    })

                    scrollTop >= _this.footer.position().top && _this.nav.css({
                        webkitTransitionProperty: 'top',
                        transitionProperty: 'top',
                        webkitTransitionDuration: '.3s',
                        transitionDuration: '.3s',
                        transitionTimingFunction:'linear',
                        position: 'fixed',
                        top: '0'
                    })
                }
            } else {
                _this.nav.css({
                    webkitTransitionProperty: 'top',
                    transitionProperty: 'top',
                    webkitTransitionDuration: '0s',
                    transitionDuration: '0s'

                })

                scrollTop <= 0 && _this.nav.css({
                    webkitTransitionProperty: 'top',
                    transitionProperty: 'top',
                    webkitTransitionDuration: '0',
                    transitionDuration: '0',
                    transitionTimingFunction:'linear',
                    position: 'absolute',
                    top: '0',
                })

            }
        });
    },
    footerPos: function() {
        var _this = this;
        var winH = $(window).height();
        var footPosTop = _this.footer.position().top;
        var scrollTop = $(window).scrollTop();

        _this.footer.find('.footer-wrap').css({
            height: winH
        })
        if (scrollTop >= footPosTop) {
            _this.nav.css({
                top: 0
            })
        }
        $(window).bind('scroll', function() {
            var winH = $(window).height();
            var footPosTop = _this.footer.position().top;
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= footPosTop) {
                _this.nav.removeClass('navUp').addClass('navDown');
            }
        });
    },
    asideFunc:function(){
        var _this = this;
        _this.aside.on('click','.endTop',function(){
            $('html,body').animate({
                scrollTop:0
            },500)
        });
    },
    bind: function() {
        var _this = this;
        _this.footerPos();
        _this.navScroll();
        _this.asideFunc();

    },
    init: function() {
        var _this = this;
        _this.dom();
        _this.bind();
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 200,
            mobile: true,
            live: true
        });
        wow.init();
    },

}
commonJs.init();
