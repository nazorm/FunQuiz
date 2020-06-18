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
      questions();
}
/*Getting hold of elements in Quiz Section */

var questionNumber = document.querySelector(".questionNumber");
var question = document.querySelector(".question");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var pointScore = document.querySelector(".pointScore");


var options = document.querySelector(".options");


function questions(){
    
    questionNumber.innerHTML = " " + 1;
    
   question.innerHTML = "Who is the APC Chairman that has just been suspended ?"
  
   option1.innerHTML = "Babatunde Fashola";

   option2.innerHTML = "Izeiyamu";
  
   option3.innerHTML = "Oshiomole";
   
   option4.innerHTML = "Answer it yourself";

   
   
}


const option = (index) => {
    if (index === 2){
        pointScore.innerHTML = Number(pointScore.innerHTML) + 1; 
        option1.style.backgroundColor = "red";
        option2.style.backgroundColor = "red";
        option3.style.backgroundColor = "green";
        option4.style.backgroundColor = "red";
    }else{
        option1.style.backgroundColor = "red";
        option2.style.backgroundColor = "red";
        option3.style.backgroundColor = "green";
        option4.style.backgroundColor = "red";
    }

    }
    function submitbtn(){

   questionNumber.innerHTML = " " + 2;
    
   question.innerHTML = "Who is Tekashi SixNine?"
  
   option1.innerHTML = "Boo Harry";

   option2.innerHTML = "American Musician";
  
   option3.innerHTML = "Nicki Minaj's Hubby";
   
   option4.innerHTML = "I don't Snitch";
   /*Back to default color*/
        option1.style.backgroundColor = "#0080ff";
        option2.style.backgroundColor = "#0080ff";
        option3.style.backgroundColor = "#0080ff";
        option4.style.backgroundColor = "#0080ff";
    /* Right colors for question 2 */
        options.addEventListener("click", function(){ 
        option1.style.backgroundColor = "red";
        option2.style.backgroundColor = "green";
        option3.style.backgroundColor = "red";
        option4.style.backgroundColor = "red";
        });

      option2.addEventListener("click", function(){
        pointScore.innerHTML = Number(pointScore.innerHTML) + 1; 
      })

    }
   