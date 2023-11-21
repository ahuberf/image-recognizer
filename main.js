Webcam.set({
    width:350,
    height:200,
    image_format:"png",
    png_quality:85
})


camera=document.getElementById("camera")

Webcam.attach("#camera")

function capture(){  
    Webcam.snap(function ( data_url){
        document.getElementById("result").innerHTML= '<img id="captured_image" src=" '+ data_url +'"/>'

    
    })
        
}

console.log("MLS version",ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3b4tHorPj/model.json", modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}

function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,gotresults)
}
function gotresults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("results").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2)*100 +" %";
    }
    
}
