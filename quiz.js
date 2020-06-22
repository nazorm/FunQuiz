var a = document.querySelector(".interestSection");
var b = document.querySelector(".avatar");
var quizSection = document.querySelector(".quizSection");
var lastPage = document.querySelector(".finalPage");

function EntryBtn() {
  var userName = document.querySelector(".UserAvater");
  userName.innerHTML = "Hello," + " " + b.value + " " + "😊";
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

function startQuiz() {
  if (quizSection.style.display === "block") {
    quizSection.style.display = "none";
  } else {
    quizSection.style.display = "block";
  }
  updateQuestion();
}

var questionNumber = document.querySelector(".questionNumber");
var question = document.querySelector(".question");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var pointScore = document.querySelector(".pointScore");
var options = document.querySelector(".options");

var questions = [
  {
    question: "how many classes of food are there?",
    options: ["9", "5", "7", "8"],
    answer: 2
  },

  {
    question: "where is the center of the earth located?",
    options: ["Ethiopia", "Tanzania", "America", "Turkey"],
    answer: 3
  },

  {
    question: "who was the first woman on Earth?",
    options: ["Medusa", "Athena", "Pandora", "Rhea"],
    answer: 2
  },
  {
    question: "where did the first man originate from?",
    options: ["Cameroon", "Ethiopia", "Egypt", "Isreal"],
    answer: 1
  },
  {
    question: "what is the loudest animal on Earth?",
    options: ["Elephant", "Sperm Whale", "Rhinoceros", "Hyena"],
    answer: 1
  },
  {
    question: "How many ribs are in the human body?",
    options: ["9", "10", "14", "24"],
    answer: 3
  },
  {
    question: "what is the most common colour of toilet paper in France?",
    options: ["Yellow", "White", "Pink", "Grey"],
    answer: 2
  },
  {
    question: "The offspring of a Donkey and Zibra is called what?",
    options: ["kid", "Zeedonk", "Zibling", "Zeebudonk"],
    answer: 1
  },
  {
    question: "what year did the French Revolution end?",
    options: ["4th of July", "1900", "1700", "1799"],
    answer: 3
  },
  {
    question: "What is the full meaning of MAC in Apple?",
    options: ["Macaroni", "Macaroni", "Macintosh", "Steve Jobs"],
    answer: 2
  }
];

let currentQuestion = 0;
let point = 0;
pointScore.innerHTML = point;


function updateQuestion() {
  //Back to default color
  option1.style.backgroundColor = "#0080ff";
  option2.style.backgroundColor = "#0080ff";
  option3.style.backgroundColor = "#0080ff";
  option4.style.backgroundColor = "#0080ff";

  questionNumber.innerHTML = currentQuestion + 1;

  question.innerHTML = questions[currentQuestion].question;
  option1.innerHTML = questions[currentQuestion].options[0];
  option2.innerHTML = questions[currentQuestion].options[1];
  option3.innerHTML = questions[currentQuestion].options[2];
  option4.innerHTML = questions[currentQuestion].options[3];
}

function handleNextbtn() {
  currentQuestion += 1;

  if (currentQuestion >= questions.length) {
    alert(`your score is ${point}`);  
    return;
  }

  updateQuestion();
}

function handlePrevbtn() {
  currentQuestion -= 1;
  if (currentQuestion <= 0) {
    alert("first question");
    return;
    
  }
  updateQuestion();
}

const option = (index) => {
  let answer = questions[currentQuestion].answer;
  if (index == answer) {
    point += 1;
    pointScore.innerHTML = point;
  }
  option1.style.backgroundColor = "red";
  option2.style.backgroundColor = "red";
  option3.style.backgroundColor = "red";
  option4.style.backgroundColor = "red";
  if (answer === 0) {
    option1.style.backgroundColor = "green";
  }
  if (answer === 1) {
    option2.style.backgroundColor = "green";
  }
  if (answer === 2) {
    option3.style.backgroundColor = "green";
  }
  if (answer === 3) {
    option4.style.backgroundColor = "green";
  }
};
