var dog = "";
var cat = "";

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0-ft2vPCL/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    console.log("gotResults")
    if(error){
        console.error(error)
    }
    else{
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "Posso ouvir - "+results[0].label;
        //document.getElementById("result_count").innerHTML = "cachorro detectado - "+dog+ "gato detectado - "+cat;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        //document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        if(results[0].label=="cachorro"){
            document.getElementById("r").src="download.png"
        }else if(results[0].label=="gato"){
            document.getElementById("r").src="download (1).png";
        }else{
            document.getElementById("r").src="images.png";
        }

    }

}

