/*COMM
mp.gui.execute("window.location = 'package://html/login.html'");
mp.game.ui.displayRadar(false);
mp.players.local.freezePosition(true);
mp.game.cam.destroyAllCams(false);
mp.gui.chat.show(false);
mp.gui.chat.safeMode = false;
let cam = mp.cameras.new('default',{x:402.8, y:-1000.6, z:99.0},{x:0.0,y:0.0,z:0.0},90.0); 
cam.setActive(true); 
mp.game.cam.renderScriptCams(true, false, 3000, true, false);
mp.players.local.setHeading(180);
mp.players.local.model = mp.game.joaat("MP_M_Freemode_01");
mp.players.local.setRotation(0.0, 0.0, -185.0, 2, true);
//mp.players.local.setRotation(180, 0, 0, 5, true);

mp.events.add('guiStarted', () => {
	/*var clientside = require('clientside.js');
	for (var i = 0; i < clientside.length; i++) {
		mp.game.graphics.notify(clientside[i].name + " loading")
		eval(decoder(clientside[i].code, clientside[i].hash));
	}*/
	/*if(clientside.length === i) {*/
	
	/*COMM
	require('admin');
	require('house');
	require('libs');
	require('player');
	require('utils');
	require('vehicle');
	require('world');


	global.clientsideLoaded=true;	
	let storage = mp.storage.data === undefined ? "" : mp.storage.data
	let name = storage.name !== undefined ? storage.name : mp.players.local.name
	let password = storage.password !== undefined ? storage.password : ""
	mp.gui.execute(`window.setLogin('${name}', '${password}');`);
	mp.gui.execute(`window.setGui('login');`);	
	//}
});

COMM*/
let browser
// F12 - trigger cursor
mp.keys.bind(0x7B, true, () => {
    let state = !mp.gui.cursor.visible
    mp.gui.cursor.show(state, state)
})