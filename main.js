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
};

let gameOver;
let winThresh;
let fPos;
let bDown;

function update() {
  if (!ticks) {
    gameOver = false;
    winThresh = rndi(300, 900);
    bDown = false;
  }

  // play a sound every 60 or so ticks using a modulo; only play these sounds while ticks < winThresh
  // scale the pitch of the sound up over time by using ticks as a parameter, make sure to divide ticks by a big-ish number to make it not too high pitched


  // on the frame that ticks is exactly equal to winThresh, play a different sound once

  if (input.isPressed && ticks > 60) {
    gameOver = true;
  }

  if (gameOver) {
    if (ticks > winThresh) {
      // you win!!!! yayy :))))
      // draw text, draw smilies; make them big, make them small, make them fly around idk
      // and spam like particles and sounds that are kind of like airhorns
    }
    else {
      // L
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
  char('a', fPos, {scale: {x: 5, y: 5}});
  char((bDown ? "c" : "b"), 50, (bDown ? 85 : 80), {scale: {x: 5, y: 5}});
}

addEventListener("load", onLoad);