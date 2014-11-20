document.onkeydown = function (e) {
	console.log(e);
	document.write('<br>');
	document.write('keyCode: ' + e.keyCode + '<br>');
	document.write('altKey: ' + e.altKey + '<br>');
	document.write('shiftKey: ' + e.shiftKey + '<br>');
	document.write('charCode: ' + e.charCode + '<br>');
	document.write('ctrlKey: ' + e.ctrlKey + '<br>');
	document.write('keyIdentifier: ' + e.keyIdentifier + '<br>');
	document.write('metaKey: ' + e.metaKey + '<br>');
	document.write('timeStamp: ' + e.timeStamp + '<br>');
	document.write('type: ' + e.type + '<br>');
};
