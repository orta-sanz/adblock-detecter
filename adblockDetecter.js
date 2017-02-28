;(function() {

	var defaults = {
		class: 'framead',
		container: 'body'
	}

	var AdBlockDetecter = function() {}

	AdBlockDetecter.prototype.isActive = function(params) {
		var options = params
			? {
				class: params.class ? params.class : defaults.class,
				container : params.container ? params.container : defaults.container
			  }
			: defaults

		var fakeAd = document.createElement('P')
		fakeAd.className = options.class

		var container = document.getElementsByTagName(options.container)[0]
		container.appendChild(fakeAd)

		var fakeAdStyle = window.getComputedStyle(document.getElementsByClassName(options.class)[0])

		return fakeAdStyle.getPropertyValue('display') === 'none'
	};

	if(window.AdBlockDetecter === undefined) {
		window.AdBlockDetecter = new AdBlockDetecter()
	}
})()
