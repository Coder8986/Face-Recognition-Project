Webcam.set({
    width: 400,
    height:400,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach("#Camera");

function Take_snapshot(){
Webcam.snap(function (Result_web) {
document.getElementById("Display").innerHTML = "<img id='img_1' src=" + Result_web + ">";
})
}

console.log("ml5 version", ml5.version);

 classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/onBblUiHs/model.json", modelloaded);
 

 function modelloaded(){
    console.log("model is ready");
 }