;(function($) {

	var defaults = {
		id: 'publicidad',
		container: 'body'
	}

	var AdBlockDetecter = function() {};

	AdBlockDetecter.prototype.isActive = function(options) {
		var options = $.extend({}, defaults, options);

		$(options.container).append($('<p>', {
			id: options.id
		}));

		var fakeAdDisplay = $('#publicidad').css('display');
		$('#'+options.id).remove();

		if(fakeAdDisplay === 'none') return true;
		else return false;
	};

	if(window.AdBlockDetecter === undefined) {
		window.AdBlockDetecter = new AdBlockDetecter();
	};

})(jQuery);