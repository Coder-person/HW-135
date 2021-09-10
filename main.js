input = "";
status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(400,500);
    canvas.center();
    video = createVideo(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,500);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    input = document.getElementById("input").value;
}

function modelLoaded(){
    console.log('MODEL LOADED');
    status = true;
}