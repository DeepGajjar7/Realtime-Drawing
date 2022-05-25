function setup(){
    video=createCapture(VIDEO)
    video.size(550,550)
    canvas=createCanvas(550,500)
    canvas.position(560,150)
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes)
}

function draw() {
    background("#696969")
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotposes(results){
    if (results.length>0){
        console.log(results)
    }
}