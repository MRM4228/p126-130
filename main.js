song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
        song1 = loadSound("Volume Beta 28. Blocks.mp3");
        song2 = loadSound("2 - Into the Unknown.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist =" + rightWrist + " rightWristY = "+ rightWristY)

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWrist =" + leftWrist + " leftWristY = "+ leftWristY)
    }
}

function draw() {
        image(video, 0, 0, 600, 500);

        song1_status = song1.isPlaying();
        song2_status = song2.isPlaying();

        fill("FF0000");
        stroke("#FF0000");

        if(scoreRightWrist > 0.2)
        {
                circle(rightWristX,rightWristY,20);

                        song2.stop();

                if(song1_status == false)
                {
                        song1.play();
                        document.getElementById("so")
                }
        }


        f(scoreLeftWrist > 0.2)
        {
                circle(LeftWristX,LeftWristY,20);

                        song1.stop();

                if(song2_status == false)
                {
                        song2.play();
                        document.getElementById("so")
                }
        }
}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}