'use strict';

var app = {
	name: 'Epic App',
	showHeader: function() {
		var h = document.querySelector('body');
		h.innerHTML = '<h1>'+this.name+'</h1>'+h.innerHTML;
	},
	init: function() {
		this.showHeader();
	}
};

app.init();