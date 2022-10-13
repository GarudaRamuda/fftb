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
];

options = {
};

let gameOver;
let winThresh;

function update() {
  if (!ticks) {
    gameOver = false;
    winThresh = rndi(300, 900);
  }

  if (input.isPressed && ticks > 30) {
    gameOver = true;
  }
  if (gameOver) {
    end();
  }
}

addEventListener("load", onLoad);