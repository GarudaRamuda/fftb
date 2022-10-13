title = "BUTTON FIGHT";

description = `
[Press] Win
`;

characters = [
  `
  lll
 llll
 llll
  lll
  ll
  l
  `,
  `
 rrRr
lrrRrl
llllll
  `,
  `
lrrRrl
llllll
  `
];

options = {
  seed: 2
};

let gameOver;
let winThresh;
let fPos;
let bDown;

let t;
let go;
let colors = ["red", "green", "cyan", "purple"];

function update() {
  if (!ticks) {
    gameOver = false;
    winThresh = rndi(300, 900);
    bDown = false;
    t = false;
    go = true;
  }
  //text((winThresh - ticks).toString(), 10, 20); // debug

  // play a sound every 60 or so ticks using a modulo; only play these sounds while ticks < winThresh
  // scale the pitch of the sound up over time by using ticks as a parameter, make sure to divide ticks by a big-ish number to make it not too high pitched
  if (ticks % 60 == 0 && !gameOver && ticks < winThresh) {
    play("tone", {freq: undefined, note: undefined, numberOfSounds: undefined, 
      pitch: 40+ ticks/20, seed: undefined});
    t = !t;
  }
  if (ticks >= winThresh && go){
    play("jump", {undefined});
    go = false;
  }

  // on the frame that ticks is exactly equal to winThresh, play a different sound once

  if (input.isPressed && ticks > 60) {
    gameOver = true;
    // store ticks to know if it was too early or not 
  }

  if (gameOver) {
    if (ticks > winThresh) {
      // you win!!!! yayy :))))
      // draw text, draw smilies; make them big, make them small, make them fly around idk
      // and spam like particles and sounds that are kind of like airhorns
      color(colors[rndi(0,4)]);
      particle(50, 85, undefined, 7, -PI/2, PI/1.5);
    }
    else {
      text("L", 20, 40);
      // draw big frowny :(
      // play two really low pitched wah wah sounds or something
    }
    //end();
  }
  if (!gameOver) fPos = vec(50, 50 + 10 * Math.sin(ticks / 15));

  else {
    fPos.y += 2;
    fPos.y = Math.min(65, fPos.y);
    if (fPos.y == 65) bDown = true;
  }
  color("black");
  char('a', fPos, {scale: {x: 5, y: 5}});
  char((bDown ? "c" : "b"), 50, (bDown ? 85 : 80), {scale: {x: 5, y: 5}});
}

addEventListener("load", onLoad);