var searchCtrl = {
    dom: function() {
        var _this = this;
        _this.sHistory = $('.search-history');
        _this.sRecommend = $('.search-recommend');
    },
    bind: function() {
        var _this = this;
        _this.sHistory.on('click', '.btn-del', function() {
            _this.sHistory.find('.list li').remove();
            _this.sHistory.find('.tip').show();
        });
        _this.sRecommend.on('click', '.btn-ctrl', function() {
        	var $this = $(this);
        	var $list = _this.sRecommend.find('.list');
        	var $tip = _this.sRecommend.find('.tip');
        	if($this.hasClass('hide')){
        		$list.show();
        		$tip.hide();
        		$this.removeClass('hide').text('隐藏');

        	}else{
        		$list.hide();
        		$tip.show();
        		$this.addClass('hide').text('显示');

        	}
        	
        });
    },
    init: function() {
        var _this = this;
        _this.dom();
        _this.bind();
    }
};
searchCtrl.init();