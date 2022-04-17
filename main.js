noseX = 0;
noseY = 0;
differnce = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose = " + noseX + "noseY = " + noseY);

        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differnce = floor(leftWristX - rightWristX);


        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "differnce = " + differnce);
    }
}

function draw() {
    background('#969A97');
    
    document.getElementById("Text_side").innerHTML = "Font Size of the Text will be = " + differnce +"px";
    fill('#F90093');
    textSize(differnce);
    text('Nilesh', 50, 400);
}