;(function() {

	var defaults = {
		id: 'publicidad',
		container: 'body'
	}

	var AdBlockDetecter = function() {};

	AdBlockDetecter.prototype.isActive = function(params) {
		var options = params
			? {
				id: params.id ? params.id : defaults.id,
				container : params.container ? params.container : defaults.container
			  }
			: defaults;

		var fakeAd = document.createElement('P');
		fakeAd.id = options.id;

		var container = document.getElementsByTagName(options.container);
		container[0].appendChild(fakeAd);

		var fakeAdStyle   = window.getComputedStyle(document.getElementById(options.id));
		var fakeAdDisplay = fakeAdStyle.getPropertyValue('display');

		if(fakeAdDisplay === 'none') return true;
		else return false;
	};

	if(window.AdBlockDetecter === undefined) {
		window.AdBlockDetecter = new AdBlockDetecter();
	};
})();
