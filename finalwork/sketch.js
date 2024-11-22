// 最終課題を制作しよう

let x,y,w,h,vx,vy;
const g = 1; // 重力加速度
const vyMax = 40;

function setup(){
  createCanvas(windowWidth,windowHeight);
  w=width;
  h=height;
  x=width/2;
  y=height/2;
  vx = 16;
  vy = 8;
  n=-3;
}

function draw(){
  background(160, 192, 255);
  fill(255,220,0);
  stroke(255,220,0);
  figure(n,w,h,50);
  w += vx;
  h += vy;

  vy = constrain(vy + g, -vyMax, vyMax);

  if(w < 0 || w > width){vx = -1 * vx;}
  if(w < 0 || w > width){n=n-1;}
  if(h > height){vy = -1 * vy;}
  if(h > height){n=n+1;}
  w = constrain(w, 0, width);
  h = constrain(h, 0, height);
  if(keyIsDown("A".charCodeAt(0))){w-=vx;}
  if(keyIsDown("B".charCodeAt(0))){h-=vy;}
  if(keyIsDown("C".charCodeAt(0))){w-=vx;}
  if(keyIsDown("C".charCodeAt(0))){h-=vy;}
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function figure(n,cx,cy,r){
  beginShape();
  for(var i = 0; i < n; i++){
    let theta = TWO_PI*i/n;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}