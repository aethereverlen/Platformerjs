//thanks to llamba for the tutorial
//https://replit.com/talk/learn/Basic-Platformer-With-Javascript-and-HTML/7509

//music by:
//light_music https://pixabay.com/users/light_music-40074088/
//relaxingtime https://pixabay.com/users/relaxingtime-17430502/

//levelscode at line 304
//rendering at line 190
//findtile at 605
const c = document.getElementById("canvas").getContext("2d");

let musnum = 20;

let adminslow = 0;
let elapsed = 100000;
let lastframe;

function getLeveltimer(parsedlevel) {
  if (levelnum == 1) {
    return Date.now()-level1start;
  }
  if (levelnum == 2) {
    return Date.now()-level2start;
  }
  if (levelnum == 3) {
    return Date.now()-level3start;
  }
  if (levelnum == 4) {
    return Date.now()-level4start;
  }
  if (levelnum == 5) {
    return Date.now()-level5start;
  }
  if (levelnum == 6) {
    return Date.now()-level6start;
  }
  if (levelnum == 7) {
    return Date.now()-level7start;
  }
  if (levelnum == 9) {
    return Date.now()-level8start
  }
  else {
    return;
  }
}

let portalslist = [];

let taslist = [];
let coordslist = [];
let slowedcoordslist = [];
let printedonce = 0;

let level1start;
let level1end;
let level1total;
let level2start;
let level2end;
let level2total;
let level3start;
let level3end;
let level3total;
let level4start;
let level4end;
let level4total;
let level5start;
let level5end;
let level5total;
let level6start;
let level6end;
let level6total;
let level7start;
let level7end;
let level7total;
let level8start;
let level8end;
let level8total;

let fastreplay = 43289;

let totalframes = 0;

let replaystarted = 0;
let replayframe = 0;

let frames = 0;
let times= [];
let fps;
let avgfps = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstinput = 'hello';

//var elapsed;
var currenttime;

var partition = new Image();
partition.src = "bananatetris.png";

var mario = new Image();
mario.src = "mario.png";

var poland = new Image();
poland.src = "poland.png";

var ashrit = new Image();
ashrit.src = "ashrit.GIF"

var sky = new Image();
sky.src = "nightsky.png";

var portal = new Image();
portal.src = "portal.png";

var cloud1 = new Image();
cloud1.src = "cloud1.png";

var cloud2 = new Image();
cloud2.src = "cloud2.png";

var cloud3 = new Image();
cloud3.src = "cloud3.png";

music1length = 1358;
music2length = 1161;
music3length = 54;

var bababooey = 0;

rickroll = 0;

var vol = 0;
var mvol = 0;

const offwhite = `#FFFFE4`;

const mutedwhite = `#9F9F9F`;

var music = 0;

let ldm = 0;

let cube = 0;

var go = 0;
// const start = new Date();
// let starttime = start.getTime();
var music1 = new Audio('music1.mp3');
var music2 = new Audio('music2.mp3');
var music3 = new Audio('music3.mp3')
var jump = new Audio('jump.mp3');
var yeyey = new Audio('yeyey.mp3');


function playsound(soundfile) {
  var audio = new Audio(soundfile);
  //audio.currentTime = 100;
  audio.play();
}


//musnum = getRandomInt(1,3)
// if (musnum == 0) {
//   playsound('music1.mp3')
// }
// if (musnum == 1) {
//   playsound('music2.mp3')
// }
var levelnum = 1;
//get time
var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
// console.log(time);


//collisions
function findtile(x, y) {
  return (currentlevel[Math.floor(y / 32)][Math.floor(x / 32)]);
}
//player
const player = {
  x: 240,
  y: 385,
  width: 32,
  height: 32,
  speed: 3,
  mass: 64,
  yke: 0,
  gpe: 0
}
//keypress
let keysDown = {};
let keysUp = {};
//stars variabble for loop
var starsvar = 0;
//draw
function draw() {
  // var partition = new Image();
  // partition.src = "bananatetris.png";

  // var mario = new Image();
  // mario.src = "mario.png";

  // var poland = new Image();
  // poland.src = "poland.png";

  // var ashrit = new Image();
  // ashrit.src = "ashrit.GIF"

  // var sky = new Image();
  // sky.src = "nightsky.png";

  // var portal = new Image();
  // portal.src = "portal.png";

  // var cloud1 = new Image();
  // cloud1.src = "cloud1.png";

  // var cloud2 = new Image();
  // cloud2.src = "cloud2.png";

  // var cloud3 = new Image();
  // cloud3.src = "cloud3.png";


  //clear canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  



  //sprite player, have to write after stars and bg

  if ((ldm % 2 == 0)) {
    if (cube != -1) {c.drawImage(sky, 0, 0, canvas.width, canvas.height);}
    

    if (cube == 0) {
      c.drawImage(partition, player.x, player.y, 32, 32);
    }
    else if (cube == 1) {
      c.drawImage(mario, player.x, player.y, 32, 32);
    }
    else if (cube == -1) {
      c.drawImage(poland,0,0,canvas.width,canvas.height);
      c.drawImage(poland, player.x, player.y, 32, 32)
    }
    else if (cube == 2) { c.drawImage(ashrit, player.x, player.y, 32, 32) }
  }
  else {
    c.fillStyle = 'teal'
    c.fillRect(player.x, player.y, 32, 32)
  }

  //timer
  // var now = new Date();
  // var currenttime = now.getTime();
  // c.font = "10px Arial";
  // var elapsed = currenttime - starttime;
  // c.fillText(elapsed / 1000, 50, 50);
	// 	//fps
		
  // if (elapsed / 1000 > music1length) {
  //   if (musnum == 0) {
  //     if (mvol == 0) { playsound('music2.mp3') }
  //   }
  // }
  // if (rickroll == 1) {
  //   if (elapsed / 1000 == 275) {
  //     playsound('rickroll.mp3')
  //   }
  // }
  
  // if (elapsed / 1000 > music2length) { if (musnum == 0) { if (mvol == 0) { playsound('music1.mp3') } } }
  // triangle(10,10,0,0,20,20)
  //player
  //  c.fillStyle = "teal";
  //c.fillRect(player.x, player.y, player.width, player.height);
  c.fillStyle = "white";
  //loops through the level
  for (let row = 0; row < currentlevel.length; row++) {
    for (let col = 0; col < currentlevel[0].length; col++) {
      //center cloud
      if (currentlevel[row][col] === "1") {
        c.fillStyle = mutedwhite;
        c.fillRect(col * 32, row * 32, 32, 32);
      }
      //blocks
      // if (currentlevel[row][col] === 'b') {
      //   c.fillStyle = mutedwhite;
      //   c.fillRect(col * 32, row * 32, 32, 32);
      //}
      //portal
      if (currentlevel[row][col] === '2') {
        c.drawImage(portal, col * 32, row * 32, 32, 32)
      }
      //spike
      if (currentlevel[row][col] === 's') {
        c.fillStyle = "red";
        c.fillRect(col * 32, row * 32, 32, 32);

      }
      //lvl 2 portal
      if (currentlevel[row][col] === '3') {
        c.drawImage(portal, col * 32, row * 32, 32, 32)
      }
      //false block
      if (currentlevel[row][col] === '4') {
        c.fillStyle = offwhite;
        c.fillRect(col * 32, row * 32, 32, 32)

      }
      //lvl 3 portal
      if (currentlevel[row][col] === '5') {
        c.drawImage(portal, col * 32, row * 32, 32, 32)
      }
      //lvl4 portal
      if (currentlevel[row][col] === '6') {
        c.drawImage(portal, col * 32, row * 32, 32, 32)
      }
      if (currentlevel[row][col] === '7') {
        c.drawImage(portal, col * 32, row * 32, 32, 32);
      }
      if (currentlevel[row][col] === '8') {
        c.drawImage(portal, col * 32, row * 32, 32, 32);
      }
      if (currentlevel[row][col] === '9') {
        c.drawImage(portal, col * 32, row * 32, 32, 32);
      }
      if (currentlevel[row][col] === 'b') {
        c.fillStyle='#c91010'
        c.fillRect(col*32,row*32,32,32);
      }
      if (currentlevel[row][col]==='A') {
        c.drawImage(portal, col * 32, row * 32, 32, 32);
      }
    }
  }

}
//draws f
function main() {
  //console.log(lastframe-elapsed)
  //console.log('game is running')
  //console.log(adminslow)
  if (adminslow == 0) {
  lastframe = elapsed;
  if (firstinput == 0) {
    // console.log('hello')
    // console.log(keysDown[0])
    // console.log(keysDown)
    var time = new Date();
    starttime = time.getTime();
    var Level1time = new Date()
    if (typeof level1start != 'number') {
    level1start = Date.now()
    }
   // console.log(level1start)
    firstinput = 1;
  }
  
  input(player.x, player.y);
  cubeselect();
  if (levelnum != 8) {
  draw();
  
  //console.log(levelnum)
  }
  if (levelnum == 8) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.font = '100px Arial';
  c.fillStyle = 'red';
  c.fillText('You Win!',100,300,canvas.width,canvas.height)
  if (printedonce == 0) {
  console.log(taslist);
  for (let i = 0; i < taslist.length; i++) {
   // console.log(taslist[i])
    //console.log(i)
  }
  console.log(totalframes)
  printedonce = 1;
  }
  }
  if (levelnum != 0) {
    c.fillStyle = 'white';
    c.font = '10px Arial'
    if (musnum == 1) {
      c.fillText('♪ - Haggstrom - C418', 400,50)
    }
    if (musnum == 2) {
      c.fillText('♪ - Megalith - Meganeko', 400,50)
    }
    if (musnum ==  3) {
      c.fillText('♪ - Die Mittsommernacht-Fantasie - Yu-Peng Chen', 300,50)
    }
    if (musnum == 4) {
      c.fillText('♪ - Beats of Water Drops - Yu-Peng Chen', 350,50)
    }
  }

  gravity(player);
  requestAnimationFrame(main);
  if (levelnum == 1) {
    currentlevel = parse(level);
    
  }
  if (levelnum == 2) {
    currentlevel = parse(level2);
    if (typeof level1end != 'number') {
      level1end = Date.now()
      level1total = (level1end-level1start)/1000
      console.log(level1total)
    }
    var Level2time = new Date()
    if (typeof level2start != 'number') {
    level2start = Date.now()
    }
  }
  if (levelnum == 3) {
    currentlevel = parse(level3);
    if (typeof level2end != 'number') {
      level2end = Date.now()
      level2total = (level2end-level2start)/1000
      console.log(level2total)
    }
    var Level3time = new Date()
    if (typeof level3start != 'number') {
    level3start = Date.now()
    }

  }
  if (levelnum == 4) {
    currentlevel = parse(level4);
    if (typeof level3end != 'number') {
      level3end = Date.now()
      level3total = (level3end-level3start)/1000
      console.log(level3total)
    }
    var Level4time = new Date()
    if (typeof level4start != 'number') {
    level4start = Date.now()
    }
  }
  if (levelnum == 5){
    currentlevel = parse(level5)
    if (typeof level4end != 'number') {
      level4end = Date.now()
      level4total = (level4end-level4start)/1000
      console.log(level4total)
    }
    var Level5time = new Date()
    if (typeof level5start != 'number') {
    level5start = Date.now()
    }
  }
  if (levelnum == 6) {
    currentlevel = parse(level6)
    if (typeof level5end != 'number') {
      level5end = Date.now()
      level5total = (level5end-level5start)/1000
      console.log(level5total)
    }
    var Level6time = new Date()
    if (typeof level6start != 'number') {
    level6start = Date.now()
    }
  }
  if (levelnum == 7) {
    currentlevel = parse(level7);
    if (typeof level6end != 'number') {
      level6end = Date.now()
      level6total = (level6end-level6start)/1000
      console.log(level6total)
    }
    var Level7time = new Date()
    if (typeof level7start != 'number') {
    level7start = Date.now()
    }
  }
  if (levelnum == 8) {
    if (typeof level6end != 'number') {
      level8end = Date.now()
      level8total = (level8end-level8start)/1000
      console.log(level8total)
    }
  }
  if (levelnum == 9) {
    currentlevel = parse(level8)
    if (typeof level7end != 'number') {
      level7end = Date.now()
      level7total = (level7end-level7start)/1000
      console.log(level7total)
    }
    var Level8time = new Date()
    if (typeof level8start != 'number') {
    level8start = Date.now()
    }
  }
  
  if (levelnum != 8 && replaystarted == 0 && firstinput == 1) { //gui work; has the FPS meter and the timer
  var date = Date.now();
  //if (times[0] <= now-1000) {console.log('should shift');}
  while (times.length > 0 && times[0] <= date - 1000) {times.shift();}
  times.push(date);

  fps = times.length;	
  avgfps.push(fps);
  c.fillText(fps,250,50);
  //c.fillText(avgfps[avgfps.length-1],250,60)
  
  now = new Date();
  currenttime = now.getTime();
  c.font = "10px Arial";
  elapsed = currenttime - starttime;
  
  }

  if (levelnum == 8) {
    c.font = '20px Arial';
    c.fillStyle = 'white';
   // c.fillText((avgfps.length/60).toPrecision(6),50,50)
   c.fillText(elapsed/1000,50,50)
    //console.log(elapsed/1000)
    
    //c.fillText(totalframes, 50, 100)
    if (portalslist.length != 8) {
      c.fillText('cheat detected',50,500)
  }

  c.font = '12px Arial';
  c.fillText('Level 1: ' + level1total.toString(),50,65)
  c.fillText('Level 2: ' + level2total.toString(),50,76)
  c.fillText('Level 3: ' + level3total.toString(),50,87)
  c.fillText('Level 4: ' + level4total.toString(),50,98)
  c.fillText('Level 5: ' + level5total.toString(),50,109)
  c.fillText('Level 6: ' + level6total.toString(),50,120)
  c.fillText('Level 7: ' + level7total.toString(),50,131)
  c.fillText('Level 8: ' + level8total.toString(),50,142)
  
  if (82 in keysDown && replaystarted == 0 && false) { 
    levelnum = 1;
    player.x = 256;
    player.y = 256;
    replaystarted = 1;
  }
  if (82 in keysDown && replaystarted == 0) {
    levelnum = 1;
    player.x = 256;
    player.y = 256;
    replaystarted = 1;
    fastreplay = true;
  }
  if (84 in keysDown && replaystarted == 0) {
    levelnum = 1;
    player.x = 256;
    player.y = 256;
    replaystarted = 1;
    fastreplay = false;
  }
    
    // if (replaystarted == 1) {
    //   keysDown = {}
    //   for (item in taslist[replayframe]) {
    //     let currentlist = taslist[replayframe]
    //     keysDown[item] = true
    //   }
    //   console.log(keysDown)
    //   replayframe += 1;
    // }
    
  }
  if (replaystarted == 1 && false) {
    keysDown = {}
    for (item in taslist[replayframe]) {
      let currentlist = taslist[replayframe]
      keysDown[currentlist[item]] = true
    }
   // console.log(keysDown)
    replayframe += 1;
   // console.log('looping')
  }

  if (replaystarted == 1) {
    if (fastreplay == true) {

      let currentlist = coordslist[replayframe]
 
      if (typeof currentlist != 'undefined') {
     // console.log(typeof currentlist[0])
      player.x = currentlist[0]
      player.y = currentlist[1]
      levelnum = currentlist[2]
      elapsed = currentlist[3]
      }
      if (typeof currentlist == 'undefined') {
        levelnum = 8;
      }
      replayframe += 1;
      //console.log(coordslist)
      //console.log(coordslist[replayframe])
      //console.log(currentlist)
    // for (let item = 0; item < coordslist.length; item++) {
    }
    // }
  }
  if (replaystarted == 1) {
    if (fastreplay == false) {
    // for (let item = 0; item < coordslist.length; item++) {
      let currentlist = slowedcoordslist[replayframe]
      //console.log(coordslist)
      //console.log(coordslist[replayframe])
      //console.log(currentlist)
      if (currentlist.length != 0) {
      console.log(typeof currentlist[0])
      player.x = currentlist[0]
      player.y = currentlist[1]
      levelnum = currentlist[2]
      elapsed = currentlist[3]
      }
      if (currentlist.length == 0) {
        levelnum = 8;
      }
      replayframe += 1;
    }
    // }
  }
  if (levelnum != 8 && firstinput == 1) {
    c.fillText(elapsed / 1000, 50, 50);
    c.font = '8px Arial';
    c.fillStyle = '#c0c0c0';
    c.fillText(getLeveltimer(levelnum)/1000,100,50)
    
  }
  
  // var now = new Date();
  // var currenttime = now.getTime();
 // currenttime = currenttime;
  //elapsed = elapsed;
 // console.log(elapsed);
  // console.log(currenttime);
  // console.log(findtile(player.x,player.y))

  if (levelnum != 8 && replaystarted == 0) {
  
  var totaslist = [];
  var inputs = [];
  //console.log(keysDown);
  for (var key in keysDown) {
    if (keysDown.hasOwnProperty(key)) {
      totaslist.push(key)
    }
  slowedcoordslist.push([player.x,player.y,levelnum,elapsed])
  taslist.push(totaslist);
  
  }

  if (levelnum != 8 && replaystarted == 0) {
    coordslist.push([player.x,player.y,levelnum,elapsed])
  }
  
  //console.log()
  //console.log(slowedcoordslist[slowedcoordslist.length-1])

  if (32 in keysDown) {
    inputs.push('⎵')
  }
  if (87 in keysDown) {
    inputs.push('w')
  }
  if (38 in keysDown) {
    inputs.push('^')
  }
  if (65 in keysDown) {
    inputs.push('a')
  }
  if (37 in keysDown) {
    inputs.push('<')
  }
  if (68 in keysDown) {
    inputs.push('d')
  }
  if (39 in keysDown) {
    inputs.push('>')
  }

  c.fillStyle = 'white'
  c.fillText(inputs,50,60)
  //console.log(taslist[taslist.length-1])
  }
  if (levelnum != 8 ) {
  totalframes += 1;
  }
  }
  //console.log(elapsed-lastframe)
}
//when the function loads, run main, which draws the square
window.onload = function() {
 
  if (levelnum == 1) {
    currentlevel = parse(level);
  }
  if (levelnum == 2) {
    currentlevel = parse(level2);
  }
  if (levelnum == 3) {
    currentlevel = parse(level3);
  }
	if (levelnum == 4) {
    currentlevel = parse(level4);
  
  }
  if (levelnum == 5) {
    currentlevel = parse(level5);
  }
  if (levelnum == 6) {
    currentlevel = parse(level6);
  }
  if (levelnum == 7) {
    currentlevel = parse(level7);
  }
  if (levelnum == 9) {
    currentlevel = parse(level8)
  }
  // console.log(levelnum)
  main();



}

// for (i = 0; i < 256; i++) {
//   c.fillStyle = 'red';
//   c.fillRect(player.x,player.y-i,player.width+i,player.height+i)
// }

const level0 = ``

const level =
`1111111111111111111
10020000000000000111
10020000000000000111
10010000000000000111
10000000000000000111
101000ss000001110111
10000111000000000111
10010000000011110111
10000000000000000111
11000000000111110111
10000000000011000111
11110000000000000111
1sb00000011111110111
11111000111100000111
10000000000000000111
10001100001000000111
10000000100000000111
11111111111111111111
11111111111111111111
11111111111111111111`;

const level2 =
  `11111111111111111
100000000000000000
100000000000000011
100000000000000011
100100000000000011
1000000000000011111
100001110000000011
110000000000111111
110000000000000011
110000000001111111
110000000000110011
110100000000000011
100000000111111111
144111111111000011
100000000000000011
100011000010000011
100000001000000031
111111101011111111`

const level3 =
  `1111111111111111111
1000000000000000011
1000000000000000011
1005000000000000011
1001000000000000011
1000000000000111111
1000011100000000011
1100000000001111111
1100000000000000011
1100000000011111111
1100000000001100011
1101000000000000011
1000000001111441111
111111111111s00s011
1000000000000000011
1000110000100010011
1000000010000010011
1111111010111111111
1111111111111111111`

const level4 =
`1111111111111111111
100000000000000001
100000000000000001
1000000000000000011
1000000000000000011
1001000000000000011
1ssssssssss00sssss1
1111111111100111111
1100000000000111111
1100000000000000011
1100000000011111111
1101000000000000011
1000000001111441111
111111111111s00s011
1000000000000000011
1000110000100010011
1660000010000010011
1111111s10111111111
1111111111111111111`

const level5 = 
`111111111111111111100
100000000000000000100
100000000000000000100
100000000000000000100
100000000000000011100
111000000000000000100
100000000000000011100
111000000000000000100
100000000000000011100
111000000000000000100
100000000000000011100
111000000000000000100
100000000000000011100
111000000000000000100
100000000000000011100
111000000000000000100
100000000000000711100
111000000000011111100
000000000000000000000
`
const level6 = 
`111111111111111111
100000000000000001
100000000000000091
100000000000100001
100000010000000001
101000000000000001
100000000000000001
100100000000000001
100000000000000001
100010000000000001
100000000000000001
100001000000000001
100000000100000001
100000100100000001
101000000000000001
100000010000001001
100000010s00000001
111111111111111111
`
const level7 = 
`11111111111111111111
10000000000000sssss1
10001000111000b00001
10010000000011100111
10010010000000000001
10010010000000000001
10000010000000000001
10000111100000000001
10000100110000000011
100110000ssssssssss1
11001000011111111111
10000b00000000000001
101000s0000000000001
10010011110000000801
10100011000000001111
11100101110000000001
11000001ss0000000001
11000001110000000001
11000004000000000001
11111111111000000001
`

const level8 = 
`11111111111111111111
10000sssss0000b00001
1A000sssss0000b01111
11000100000000b00001
11000100000001100001
s1100100000001s11001
s0000100000001s00001
s00001000ssss1s00001
11100100011111s00111
s0000100000001s00001
s0000100000001s00001
s0011100000001s11001
s00001ssss0001s00001
s0000111110001s00001
11100s10000001s11111
s0000s10000001sssss1
s0000s10000001sssss1
s001111000sss1sssss1
s000000000sss1sssss1
11111111111111111111
`

// const level7 =
// `1111111111111111111
// 10080000000000000111
// 10080000000000000111
// 10010000000000000111
// 10000000000000000111
// 101000ss000001110111
// 10000111000000000111
// 10010000000011110111
// 10000000000000000111
// 11000000000111110111
// 10000000000011000111
// 11110000000000000111
// 1s000000011111110111
// 11111000111100000111
// 10000000000000000111
// 10001100001000000111
// 10000000100000000111
// 11111111111111111111
// 11111111111111111111
// 11111111111111111111`;


function parse(lvl) {
  const lines = lvl.split("\n");
  const characters = lines.map(l => l.split(""));
  return characters;
}
//currentlevel 
var currentlevel;

addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

document.addEventListener('keyup', function(event) {
  keysUp[event.keyCode] = true;
});


function cubeselect() {
  //1
  if (49 in keysDown) {
    cube = 0;
  }
  //2
  if (50 in keysDown) {
    cube = 1;
  }
}


//playerinputs
function input(x, y) {
  if (findtile(x, y) !== "s" && findtile(x, y) !== 's' && findtile(x, y) !== 's') {
    //code for a
    if ((65 in keysDown) || (37 in keysDown)) {
      if (firstinput != 1) {
        firstinput = 0
      }
      if (music == 0) {
        musnum = getRandomInt(1,4)
        if (musnum == 1) {
          playsound('music1.mp3')
          music = 1;
        }
        if (musnum == 2) {
          playsound('music2.mp3')
          music = 1;
        }
        if (musnum == 3) {
          playsound('music3.mp3')
          music = 1;
        }
        if (musnum == 4) {
          playsound('music4.mp3')
          music = 1;
        }
      }
      //   if (findtile((player.x-player.speed)+1,player.y+16) !== "2"){
      if (findtile((player.x - player.speed) + 1, player.y + 16) !== "1") {
        if (32 in keysDown) {
        //  if (findtile(player.x, player.y +32) !== "1" && findtile(player.x+32, player.y +32) !== "1") {
          player.x -= 6;
         // }
         // else{player.x-=3}
        }
        else {
          player.x -= 3;
        }
      }
      //  }
    }
    //code for d
    if ((68 in keysDown) || (39 in keysDown)) {
      if (firstinput != 1) {
        firstinput = 0
      }
      if (music == 0) {
        musnum = getRandomInt(1,4)
        if (musnum == 1) {
          playsound('music1.mp3')
          music = 1;
        }
        if (musnum == 2) {
          playsound('music2.mp3')
          music = 1;
        }
        if (musnum == 3) {
          playsound('music3.mp3')
          music = 1;
        }
        if (musnum == 4) {
          playsound('music4.mp3')
          music = 1;
        }
      }
      if (findtile((player.x + player.width), player.y) !== "1") {
        if (32 in keysDown) {
         // if (findtile(player.x, player.y +32) !== "1" && findtile(player.x+32, player.y +32) !== "1") {
          player.x += 6;
         // }
         // else {player.x+=3}
        }
        else {
          player.x += 3;
        }
      }
    }
    if (76 in keysUp) {
      if (music == 0) {
        musnum = getRandomInt(1,4)
        if (musnum == 1) {
          playsound('music1.mp3')
          music = 1;
        }
        if (musnum == 2) {
          playsound('music2.mp3')
          music = 1;
        }
        if (musnum == 3) {
          playsound('music3.mp3')
          music = 1;
        }
        if (musnum == 4) {
          playsound('music4.mp3')
          music = 1;
        }
      }
      ldm++;
      delete keysUp[76];
    }
    //jump volume
    if (74 in keysUp) {
      vol++;
      delete keysUp[74]
    }
    if (77 in keysUp) {
      mvol++;
      delete keysUp[77]
    }
    //code for w
    if ((87 in keysDown && player.yke === 0) || (38 in keysDown && player.yke === 0)) {
      if (firstinput != 1) {
        firstinput = 0
      }
      if (music == 0) {
        musnum = getRandomInt(1,4)
        if (musnum == 1) {
          playsound('music1.mp3')
          music = 1;
        }
        if (musnum == 2) {
          playsound('music2.mp3')
          music = 1;
        }
        if (musnum == 3) {
          playsound('music3.mp3')
          music = 1;
        }
        if (musnum == 4) {
          playsound('music4.mp3')
          music = 1;
        }
      }
      if (findtile(player.x, player.y - 1) !== "1" && findtile(player.x, player.y - 1) !== "1") {
        player.yke += 8;
        if (vol % 2 == 0) { playsound("jump.mp3") }

      }
    }
  }
  //84 82 79 78
  if (mvol !== 0) {
    if (84 in keysDown && 82 in keysDown && 79 in keysDown && 78 in keysDown) {
      if (rickroll == 0) { playsound('rickroll.mp3') }
      rickroll = 1;
    }
  }
  if (mvol !== 0){
    if (189 in keysDown && 187 in keysDown && 220 in keysDown && 221 in keysDown && 219 in keysDown){
      if (bababooey !== 1) {
        nows = new Date();
        bababooeytime = nows.getTime();
        bababooeytime = bababooeytime-starttime;
        playsound('yeyey.mp3');
      }
      bababooey = 1;
    }
  }
}
//gravitation 
function calcGPE(obj) {
  return obj.mass * (0.0000098) * ((576 - obj.height) - (obj.y / 32));
}
//GRAVITY (CURRENTLY VALUE SET TO 576 not CANVAS.HEIGHT)

//moves down cube moves down yke and then moves down 
function gravity(obj) {
  obj.y -= obj.yke;
  obj.yke -= obj.gpe;
  obj.gpe = calcGPE(obj);
  if (findtile(obj.x, obj.y + 32) === '1') {
    obj.yke = 0;
    obj.y -= (obj.y % 32)
  }
  if (findtile(obj.x, obj.y) === "1" || findtile(obj.x + 32, obj.y) === "1") {
    if (obj.yke >= 0) {
      obj.yke = -0.5;
      obj.y += 1;
    }
  } else {
    if (findtile(obj.x + 32, obj.y + 32) === "1" || findtile(obj.x, (obj.y + 32)) === "1") {
      if (obj.yke <= 0) {
        obj.yke = 0;
        obj.y -= (obj.y % 32);

      }
    }
  }
  //old collisions
  // if (player.x === 96) && (player.y === 96) {
  //obj.yke = 0
  // }
  if (findtile(obj.x, obj.y) === "2") {
    //c.clearRect(0, 0, canvas.width, canvas.height);
    portalslist.push('1');
    levelnum = 2;
  }
  if (findtile(obj.x, obj.y) === "3" || findtile(obj.x + 32, obj.y) === '3') {
    //c.clearRect(0, 0, canvas.width, canvas.height);
    portalslist.push('2');
    levelnum = 3;
  }
  if (findtile(obj.x, obj.y) === "5" || findtile(obj.x + 32, obj.y) === '5') {
    //c.clearRect(0, 0, canvas.width, canvas.height);
    portalslist.push('3');
    levelnum = 4;
  }
  if (findtile(obj.x, obj.y) === "6" || findtile(obj.x + 32, obj.y) === '6') {
    levelnum = 5;
    portalslist.push('4');
  }
  if (findtile(obj.x, obj.y) === "7" || findtile(obj.x + 32, obj.y) === '7') {
    levelnum = 6;
    portalslist.push('5');
  }
  if (findtile(obj.x, obj.y) === "8" || findtile(obj.x + 32, obj.y) === '8') {
    if (portalslist.length == 6) {
    portalslist.push('6');
    }
    levelnum = 9;
 //   console.log(levelnum)
  }
  if (findtile(obj.x, obj.y) === "9" || findtile(obj.x + 32, obj.y) === '9') {
    if (portalslist.length == 5) {
    portalslist.push('7');
    }
    levelnum = 7;
 //   console.log(levelnum)
  }
  if (findtile(obj.x, obj.y) === "A" || findtile(obj.x + 32, obj.y) === 'A') {
    if (portalslist.length == 7) {
    portalslist.push('8');
    }
    levelnum = 8;
 //   console.log(levelnum)
  }

  //1
  if (49 in keysDown) {
    cube = 0;
  }
  //2
  if (50 in keysDown) {
    cube = 1;
  }
  if (51 in keysDown) {
    cube = 2;
  }
  //`
  if (192 in keysDown) {
    cube = -1;
  }
}
//  made by:
//  albedo <3
//  kazuha 
//  aether

//  with help from:
//  llambda
//  yasin
//  anvi
//  leo
//  escamilla
