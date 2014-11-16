YUI().use('node', 'node-event-simulate', function(Y) {
	var getTime = function () {
		var d = new Date();
		return d.toTimeString().substr(0, 8) + '.' + d.getMilliseconds();
	},
	clearStatus = function () {
		Y.all('h4>span').set('text', '');
	},
	centerK = function (e) {
		Y.one('#center>h4>span').set('text', getTime());
		//e.preventDefault();
		//e.stopImmediatePropagation();
	},
	innerK = function (e) {
		Y.one('#inner>h4>span').set('text', getTime());
	},
	outerK = function (e) {
		Y.one('#outer>h4>span').set('text', getTime());
	},
	containerK = function (e) {
		Y.one('#container>h4>span').set('text', getTime());
		return true;
	},
	bodyK = function (e) {
		Y.one('body>h4>span').set('text', getTime());
	};

	Y.all('button').each(function(b) {
		this.on('click', function (e){
			clearStatus();
		});
	});

	Y.one('#center').on('click', centerK);
	Y.one('#inner').on('click', innerK);
	Y.one('#outer').on('click', outerK);
	Y.one('#container').on('click', containerK);
	Y.one('body').on('click', bodyK);
});
