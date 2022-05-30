nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0

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
    fill("#5a995c")
    stroke("#5a995c")
    square(nosex,nosey,difference)
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotposes(results){
    if (results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx)

    }

}
