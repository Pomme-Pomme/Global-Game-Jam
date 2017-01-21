var LevelNineState = function(){};

console.log("LevelNineState");

LevelNineState.prototype = {
	preload: function(){
		console.log("preload level9");
	},
	create: function(){
		console.log("create level9");

		game.phaser_game.stage.backgroundColor = "#4488AA";

		game.phaser_game.input.mouse.capture = true;

		touchPad = new TouchPad(0,500);

		var scaling = 0.15;
		var rockHouse = new RockHouse(100,50,scaling);
		var redBoat = new RedBoat(100,100,scaling);
		var redBoat = new RedBoat(550,100,scaling);
		var redBoat = new RedBoat(600,250,scaling);
		var blueBoat = new BlueBoat(600,350,scaling);

		scaling = 0.3;
		var mountain = new Mountain(580,400,scaling);

		scaling = 0.1;
		var pinkCorail = new PinkCorail(550,150,scaling);
	},
	update: function(){
		touchPad.update();
	}
}