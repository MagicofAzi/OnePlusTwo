var menubar = require('menubar');
var Menu = require('electron').Menu;

var mb = menubar({
	width: 300,
	height: 520,
	tooltip: "1+2",
	resizable: false,
	transparent: true,
});

mb.on('ready', function ready () {
	// When the tray is clicked and the control key is held down.
	mb.tray.on('click', (e, bounds) => {
		if(e.ctrlKey === true) {
			mb.app.quit();
		}
	})
});