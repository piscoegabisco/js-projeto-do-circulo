let cor;
let posicaohorizontal;//x
let posicaovertical;//y

function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0,255),random(0,255),random(0,255));
  posicaohorizontal=200;
  posicaovertical=200;
}

function draw() {
  fill(cor)
   circle(posicaohorizontal,posicaovertical,50);
   if(mouseX<posicaohorizontal){
     posicaohorizontal=posicaohorizontal-1
  }
     
  if(mouseX>posicaohorizontal){
 
    posicaohorizontal=posicaohorizontal+1;
  }
 if(mouseY<posicaovertical){
   posicaovertical--;
  }
if(mouseY>posicaovertical){
  posicaovertical++;
}
  if(mouseIsPressed){
    
    color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
}
