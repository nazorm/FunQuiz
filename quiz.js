var a = document.querySelector(".interestSection");
var b = document.querySelector(".avatar");
var quizSection = document.querySelector(".quizSection");

function EntryBtn(){  
 var userName = document.querySelector(".UserAvater");
 userName.innerHTML = "Hello," + " " + b.value + " " +"😊";
    if (a.style.display === "block"){
        a.style.display = "none";
    }else{
        a.style.display = "block";
    }
}

function interest(){
    if(quizSection.style.display === "block"){
        quizSection.style.display = "none";
    }else{
        quizSection.style.display = "block";
    } 

    var questionNumber = document.querySelector(".questionNumber");
    questionNumber.innerHTML = " " + 1;
    var question = document.querySelector(".question");
   question.innerHTML = "Who is the APC Chairman that has just been suspended ?"

   var option1 = document.querySelector(".option1");
      option1.innerHTML = "Babatunde Fashola";
   var option2 = document.querySelector(".option2");
   option2.innerHTML = "Izeiyamu";
   var option3 = document.querySelector(".option3");
   option3.innerHTML = "Oshiomole";
   var option4 = document.querySelector(".option4");
   option4.innerHTML = "Answer it yourself";
    
}