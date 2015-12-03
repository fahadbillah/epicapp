'use strict';

var main = {
	init: function() {
		var h = document.querySelector('body');
		h.innerHTML = h.innerHTML+'<h1>other file</h1>';
	}
};

main.init();