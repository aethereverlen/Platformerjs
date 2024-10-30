//thanks to llamba for the tutorial
//https://replit.com/talk/learn/Basic-Platformer-With-Javascript-and-HTML/7509

//music by:
//light_music https://pixabay.com/users/light_music-40074088/
//relaxingtime https://pixabay.com/users/relaxingtime-17430502/

//levelscode at line 304
//rendering at line 190
//findtile at 605
const c = document.getElementById("canvas").getContext("2d");

let portalslist = [];

let taslist = [];
let printedonce = 0;

let frames = 0;
let times= [];
let fps;

let firstinput = 'hello';

var elapsed;
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
var music1 = new Audio('music1');
var music2 = new Audio('music2');
var jump = new Audio('jump.mp3');
var yeyey = new Audio('yeyey.mp3');

function playsound(soundfile) {
  var audio = new Audio(soundfile);
  audio.play();
}
musnum = Math.round(Math.random());
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
  x: 256,
  y: 256,
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
      if (currentlevel[row][col] === 'b') {
        c.fillStyle = mutedwhite;
        c.fillRect(col * 32, row * 32, 32, 32);
      }
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
    }
  }

}
//draws f
function main() {

  if (firstinput == 0) {
    console.log('hello')
    console.log(keysDown[0])
    console.log(keysDown)
    var time = new Date();
    starttime = time.getTime();
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
  c.fillStyle = 'red'
  c.fillText('You Win!',100,300,canvas.width,canvas.height)
  if (printedonce == 0) {
  console.log(taslist);
  for (let i = 0; i < taslist.length; i++) {
    console.log(taslist[i])
    console.log(i)
  }
  printedonce = 1;
  }
  }
  gravity(player);
  requestAnimationFrame(main);
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
  if (levelnum == 5){
    currentlevel = parse(level5)
  }
  if (levelnum == 6) {
    currentlevel = parse(level6)
  }
  if (levelnum != 8) {
  var date = Date.now();
  //if (times[0] <= now-1000) {console.log('should shift');}
  while (times.length > 0 && times[0] <= date - 1000) {times.shift();}
  times.push(date);

  fps = times.length;	
  c.fillText(fps,250,50);

  now = new Date();
  currenttime = now.getTime();
  c.font = "10px Arial";
  elapsed = currenttime - starttime;
  c.fillText(elapsed / 1000, 50, 50);
  }

  if (levelnum == 8) {
    c.font = '20px Arial';
    c.fillStyle = 'white';
    c.fillText(elapsed/1000,50,50)
    if (portalslist.length != 6) {
      c.fillText('cheat detected',50,500)
    }
  }

  // var now = new Date();
  // var currenttime = now.getTime();
  currenttime = currenttime;
  elapsed = elapsed;
 // console.log(elapsed);
  // console.log(currenttime);
  // console.log(findtile(player.x,player.y))

  if (levelnum != 8) {
  var totaslist = [];
  //console.log(keysDown);
  for (var key in keysDown) {
    if (keysDown.hasOwnProperty(key)) {
      totaslist.push(key)
    }
  }
  taslist.push(totaslist);
  //console.log(taslist[taslist.length-1])
  }
  
  // var newtime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

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
1000000000000000011
1002000000000000011
1001000000000000011
1000000000000000011
101000ss00000111011
1000011100000000011
1001000000001111011
1000000000000000011
1100000000011111011
1000000000001100011
1111000000000000011
1s00000001111111011
1111100011110000011
1000000000000000011
1000110000100000011
1000000010000000011
1111111111111111111`;

const level2 =
  `11111111111111111
100000000000000011
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
`1111111111111111111
1000000000000000001
1000000000000000001
1000000000000000001
1000000000000000111
1110000000000000001
1000000000000000111
1110000000000000001
1000000000000000111
1110000000000000001
1000000000000000111
1110000000000000001
1000000000000000111
1110000000000000001
1000000000000000111
1110000000000000001
1000000000000007111
1110000000011111111
`
const level6 = 
`111111111111111111
100000000000000001
100000000000000081
100000000000000011
100000000000000001
111000000000000001
100000000000000011
111000000000000001
100000000000000001
111000000000000001
100000000000000011
111000000000000001
100000000000000001
111000000000000001
100000000000000011
111000000000000001
100000000000000001
111111111111111111
`

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
        musnum = Math.round(Math.random());
        if (musnum == 0) {
          playsound('music1.mp3')
          music = 1;
        }
        if (musnum == 1) {
          playsound('music2.mp3')
          music = 1;
        }
      }
      //   if (findtile((player.x-player.speed)+1,player.y+16) !== "2"){
      if (findtile((player.x - player.speed) + 1, player.y + 16) !== "1") {
        if (32 in keysDown) {
          player.x -= 5;
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
        musnum = Math.round(Math.random());
        if (musnum == 0) {
          if (mvol == 0) {
            playsound('music1.mp3')
            music = 1;
          }
        }
        if (musnum == 1) {
          if (mvol == 0) { playsound('music2.mp3') }
          music = 1;
        }
      }
      if (findtile((player.x + player.width), player.y) !== "1") {
        if (32 in keysDown) {
          player.x += 5;
        }
        else {
          player.x += 3;
        }
      }
    }
    if (76 in keysUp) {
      if (music == 0) {
        musnum = Math.round(Math.random());
        if (musnum == 0) {
          if (mvol == 0) { playsound('music1.mp3') }
          music = 1;
        }
        if (musnum == 1) {
          if (mvol == 0) { playsound('music2.mp3') }
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
        musnum = Math.round(Math.random());
        if (musnum == 0) {
          if (mvol == 0) { playsound('music1.mp3') }
          music = 1;
        }
        if (musnum == 1) {
          if (mvol == 0) { playsound('music2.mp3') }
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
  return obj.mass * (0.0000098) * ((canvas.height - obj.height) - (obj.y / 32));
}

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
    if (portalslist.length == 5) {
    portalslist.push('6');
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
//made by albedo <3
