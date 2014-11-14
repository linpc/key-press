YUI().use('node', 'node-event-simulate', function(Y) {
	var isSwitchOption = function (e) {
		return ((!e.ctrlKey && e.altKey && e.shiftKey) === true && e.keyCode === 79);
	}

	var switchMode = 0;
	var processSwitch = function (e) {
		if (isSwitchOption(e) === true) {
			switchMode = (switchMode + 1) % 2;
		}
		Y.one('#mode').set('text', switchMode);
	}

	var ck = function (e) {

		processSwitch(e);
		if (switchMode == 0) {
			return;
		}

		var kstr = '<tr>';
		kstr += ('<td>' + Date().substr(4, 20) + '</td>');
		kstr += ('<td>' + ((e.ctrlKey === true) ? 'o' : '&nbsp') + '</td>');
		kstr += ('<td>' + ((e.altKey === true) ? 'o' : '&nbsp') + '</td>');
		kstr += ('<td>' + ((e.shiftKey === true) ? 'o' : '&nbsp') + '</td>');
		kstr += ('<td>' + ((e.metaKey === true) ? 'o' : '&nbsp') + '</td>');
		kstr += ('<td>' + ((e.metaKey === true && e.keyCode === 91) ? 'o' : '&nbsp') + '</td>');
		kstr += ('<td>' + ((e.metaKey === true && e.keyCode === 93) ? 'o' : '&nbsp') + '</td>');
		kstr += ('<td>' + e.keyCode + '</td>');
		kstr += '</tr>';

		Y.one('#console table tbody').prepend(kstr);
		e.preventDefault();
		e.stopImmediatePropagation();
	}

	Y.one('body').on('keydown', ck);
});
