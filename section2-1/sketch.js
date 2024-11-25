/*
function setup() {
  let x = 100;
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  if(keyIsDown("A".charCodeAt(0))){
    ellipse(x,100,100);
    ellipse(x+100,100,100);
    ellipse(x+200,100,100);
    ellipse(x+300,100,100);
    ellipse(x+400,100,100);
    ellipse(x+500,100,100);
    ellipse(x+600,100,100);
    ellipse(x+700,100,100);
    fill(0);
    ellipse(x+800,100,100);
    ellipse(x+900,100,100);
  }
}
*/

/*
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < 8; i++) {
    ellipse(100 + i * 100, 100, 100);
  }
  if (keyIsDown("A".charCodeAt(0))) {
    fill(0);
    ellipse(800, 100, 100);
    ellipse(900, 100, 100);
  }
}
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // 最初の8つの円を描く
  for (let i = 0; i < 8; i++) {
    ellipse(100 + i * 100, 100, 100);
  }
  
  // "A"キーが押されたときに最後の2つの円を塗りつぶす
  if (keyIsDown("A".charCodeAt(0))) {
    fill(0); // 塗りつぶしの色を黒に設定
    ellipse(800, 100, 100); // 9番目の円
    ellipse(900, 100, 100); // 10番目の円
  }
}