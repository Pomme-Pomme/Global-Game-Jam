var LevelOneTutorialState = function(){};

console.log("LevelOneTutorialState");

LevelOneTutorialState.prototype = {
	preload: function(){
		console.log("preload tuto");
	},
	create: function(){

		game.phaser_game.add.tileSprite(0, 0, 800, 600, 'tuto');
		
		console.log("create tuto");
		
		game.phaser_game.input.mouse.capture = true;
	},
	update: function(){
		
		if(game.phaser_game.input.activePointer.leftButton.isDown){
			game.phaser_game.state.start("levelOneState");
		}
		
	}
}

function actionOnClickNextStory () {
    game.phaser_game.state.start("chooseState");
}