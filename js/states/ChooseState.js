var ChooseState = function(){};

console.log("ChooseState");

ChooseState.prototype = {
	preload: function(){
		console.log("preload Choose");
	},
	create: function(){
		console.log("create Choose");

		game.phaser_game.add.tileSprite(0, 0, 800, 600, 'menu');

	    buttonLevel1 = game.phaser_game.add.button(50, 220, 'buttonPlay', actionOnClickLevel1, this, 1, 0, 2);
	    buttonLevel2 = game.phaser_game.add.button(320, 220, 'buttonPlay', actionOnClickLevel2, this, 1, 0, 2);
	    buttonLevel3 = game.phaser_game.add.button(600, 220, 'buttonPlay', actionOnClickLevel3, this, 1, 0, 2);

	    buttonLevel4 = game.phaser_game.add.button(50, 360, 'buttonPlay', actionOnClickLevel4, this, 1, 0, 2);
	    buttonLevel5 = game.phaser_game.add.button(320, 360, 'buttonPlay', actionOnClickLevel5, this, 1, 0, 2);
	    buttonLevel6 = game.phaser_game.add.button(600, 360, 'buttonPlay', actionOnClickLevel6, this, 1, 0, 2);

	    buttonLevel7 = game.phaser_game.add.button(50, 510, 'buttonPlay', actionOnClickLevel7, this, 1, 0, 2);
	    buttonLevel8 = game.phaser_game.add.button(320, 510, 'buttonPlay', actionOnClickLevel8, this, 1, 0, 2);
	    buttonLevel9 = game.phaser_game.add.button(600, 510, 'buttonPlay', actionOnClickLevel9, this, 1, 0, 2);

		//this.music = {};
		// this.intro = game.phaser_game.add.audio('musicIntroMenu');
		// this.core = game.phaser_game.add.audio('musicLoopMenu');
		// this.core.loop = true;
		// console.log("this.core: ",this.core);
		// console.log("this.intro: ",this.intro);
		// this.intro.play();
		// this.intro.onStop.add(function (obj) {obj.play();}, this.core);
		// console.log("this.intro: ",this.intro);
		//this.intro.stop();
		this.music = game.phaser_game.add.audio('musicIntro');
		this.music.play();

	},

	update: function(){

		var scaling = 0.15;
		
		if(game.finishedLevels[0]){
			var laurier = new Laurier(0,240,scaling);
			var laurier = new Laurier(200,240,scaling);
		}
		if(game.finishedLevels[1]){
			var laurier = new Laurier(265,240,scaling);
			var laurier = new Laurier(470,240,scaling);
		}
		if(game.finishedLevels[2]){
			var laurier = new Laurier(545,240,scaling);
			var laurier = new Laurier(750,240,scaling);
		}
		if(game.finishedLevels[3]){
			var laurier = new Laurier(0,380,scaling);
			var laurier = new Laurier(200,380,scaling);
		}
		if(game.finishedLevels[4]){
			var laurier = new Laurier(265,380,scaling);
			var laurier = new Laurier(470,380,scaling);
		}
		if(game.finishedLevels[5]){
			var laurier = new Laurier(545,380,scaling);
			var laurier = new Laurier(750,380,scaling);
		}
		if(game.finishedLevels[6]){
			var laurier = new Laurier(0,530,scaling);
			var laurier = new Laurier(200,530,scaling);
		}
		if(game.finishedLevels[7]){
			var laurier = new Laurier(265,530,scaling);
			var laurier = new Laurier(470,530,scaling);
		}
		if(game.finishedLevels[8]){
			var laurier = new Laurier(545,530,scaling);
			var laurier = new Laurier(750,530,scaling);
		}

	}

	// kill: function() {
	// 	this.music.intro.stop();
	// 	this.music.core.stop();
	// }
}

// ChooseState.prototype.kill = {
//
// }

function actionOnClickLevel1 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

if(game.finishedLevels[0]){
		game.phaser_game.state.start("levelOneState");
	}else{
		game.phaser_game.state.start("levelOneTutorialState");
	}
	
    
}

function actionOnClickLevel2 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelTwoState");
}

function actionOnClickLevel3 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelThreeState");
}

function actionOnClickLevel4 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelFourState");
}

function actionOnClickLevel5 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelFiveState");
}

function actionOnClickLevel6 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelSixState");
}

function actionOnClickLevel7 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelSevenState");
}

function actionOnClickLevel8 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelEightState");
}
function actionOnClickLevel9 () {

	// this.intro.stop();
	// this.core.stop();
	this.music.stop();

    game.phaser_game.state.start("levelNineState");
}


