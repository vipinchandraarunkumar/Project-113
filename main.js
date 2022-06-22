function preload()
{

}

function setup()
{
canvas=createCanvas(640,480);
canvas.position(270,255);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
   image(video,200,200,200,200);
   fill(238,189,66);
   stroke(238,189,66);
   circle(28,28,50);
   circle(612,28,50);
   circle(28,452,50);
   circle(612,452,50);
   fill(0,128,0);
   stroke(0,128,0);
   rect(25,50,10,380);
   rect(612,50,10,380);
   rect(50,30,540,10);
   rect(50,450,540,10);
}

function take_snapshot()
{
  save('image.png');
}