var LevelEightState = function(){};

console.log("LevelEightState");

LevelEightState.prototype = {
	preload: function(){
		console.log("preload level8");
	},
	create: function(){
		console.log("create level8");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		var scaling = 0.15;
		var redBoat = new RedBoat(170,100,scaling);
		var redBoat = new RedBoat(500,200,scaling);
		var redBoat = new RedBoat(250,300,scaling);

		scaling = 0.3;
		var mountain = new Mountain(150,150,scaling);
		var mountain = new Mountain(480,250,scaling);
		var mountain = new Mountain(230	,350,scaling);
	},
	update: function(){
		touchPad.update();
	}
}