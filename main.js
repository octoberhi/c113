function preload(){

}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
color = "";
}

function draw(){
image(video, 0,0,500,500);
tint(color);
}

function filter_color(){
color = document.getElementById("color_name").value;
}

function take_snapshot(){
save('picture.png');
}