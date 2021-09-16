input = "";
var status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(565,300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
}

function modelLoaded(){
    console.log('MODEL LOADED');
    status = true;
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    input = document.getElementById("input").value;
}