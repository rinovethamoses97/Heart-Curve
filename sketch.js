let radius=10;
let vertices=[];
let angle=0;
let msg="Donate Blood"
let index=0;
function setup(){
    createCanvas(screen.width,screen.height);
}
function draw(){
    background(0);
    stroke(255,0,0);
    fill(255,0,0);
    beginShape();
    for(var i in vertices){
      vertex(vertices[i][0],vertices[i][1]);
    }
    endShape();
    angleMode(DEGREES);
    let x=radius*16*(pow(sin(angle),3));
    let y=-radius*((13*cos(angle))-(5*cos(2*angle))-(2*cos(3*angle))-(cos(4*angle)));
    vertices.push([width/2+x,height/2+y])
    angle+=1;
    if(angle>=360){
      noLoop();
    }
    if(frameCount%28!=0){
      textSize(60);
      text(msg.substr(0,index),width/2-180,height/2+300);
    }
    else{
      textSize(60);
      text(msg.substr(0,index),width/2-180,height/2+300);
      index++;
    }
}
