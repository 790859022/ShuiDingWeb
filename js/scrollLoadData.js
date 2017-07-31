;
(function() {
	function _scrollLoadData(settings) {
		var _this = this;
		var _settings = {
			scrollContainer: window,
			container: '',
			currentPage: 1,
			items: 10,
			waitText: '更多数据',
			loadedText: '<span class="icon"></span>没有更多了...',
			requestData: function(page, rows) {

			}
		};

		_this.settings = $.extend({}, _settings, settings);

		_this.scrollContainer = $(_this.settings.scrollContainer);
		_this.container = $(_this.settings.container);
		_this.waitLayer = $('<div></div>', {
			'class': 'scroll-load-wait'
		}).html(_this.settings.waitText);

		_this.container.css({
			marginBottom: '10px'
		});
		_this.waitLayer.css({
			fontSize: '12px',
			lineHeight: '2em',
			color: '#999',
			textAlign: 'center',
			background: '#fff',
			padding: '10px 0'
		});

		_this.appendWait();
		_this.scroll();
	}
	_scrollLoadData.prototype = {
		appendWait: function() {
			var _this = this;
			_this.container.after(_this.waitLayer);
		},
		request: function() {
			var _this = this;

			_this.settings.requestData && _this.settings.requestData(_this.settings.currentPage, _this.settings.pageRows, function(data) {
				_this.settings.currentPage++;

				if (data) {
					_this.settings.loaded = true;
					_this.waitLayer.html(_this.settings.waitText);

					//初始化是如果加载数据条目过少，则需要请求多次
					//例：初始化加载 1 条数据，完成后高度不够一屏幕无法触发滚动，就无法实现滚动加载，因此需要判断加载后是否还要自动加载
					//注：目前此滚动加载有个问题：无法得知图片是否加载完成，由于图片有占位高可能导致初始load 2 次
					_this.loadFunc();

				} else {
					data == null ? _this.waitLayer.hide() : _this.waitLayer.html(_this.settings.loadedText);
				}
			});

		},
		loadFunc: function() {
			var _this = this;
			var _winH = _this.scrollContainer.outerHeight(true) + _this.scrollContainer.offset().top;
			var _scrollTop = _this.scrollContainer.scrollTop();
			var _waitLayerTop = _this.waitLayer.offset().top;

			if (_winH > (_waitLayerTop + _this.waitLayer.outerHeight(true) - 10)) {
				_this.settings.loaded = false;
				_this.waitLayer.html('加载中...');
				_this.request();
			}
		},
		scroll: function() {
			var _this = this;

			_this.settings.loaded = true;
			_this.loadFunc();
			_this.scrollContainer.bind('scroll', function() {
				_this.settings.loaded && _this.loadFunc();

			});
		}
	};

	window.scrollLoadData = function(settings) {
		if (!settings) throw Error('参数为空');
		if (!settings.container) throw Error('参数 container 为空');
		new _scrollLoadData(settings);
	};
})(window);



//使用方法
scrollLoadData({
	container: '.user-collect dl',
	currentPage: 1,
	pageRows: 10,
	requestData: function(currentPage, pageRows, callback) {
		// currentPage 当前加载的页码
		// pageRows 每页加载多少条
		// callback 加载完成后的回调函数
		// callback 说明：由于加载新数据为动态加载ajax，是用户自定义方法并非组件内部ajax无法控制；保证在数据请求过程中不能再次请求发送请求，callback内包含参数的值为true/false/null;
		// true 表示仍有数据，false 表示没有可加载数据 null 表示没有一条数据

		//ajax请求函数
		pageLoad(currentPage, pageRows, callback);
	}

});

function pageLoad(page, rows, callback) {
	var _this = this;

	var userUrl = basePath + "/userBrowsHis/list";
	$.ajax({
		url: '',
		type: '',
		data: {},
		dataType: ''
	}).done(function(data) {
		if (data == null || data.code != "100") {
			//console.log(data.message);
		} else {
			if (data.message.length == 0 && page == 1) {
				$(".noData").show();
			} else if (data.message.length == 0) {
				callback(false);
				//没有更多了
			} else {
				$(".noData").hide();
				callback(true);
			}
		}

	}).fail(function(e) {});
}