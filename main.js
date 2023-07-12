function Start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xB-8_80my/model.json",modelready)
   }
   function modelready(){
       classifier.classify(gotresults)
   }
   function gotresults(error,results){
    if (error) {
      console.log(error) 
    } else {
      console.log(results) 
      document.getElementById("sound_name").innerHTML=results[0].label
      document.getElementById("accuracy").innerHTML=((results[0].confidence).toFixed(3))*100
      Img=document.getElementById("Image")
      if (results[0].label=="Lion") {
        Img.src="Lion.jpeg"
      } else if(results[0].label=="Tiger") {
        Img.src="R.jpg"
      }else if(results[0].label=="Dinosaur"){
      Img.src="OIP.jpg"}
      else if(results[0].label=="Elephant"){
        Img.src="v1ds8JZ.jpg"}
      else{
        Img.src="OIP (1).jpg"
      }
    }
   }