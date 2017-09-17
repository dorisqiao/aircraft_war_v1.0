/*----------------Global variables------------------*/
var canvasWidth = 480;
var canvasHeight = 650;
var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

const PHASE_DOWNLOAD = 1;
const PHASE_READY = 2;
const PHASE_LOADING = 3;
const PHASE_PLAY = 4;
const PHASE_PAUSE = 5;
const PHASE_GAMEOVER = 6;

/*---------------variables about the images-----------*/
var imgBackground;
var imgBullet1;
var imgStart;
var imgGamePauseNor;
var imgsEnemy1 = [];
var imgsEnemy2 = [];
var imgsEnemy3 = [];
var imgsGameLoading = [];
var imgsHero = [];

/*---------------PHASE_DOWNLOAD-----------*/
var curPhase = PHASE_DOWNLOAD;
downLoad();
function downLoad(){
	var progress = 0;
	ctx.font='80px Helvetica';
	ctx.fillStyle="#eee";
	function drawProgress(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var w=ctx.measureText(progress+'%').width;
		ctx.fillText(progress+'%',canvasWidth*0.5-w*0.5,canvasHeight*0.5+40);
		ctx.strokeText(progress+'%',canvasWidth*0.5-w*0.5,canvasHeight*0.5+40);

		ctx.strokeRect(canvasWidth*0.5-50,canvasHeight*0.5+100,100,10);
		ctx.fillStyle="#aaa";
		ctx.fillRect(canvasWidth*0.5-50,canvasHeight*0.5+100,progress,10);

		if (progress>=100)
		{
			startGame();
		}
	}

	imgBackground=new Image();
	imgBackground.src='img/background.png';
	imgBackground.onload=function(){
		progress+=4;
		drawProgress();
	};

	imgBullet1=new Image();
	imgBullet1.src='img/Bullet1.png';
	imgBullet1.onload=function(){
		progress+=3;
		drawProgress();
	};

	imgGamePauseNor=new Image();
	imgGamePauseNor.src='img/game_pause_nor.png';
	imgGamePauseNor.onload=function(){
		progress+=3;
		drawProgress();
	};

	imgStart=new Image();
	imgStart.src='img/start.png';
	imgStart.onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy1[0]=new Image();
	imgsEnemy1[0].src='img/enemy1.png';
	imgsEnemy1[0].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy1[1]=new Image();
	imgsEnemy1[1].src='img/enemy1_down1.png';
	imgsEnemy1[1].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy1[2]=new Image();
	imgsEnemy1[2].src='img/enemy1_down2.png';
	imgsEnemy1[2].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy1[3]=new Image();
	imgsEnemy1[3].src='img/enemy1_down3.png';
	imgsEnemy1[3].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy1[4]=new Image();
	imgsEnemy1[4].src='img/enemy1_down4.png';
	imgsEnemy1[4].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy2[0]=new Image();
	imgsEnemy2[0].src='img/enemy2.png';
	imgsEnemy2[0].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy2[1]=new Image();
	imgsEnemy2[1].src='img/enemy2_down1.png';
	imgsEnemy2[1].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy2[2]=new Image();
	imgsEnemy2[2].src='img/enemy2_down2.png';
	imgsEnemy2[2].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy2[3]=new Image();
	imgsEnemy2[3].src='img/enemy2_down3.png';
	imgsEnemy2[3].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy2[4]=new Image();
	imgsEnemy2[4].src='img/enemy2_down4.png';
	imgsEnemy2[4].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[0]=new Image();
	imgsEnemy3[0].src='img/enemy3_n1.png';
	imgsEnemy3[0].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[1]=new Image();
	imgsEnemy3[1].src='img/enemy3_n2.png';
	imgsEnemy3[1].onload=function(){
		progress+=3;
		drawProgress();
	};
	
	imgsEnemy3[2]=new Image();
	imgsEnemy3[2].src='img/enemy3_hit.png';
	imgsEnemy3[2].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[3]=new Image();
	imgsEnemy3[3].src='img/enemy3_down1.png';
	imgsEnemy3[3].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[4]=new Image();
	imgsEnemy3[4].src='img/enemy3_down2.png';
	imgsEnemy3[4].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[5]=new Image();
	imgsEnemy3[5].src='img/enemy3_down3.png';
	imgsEnemy3[5].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[6]=new Image();
	imgsEnemy3[6].src='img/enemy3_down4.png';
	imgsEnemy3[6].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[7]=new Image();
	imgsEnemy3[7].src='img/enemy3_down5.png';
	imgsEnemy3[7].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsEnemy3[8]=new Image();
	imgsEnemy3[8].src='img/enemy3_down6.png';
	imgsEnemy3[8].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsGameLoading[0]=new Image();
	imgsGameLoading[0].src='img/game_loading1.png';
	imgsGameLoading[0].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsGameLoading[1]=new Image();
	imgsGameLoading[1].src='img/game_loading2.png';
	imgsGameLoading[1].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsGameLoading[2]=new Image();
	imgsGameLoading[2].src='img/game_loading3.png';
	imgsGameLoading[2].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsGameLoading[3]=new Image();
	imgsGameLoading[3].src='img/game_loading4.png';
	imgsGameLoading[3].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsHero[0]=new Image();
	imgsHero[0].src='img/hero1.png';
	imgsHero[0].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsHero[1]=new Image();
	imgsHero[1].src='img/hero2.png';
	imgsHero[1].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsHero[2]=new Image();
	imgsHero[2].src='img/hero_blowup_n1.png';
	imgsHero[2].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsHero[3]=new Image();
	imgsHero[3].src='img/hero_blowup_n2.png';
	imgsHero[3].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsHero[4]=new Image();
	imgsHero[4].src='img/hero_blowup_n3.png';
	imgsHero[4].onload=function(){
		progress+=3;
		drawProgress();
	};

	imgsHero[5]=new Image();
	imgsHero[5].src='img/hero_blowup_n4.png';
	imgsHero[5].onload=function(){
		progress+=3;
		drawProgress();
	};
}

/*---------------PHASE_READY-----------*/
var sky;
var logo;

function startGame(){
	curPhase = PHASE_READY;
	sky = new Sky(imgBackground);
	logo = new Logo(imgStart);
	startEngine();

	canvas.onclick = function(){
		if (curPhase === PHASE_READY)
		{
			curPhase = PHASE_LOADING;
			loading = new Loading(imgsGameLoading);
		}
	};
}

function Sky(img){
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	this.y2 = -img.height;

	this.draw = function(){//draw the sky
		ctx.drawImage(img,this.x1,this.y1);
		ctx.drawImage(img,this.x2,this.y2);
	};

	this.move = function(){
		this.y1 += 1;
		this.y2 += 1;
		if (this.y1 >= canvasHeight)
		{
			this.y1 = this.y2 - img.height;
		}
		if (this.y2 >= canvasHeight)
		{
			this.y2 = this.y1 - img.height;
		}
	};
}

function Logo(img){
	this.x = canvasWidth/2 - img.width/2;
	this.y=0;
	this.draw = function(){
		ctx.drawImage(img,this.x,this.y);
	};
}

/*---------------PHASE_LOADING-----------*/
var loading;

function Loading(imgs){
	this.x = 0;
	this.y = canvasHeight - imgs[0].height;
	this.index = 0;//current image to draw
	this.draw = function(){
		ctx.drawImage(imgs[this.index], this.x,this.y);
	};
	this.counter = 0;
	this.move = function(){
		this.counter ++;
		if (this.counter%6 === 0)
		{
			this.index++;
			if (this.index >= imgs.length)
			{
				curPhase = PHASE_PLAY;
				hero = new Hero(imgsHero);
				bulletList = new BulletList();
				enemyList = new EnemyList();
			}
		}
	};
}

/*---------------PHASE_PLAY-----------*/
var hero;
var heroCount=3;
var heroScore=0;

//the hero constructor
function Hero(imgs){
	//the initial position of the hero is on middle of the bottom
	this.x = canvasWidth*0.5 - imgs[0].width*0.5;
	this.y = canvasHeight - imgs[0].height;
	this.width = imgs[0].width;
	this.height = imgs[0].height;
	this.index = 0;
	this.draw = function(){
		ctx.drawImage(imgs[this.index], this.x,this.y);
	};
	this.counter = 0;
	this.crashed = false;
	this.move = function(){
		this.counter ++;
		if (this.counter%2===0)
		{	
			if (!this.crashed)
			{
				if (this.index===0)
				{
					this.index=1;
				}else if (this.index===1)
				{
					this.index=0;
				}
			}else{//start crash
				if(this.index === 0 || this.index === 1) this.index = 2;
				else if(this.index < imgs.length - 1) this.index ++;
				else{
					//crash end
					heroCount --;
					if(heroCount > 0){hero = new Hero(imgsHero);}
					else {
						curPhase = PHASE_GAMEOVER;
					}
				}
			}
			
		}
		if (this.counter%5 === 0) {this.fire();}
	};
	this.fire = function(){
		var b = new Bullet(imgBullet1);
		bulletList.add(b);
	};
}

canvas.onmousemove = function(e){
	if (curPhase === PHASE_PLAY)
	{
		var x = e.offsetX;
		var y = e.offsetY;
		hero.x = x - imgsHero[0].width/2;
		hero.y = y - imgsHero[0].height/2;
	}
};

var bulletList;

//bullet constructor
function Bullet(img){
	//initial position of the bullet
	this.x = hero.x + (imgsHero[0].width*0.5 - img.width*0.5);
	this.y = hero.y - img.height;
	this.width = img.width;
	this.height = img.height;
	this.removable = false;
	this.draw = function(){
		//console.log(this.x,this.y);
		ctx.drawImage(img, this.x,this.y);
	};
	this.move = function(){
			this.y -= 7;
			if (this.y <= -img.height)
			{
				this.removable = true;
			}
	};
}

//bulletList constructor
function BulletList(){
	this.arr = [];
	this.add = function(bullet){
		this.arr.push(bullet);
	};
	this.remove = function(i){
		this.arr.splice(i,1);
	};
	this.draw = function(){
		for (var i in this.arr)
		{
			this.arr[i].draw();
		}
	};
	this.move = function(){
		for (var i in this.arr)
		{
			this.arr[i].move();
			if (this.arr[i].removable)
			{
				this.remove(i);
			}
		}
	};
}

//Enemy1 constructor
function Enemy1(imgs){
	this.x = Math.random()*(canvasWidth - imgs[0].width);
	this.y = -imgs[0].height;
	this.width = imgs[0].width;
	this.height= imgs[0].height;
	this.index = 0;
	this.speed = 7;//Enemy1 speed
	this.removable = false;//whether to remove
	this.blood = 1;//Enemy1 blood
	this.draw = function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	};
	this.counter = 0;
	this.move = function(){
		this.y += this.speed;
		this.checkHit();
		this.counter ++;
		if (this.counter%2 === 0 && this.crashed)
		{
			if (this.index === 0) this.index = 1;
			else if (this.index < imgs.length-1) this.index ++;
			else this.removable = true;
		}
		if (this.y >= canvasHeight)
		{
			this.removable = true;
		}
	};
	this.crashed = false;
	//check hit
	this.checkHit = function(){
		/* 
		each enemy must be checked if hit the hero
		the conditions of hit:
		object1's abscissa + object1's width >= object2's abscissa
		object2's ordinate + object2's height >= object1's abscissa
		object1's ordinate + object1's height >= object2's ordinate
		object2's ordinate + object2's height >= object2's ordinate
		*/
		for ( var i in bulletList.arr )
		{
			var b=bulletList.arr[i];
			if (
			    (this.x + this.width >= b.x)&&
                (this.y + this.height >= b.y)&&
                (b.x + b.width >= this.x)&&
                (b.y + b.height >= this.y)
            ){
				this.blood --;
				if(this.blood <= 0) {
					this.crashed = true;
				}else{
					b.removable = true;
					heroScore += 3;
				}
			}
		}
		//each enemy must be checked if hit the hero
		if (
		    (this.x + this.width >= hero.x)&&
            (hero.x + hero.width >= this.x)&&
            (this.y + this.height >= hero.y)&&
            (hero.y + hero.height >= this.y)
        ){
			hero.crashed = true;
		}
	};
}

//Enemy2 constructor
function Enemy2(imgs){
	this.x = Math.random()*(canvasWidth - imgs[0].width);
	this.y = -imgs[0].height;
	this.width = imgs[0].width;
	this.height = imgs[0].height;
	this.index = 0;
	this.speed = 4;
	this.removable = false;
	this.blood = 4;
	this.draw = function(){
		ctx.drawImage(imgs[this.index], this.x,this.y);
	};
	this.counter=0;
	this.move = function(){
		this.y += this.speed;
		this.checkHit();
		this.counter++;
		if (this.counter%2 === 0 && this.crashed) {
			if (this.index === 0) this.index = 1;
			else if (this.index < imgs.length-1) this.index ++;
			else this.removable = true;
		}
		if (this.y >= canvasHeight) {
			this.removable = true;
		}
	};
	this.crashed = false;
	//check hit
	this.checkHit = function(){
		for ( var i in bulletList.arr ){
			var b = bulletList.arr[i];
			if (
			    (this.x + this.width >= b.x)&&
                (this.y + this.height >= b.y)&&
                (b.x + b.width >= this.x)&&
                (b.y + b.height >= this.y)
            ){
				this.blood --;
				if(this.blood <= 0){
					this.crashed = true;
				}else{
					b.removable = true;
					heroScore += 5;
				}
			}
		}
		if (
		    (this.x + this.width >= hero.x)&&
            (hero.x + hero.width >= this.x)&&
            (this.y + this.height >= hero.y)&&
            (hero.y + hero.height >= this.y)
        ) {
			hero.crashed = true;//hero crash
		}
	};
}

//Enemy3 constructor
function Enemy3(imgs){
	this.x = Math.random()*(canvasWidth - imgs[0].width);
	this.y = -imgs[0].height;
	this.width = imgs[0].width;
	this.height = imgs[0].height;
	this.index = 0;
	this.speed = 2;
	this.removable = false;
	this.blood = 15;
	this.crashed = false;
	this.draw = function(){
		ctx.drawImage(imgs[this.index], this.x, this.y);
	};
	this.counter = 0;
	this.move = function(){
		this.checkHit();
		this.counter ++;
		this.y += this.speed;
		if (this.counter%2 === 0){
			if (!this.crashed){
				if (this.index === 0) this.index = 1;
				else if (this.index === 1) this.index = 0;
			}else{
				if(this.index === 0 || this.index === 1) this.index = 3;
				else if(this.index < imgs.length - 1) this.index++;
				else this.removable = true;
			}
		}
		if (this.y >= canvasHeight){
			this.removable = true;
		}
	};
	this.crashed = false;
	//check hit
	this.checkHit = function(){
		for ( var i in bulletList.arr ){
			var b = bulletList.arr[i];
			if (
			    (this.x + this.width >= b.x)&&
                (this.y + this.height >= b.y)&&
                (b.x + b.width >= this.x)&&
                (b.y + b.height >= this.y)
            ){
				this.blood--;
				if(this.blood <=0 ){
					this.crashed = true;
				}else{
					b.removable = true;
					heroScore += 10;
				}
			}
		}
		if (
		    (this.x + this.width >= hero.x)&&
            (hero.x + hero.width >= this.x)&&
            (this.y + this.height >= hero.y)&&
            (hero.y + hero.height >= this.y)
        ){
			hero.crashed = true;
		}
	};
}

var enemyList;

//EnemyList constructor
function EnemyList(){
	this.arr = [];
	this.add = function(enemy){//add a enemy
		this.arr.push(enemy);
	};
	this.remove = function(i){//remove a enemy
		this.arr.splice(i,1);
	};
	this.draw = function(){
		for(var i in this.arr) {
			this.arr[i].draw();
		}
	};
	this.move = function(){//make enemy move
		this.generate();//generate a enemy
		for(var i in this.arr){
			var e = this.arr[i];
			e.move();
			if(e.removable) this.remove(i);
		}
	};
	//generate a random enemy
	this.generate = function(){
		/*
			1、random time to generate an enemy
			2、big probability to generate enemy1, medium probability to enemy2, small probability to enemy3
		*/
		var num = Math.floor(Math.random() * 250);

		if (num < 6) {
			this.add( new Enemy1(imgsEnemy1) );
		}else if (num < 9){
			this.add( new Enemy2(imgsEnemy2) );
		}else if (num < 10){
			this.add( new Enemy3(imgsEnemy3) );
		}

	};
}

//draw hero score function
function drawStat(){
	ctx.font = '25px Helvetica';
	ctx.fillStyle = '#333';

	var score = 'SCORE:' + heroScore;
	ctx.fillText(score, 10, 35);

	var heros = 'LIVES:' + heroCount;
	var w = ctx.measureText(heros).width;
	ctx.fillText(heros, canvasWidth-w-10, 35);
}

/*---------------PHASE_PAUSE-----------*/
canvas.onmouseout = function(){
	if(curPhase === PHASE_PLAY){
		curPhase = PHASE_PAUSE;
	}
};
canvas.onmouseover = function(){
	if (curPhase === PHASE_PAUSE) {
		curPhase = PHASE_PLAY;
	}
};
function drawPause(){
	var x = canvasWidth/2 - imgGamePauseNor.width/2;
	var y = canvasHeight/2 - imgGamePauseNor.height/2;
	ctx.drawImage(imgGamePauseNor, x, y);
}

/*---------------PHASE_GAMEOVER-----------*/
function drawGameover(){
	ctx.font = '50px Helvetica';
	ctx.fillStyle = '#888';
	ctx.strokeStyle = '#fff';
	var txt = 'GAME OVER';
	var w = ctx.measureText(txt).width;
	var x = canvasWidth/2 - w/2;
	var y = canvasHeight/2 + 20;
	ctx.fillText(txt,x,y);
}

/*---------------GAME ENGINE--INTERVAL-----------*/
function startEngine(){
	setInterval(function(){
		sky.draw();
		sky.move();
		switch (curPhase) {
			case PHASE_READY:
			    logo.draw();
			    break;
			case PHASE_LOADING:
			    loading.draw();
			    loading.move();
			    break;
			case PHASE_PLAY:
				hero.draw();
				hero.move();
				bulletList.draw();
				bulletList.move(); 
				enemyList.draw();
				enemyList.move();
				drawStat();
				break;
			case PHASE_PAUSE:
				hero.draw();
				bulletList.draw();
				enemyList.draw();
				drawStat();
				drawPause();
				break;
			case PHASE_GAMEOVER:
				drawGameover();
				break;
		}
	},42);
}