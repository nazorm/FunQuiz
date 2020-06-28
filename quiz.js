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

function goToEdu(){ 
  startQuiz();
};
function goToPol(){
  questions = [
    {
      question: "How long is the tenure of the president of france?",
      options: ["4 years", "6 years", "5 years", "3 years"],
      answer: 2
    },
  
    {
      question: "Who is the first elected African female president?",
      options: ["Ellen_Johnson_Sirleaf", "Joyce Banda", "Specioza Kazibwe", "Sylvie Kinigi"],
      answer: 0
    },
    {
      question: "What is Africa's newest country?",
      options: ["Azania", "Tanzania", "South Sudan", "Central African Republic"],
      answer: 2
    },
  
    {
      question: "How many years did the division of Korea take?",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      question: "Which of these countries is not a world power?",
      options: ["USA", "China", "Russia", "Isreal"],
      answer: 3
    },
    {
      question: "Who is the longest serving Public Servant?",
      options: ["Muammar al-Gaddafi", "Sarkis Tatigian", "Robert Mugabe", "Arjun Anaisha"],
      answer: 1
    },
    {
      question: "When was the Soviet Union formed?",
      options: ["1920", "1921", "1922", "1993"],
      answer: 2
    },
    {
      question: "The Berlin Conference is also known as?",
      options: ["German Conference", "Congo Conference", "UN Conference", "Saudi Conference"],
      answer: 1
    },
    {
      question: "What form of gorvenment is practiced in North Korea?",
      options: ["Aristocracy", "Oligarcy", "Autocracy", "Monarchy"],
      answer: 2
    },
    {
      question: "What is the richest country in the world?",
      options: ["Dubai", "USA", "Qatar", "Egypt"],
      answer: 2
    }
  
  ];
  startQuiz();
};
function goToEnt(){
  questions = [
    {
      question: "Who is presently the highest paid Actor?",
      options: ["Kevin Hart", "Chris Hemsworth", "Dywane Johnson", "Josh2funny"],
      answer: 2
    },
  
    {
      question: "What is the longest Anime?",
      options: ["Ben 10", "Naruto", "Pokemon", "Sazae-san"],
      answer: 3
    },
    {
      question: "Which of these does not belong to Nickelodeon?",
      options: ["The last Air Bender", "Sponge Bob", "Big Mouth", "Ninja Turtles"],
      answer: 2
    },
  
    {
      question: "KUWTK first aired in what year?",
      options: ["2007", "2008", "2009", "2010"],
      answer: 0
    },
    {
      question: "In what Country did the 'Don't leave me' challenge start?",
      options: ["Ghana", "Nigeria", "USA", "Cotonou"],
      answer: 1
    },
    {
      question: "The drama Money Hiest is from which Country?",
      options: ["Mexico", "Spain", "Singapore", "France"],
      answer: 1
    },
    {
      question: "who owns E! cable?",
      options: ["Walt Disney", "Paramount", "Comcast", "DSTV"],
      answer: 2
    },
    {
      question: "How many people make up the carters?",
      options: ["3", "4", "2", "5"],
      answer: 2
    },
    {
      question: "In the movie Merlin, what is Merlin's Druid name?",
      options: ["Emris", "Emryys", "Emrys", "Gauis"],
      answer: 2
    },
    {
      question: "What football club does Bentancur play for?",
      options: ["Arsenal", "Man U", "Juventus", "Liverpool"],
      answer: 2
    }
  
  ];
  startQuiz();
}
function goToFash(){
   questions = [
    {
      question: "Fashion many classes of food are there?",
      options: ["gown", "skirt", "top", "shirt"],
      answer: 2
    },
  
    {
      question: "trends is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "Closet is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
  
    {
      question: "season is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "redcarpet is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "walkay is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "fashionshow is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "yeezy is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "fenty is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "puma is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    }
  
  ];
  startQuiz();
}
function goToFin(){
  questions = [
    {
      question: "finance many classes of food are there?",
      options: ["gown", "skirt", "top", "shirt"],
      answer: 2
    },
  
    {
      question: "equity is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "risk is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
  
    {
      question: "consultancy is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "forbes is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "baml is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "penny is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "mortgage is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "audit is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "merger is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    }
  
  ];
  startQuiz();
};

function goTosci(){
  questions = [
    {
      question: "science many classes of food are there?",
      options: ["gown", "skirt", "top", "shirt"],
      answer: 2
    },
  
    {
      question: "biology is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "neuro is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
  
    {
      question: "medicine is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "plants is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "pharmacy is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "reproduction is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "physics is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "chemistry is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    },
    {
      question: "applied physics is the center of the earth located?",
      options: ["Ethiopia", "Tanzania", "America", "Turkey"],
      answer: 3
    }
  
  ];
  startQuiz();
}

function goToArt(){

  questions = [
    {
      question: "The most expensive Art work in the world is?",
      options: ["Monalisa", "Salvator Mundi", "Van Gogh", "Abuzz"],
      answer: 1
    },
  
    {
      question: "Who painted the Monalisa?",
      options: ["Leonardo Davinci", "Pablo Picasso", "Micheal Angelo", "Donatello"],
      answer: 0
    },
    {
      question: "Who is the most successful painter of all time?",
      options: ["Micheal Angelo", "Pablo Picasso", "Leonardo Davinci", "Van Gogh"],
      answer: 2
    },
  
    {
      question: "Who stole the Monalisa?",
      options: ["Marcus Landis", "Vincenzo Peruggia", "Anna Delvey", "Glafira Rosales"],
      answer: 1
    },
    {
      question: "When was the Nok culture first discovered?",
      options: ["1918", "1928", "1938", "1948"],
      answer: 1
    },
    {
      question: "Who crafted the Festac'77 mask?",
      options: ["Obakpolor Ogueven", "Esohe Oresegun", "Peju Alatise", "Erhabor Emokpae"],
      answer: 3
    },
    {
      question: "The most expensive pigment is",
      options: ["Red", "Yellow", "Blue", "Purple"],
      answer: 2
    },
    {
      question: "The rarest color is",
      options: ["Gold", "Brazilwood", "Lapus Lazuli", "Dragon's Blood"],
      answer: 2
    },
    {
      question: "Who carved Cupid?",
      options: ["Van Gogh", "Micheal Angelo", "Voluptas", "Aphrodite"],
      answer: 1
    },
    {
      question: "Who painted the picture of the last supper?",
      options: ["Leonardo Davinci", "Salvator Mundi", "Voluptas", "Santa Maria"],
      answer: 0
    }
  
  ];
  startQuiz();
}

function goToFood(){
  questions = [
    {
      question: "Tacos is native to what Country?",
      options: ["Italy", "Spain", "India", "Mexico"],
      answer: 3
    },
  
    {
      question: "Chocolate is a ____",
      options: ["Fruit", "Candy", "Vegetable", "Staple"],
      answer: 2
    },
    {
      question: "What flavor is black in color?",
      options: ["Vanilla", "Chocolate", "Liquorice", "Beetroot"],
      answer: 2
    },
  
    {
      question: "What is the most expensive flavor in the world?",
      options: ["Cardamom", "Saffron", "Vanilla", "Gold Caviar"],
      answer: 1
    },
    {
      question: "Which country eats the spiciest food?",
      options: ["India", "Nigeria", "Thailand", "Korea"],
      answer: 2
    },
    {
      question: "French fries originated from ___?",
      options: ["Belgium", "Italy", "France", "Mexico"],
      answer: 0
    },
    {
      question: "The most bitter fruit is ___",
      options: ["Bitter Melon", "Bitter Kola", "Bitter Nut", "Bitter Leaf"],
      answer: 0
    },
    {
      question: "Most consumed food in the world?",
      options: ["Meat", "Rice", "Vegetable", "Cereal"],
      answer: 1
    },
    {
      question: "The first restaurant was opened in?",
      options: ["Italy, 1576", "Paris, 1765", "America, 1657", "China, 1452"],
      answer: 1
    },
    {
      question: "What is KFC's secret ingredient?",
      options: ["Chicken", "Hot Sauce", "Paprika", "White Pepper"],
      answer: 3
    }
  
  ];
  startQuiz();
  
}
