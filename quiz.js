var a = document.querySelector(".interestSection");
var b = document.querySelector(".avatar");
var quizSection = document.querySelector(".quizSection");
var lastPage = document.querySelector(".finalPage");
var text = document.querySelector(".pointEmoji");
var prevbtn = document.querySelector(".prevbtn");

function entryBtn() {
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
    answer: 2,
  },

  {
    question: "where is the center of the earth located?",
    options: ["Ethiopia", "Tanzania", "America", "Turkey"],
    answer: 3,
  },

  {
    question: "who was the first woman on Earth?",
    options: ["Medusa", "Athena", "Pandora", "Rhea"],
    answer: 2,
  },
  {
    question: "where did the first man originate from?",
    options: ["Cameroon", "Ethiopia", "Egypt", "Isreal"],
    answer: 1,
  },
  {
    question: "what is the loudest animal on Earth?",
    options: ["Elephant", "Sperm Whale", "Rhinoceros", "Hyena"],
    answer: 1,
  },
  {
    question: "How many ribs are in the human body?",
    options: ["9", "10", "14", "24"],
    answer: 3,
  },
  {
    question: "what is the most common colour of toilet paper in France?",
    options: ["Yellow", "White", "Pink", "Grey"],
    answer: 2,
  },
  {
    question: "The offspring of a Donkey and Zibra is called what?",
    options: ["kid", "Zeedonk", "Zibling", "Zeebudonk"],
    answer: 1,
  },
  {
    question: "what year did the French Revolution end?",
    options: ["4th of July", "1900", "1700", "1799"],
    answer: 3,
  },
  {
    question: "What is the full meaning of MAC in Apple?",
    options: ["Macaroni", "Macaroni", "Macintosh", "Steve Jobs"],
    answer: 2,
  },
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
    if (lastPage.style.display === "block") {
      lastPage.style.display = "none";
    } else {
      lastPage.style.display = "block";
    }
    if (point > 5) {
      text.innerHTML = `You got ${point} points 😊`;
    } else {
      text.innerHTML = `You got ${point} points 😆`;
    }

    return;
  }
  updateQuestion();
}
function playAgain() {
  lastPage.style.display = "none";
  quizSection.style.display = "none";
}

function handlePrevbtn() {
  currentQuestion -= 1;
  if (currentQuestion <= 0) {
    quizSection.style.display = "none";
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

function goToEdu() {
  startQuiz();
}
function goToPol() {
  questions = [
    {
      question: "How long is the tenure of the president of france?",
      options: ["4 years", "6 years", "5 years", "3 years"],
      answer: 2,
    },

    {
      question: "Who is the first elected African female president?",
      options: [
        "Ellen_Johnson_Sirleaf",
        "Joyce Banda",
        "Specioza Kazibwe",
        "Sylvie Kinigi",
      ],
      answer: 0,
    },
    {
      question: "What is Africa's newest country?",
      options: [
        "Azania",
        "Tanzania",
        "South Sudan",
        "Central African Republic",
      ],
      answer: 2,
    },

    {
      question: "How many years did the division of Korea take?",
      options: ["1", "2", "3", "4"],
      answer: 2,
    },
    {
      question: "Which of these countries is not a world power?",
      options: ["USA", "China", "Russia", "Isreal"],
      answer: 3,
    },
    {
      question: "Who is the longest serving Public Servant?",
      options: [
        "Muammar al-Gaddafi",
        "Sarkis Tatigian",
        "Robert Mugabe",
        "Arjun Anaisha",
      ],
      answer: 1,
    },
    {
      question: "When was the Soviet Union formed?",
      options: ["1920", "1921", "1922", "1993"],
      answer: 2,
    },
    {
      question: "The Berlin Conference is also known as?",
      options: [
        "German Conference",
        "Congo Conference",
        "UN Conference",
        "Saudi Conference",
      ],
      answer: 1,
    },
    {
      question: "What form of gorvenment is practiced in North Korea?",
      options: ["Aristocracy", "Oligarcy", "Autocracy", "Monarchy"],
      answer: 2,
    },
    {
      question: "What is the richest country in the world?",
      options: ["Dubai", "USA", "Qatar", "Egypt"],
      answer: 2,
    },
  ];
  startQuiz();
}
function goToEnt() {
  questions = [
    {
      question: "Who is presently the highest paid Actor?",
      options: [
        "Kevin Hart",
        "Chris Hemsworth",
        "Dywane Johnson",
        "Josh2funny",
      ],
      answer: 2,
    },

    {
      question: "What is the longest Anime?",
      options: ["Ben 10", "Naruto", "Pokemon", "Sazae-san"],
      answer: 3,
    },
    {
      question: "Which of these does not belong to Nickelodeon?",
      options: [
        "The last Air Bender",
        "Sponge Bob",
        "Big Mouth",
        "Ninja Turtles",
      ],
      answer: 2,
    },

    {
      question: "KUWTK first aired in what year?",
      options: ["2007", "2008", "2009", "2010"],
      answer: 0,
    },
    {
      question: "In what Country did the 'Don't leave me' challenge start?",
      options: ["Ghana", "Nigeria", "USA", "Cotonou"],
      answer: 1,
    },
    {
      question: "The drama Money Hiest is from which Country?",
      options: ["Mexico", "Spain", "Singapore", "France"],
      answer: 1,
    },
    {
      question: "who owns E! cable?",
      options: ["Walt Disney", "Paramount", "Comcast", "DSTV"],
      answer: 2,
    },
    {
      question: "How many people make up the carters?",
      options: ["3", "4", "2", "5"],
      answer: 2,
    },
    {
      question: "In the movie Merlin, what is Merlin's Druid name?",
      options: ["Emris", "Emryys", "Emrys", "Gauis"],
      answer: 2,
    },
    {
      question: "What football club does Bentancur play for?",
      options: ["Arsenal", "Man U", "Juventus", "Liverpool"],
      answer: 2,
    },
  ];
  startQuiz();
}
function goToFash() {
  questions = [
    {
      question: "What are the long, hanging flaps on the back of a tuxedo jacket?",
      options: ["Flaps", "Under collar", "Tails", "Collar roll"],
      answer: 2,
    },

    {
      question: "What type of headgear is a Stetson?",
      options: ["Fedora", "Panama hat", "Cowboy hat", "Flat cap"],
      answer: 2,
    },
    {
      question: "What does the french fashion term 'pret a porter' translate to in English?",
      options: ["Trousers(for work)", "Wash and wear", "an evening gown", "Ready to wear"],
      answer: 3,
    },

    {
      question: "A form of women's loose gown worn at night to bed is?",
      options: ["Night wear", "Night gown", "Negligee", "lingerie"],
      answer: 2,
    },
    {
      question: "What is the name of a brooch or ring with a portrait profile carved in relief?",
      options: ["Cravat", "Cameo", "Poncho", "Argyle"],
      answer: 1,
    },
    {
      question: "What is the name of the dark green precious stone used to make ornaments?",
      options: ["Jade", "Savile Row", "Cravat", "Culottes"],
      answer: 0,
    },
    {
      question: "Red soled shoes are the signature of which fashion designer?",
      options: ["Christian Louboutin", "Chanel", "Signature", "Givenchy"],
      answer: 0,
    },
    {
      question: "What do you call women's knee-length trousers that are cut with full legs to look like skirt?",
      options: ["Struts", "Savile Row", "Sporran", "Culottes"],
      answer: 3,
    },
    {
      question: "Which designer is famous for launching the mini skirt?",
      options: ["John Galliano", "Mary Quant", "Alexander McQueen", "Karl Lagerfeld"],
      answer: 1,
    },
    {
      question: "puho invented the little black dress?",
      options: ["Coco Chanel", "Christian Dior", "Louis Vuitton", "Alexander McQueen"],
      answer: 0,
    },
  ];
  startQuiz();
}
function goToFin() {
  questions = [
    {
      question: "The 'D' in EBITDA means?",
      options: ["Debit", "Depreciation", "Document", "Deposit"],
      answer: 1,
    },

    {
      question: "Equity also means?",
      options: ["Net Bonds", "Net Stock", "Net Assets", "Net Liabilities"],
      answer: 2,
    },
    {
      question: "Which of these is not a type of risk?",
      options: ["Debit risk", "Credit risk", "Interest risk", "Liquidity risk"],
      answer: 0,
    },

    {
      question: "Which of these is not a big 4?",
      options: ["EY", "Deloitte", "KPMG", "Mckensey"],
      answer: 3,
    },
    {
      question: "Which of these is not an Asset?",
      options: ["Stock", "Incventory", "Car", "House"],
      answer: 2,
    },
    {
      question: "Which of these is not a way to calculate GDP?",
      options: ["Expenditure", "Production", "Income", "Natural resource"],
      answer: 3,
    },
    {
      question: "Which of these is not a phase of Audit?",
      options: ["Research", "Report", "Planning", "Follow Up"], 
      answer: 0,
    },
    {
      question: "Which of these is not a type of Merger and Acquisition?",
      options: ["Horizontal", "Perpendicular", "Vertical","Concentric"],
      answer: 1,
    },
    {
      question: "Where is wall street?",
      options: ["Newyork", "Washington DC", "Birmingham", "Turkey"],
      answer: 0,
    },
    {
      question: "Who is the richest banker in the world?",
      options: ["Nathaniel Rothschild", "Gorge Lemann", "Joseph Safra", "James Lee"],
      answer: 1,
    },
  ];
  startQuiz();
}

function goTosci() {
  questions = [
    {
      question: "Humans and Chimpanzees share roughly ho much DNA?",
      options: ["97%", "98%", "99%", "100%"],
      answer: 1,
    },

    {
      question: "What is the most abundant gas in the Earth's atmosphere?",
      options: ["Argon", "Oxygen", "Nitrogen", "Carbon dioxide"],
      answer: 2,
    },
    {
      question: "What is the bigest planet in our solar system?",
      options: ["Venus", "Mercury", "Jupiter", "Mars"],
      answer: 2,
    },

    {
      question: "Which two planets lack moons?",
      options: ["Neptune and Uranus", "Saturn and Uranus", "Jupiter and Neptune", "Mercury and Venus"],
      answer: 3,
    },
    {
      question: "How many wings does a Mosquito have?",
      options: ["2", "3", "4", "5"],
      answer: 0,
    },
    {
      question: "What part of a human body is the Mandible?",
      options: ["Lacrimal bones", "Nasal bones", "Lower jawbone", "Zygomatic bones"],
      answer: 2,
    },
    {
      question: "How many ribs do you have?",
      options: ["9", "10", "24", "25"],
      answer: 2,
    },
    {
      question: "Who invented periodic table?",
      options: ["Glenn T", "Dmitri Mendeleev", "John Newlands", "Hinrichs"],
      answer: 1,
    },
    {
      question: "Decibel is the unit used for?",
      options: ["Speed of light", "Intensity of heat", "Intensity of sound", "Radio wave frequency"],
      answer: 2,
    },
    {
      question: "To an Astronaut in a spacecraft, the sky appears to be?",
      options: ["Blue", "Red", "White", "Dark"],
      answer: 3,
    },
  ];
  startQuiz();
}

function goToArt() {
  questions = [
    {
      question: "The most expensive Art work in the world is?",
      options: ["Monalisa", "Salvator Mundi", "Van Gogh", "Abuzz"],
      answer: 1,
    },

    {
      question: "Who painted the Monalisa?",
      options: [
        "Leonardo Davinci",
        "Pablo Picasso",
        "Micheal Angelo",
        "Donatello",
      ],
      answer: 0,
    },
    {
      question: "Who is the most successful painter of all time?",
      options: [
        "Micheal Angelo",
        "Pablo Picasso",
        "Leonardo Davinci",
        "Van Gogh",
      ],
      answer: 2,
    },

    {
      question: "Who stole the Monalisa?",
      options: [
        "Marcus Landis",
        "Vincenzo Peruggia",
        "Anna Delvey",
        "Glafira Rosales",
      ],
      answer: 1,
    },
    {
      question: "When was the Nok culture first discovered?",
      options: ["1918", "1928", "1938", "1948"],
      answer: 1,
    },
    {
      question: "Who crafted the Festac'77 mask?",
      options: [
        "Obakpolor Ogueven",
        "Esohe Oresegun",
        "Peju Alatise",
        "Erhabor Emokpae",
      ],
      answer: 3,
    },
    {
      question: "The most expensive pigment is",
      options: ["Red", "Yellow", "Blue", "Purple"],
      answer: 2,
    },
    {
      question: "The rarest color is",
      options: ["Gold", "Brazilwood", "Lapus Lazuli", "Dragon's Blood"],
      answer: 2,
    },
    {
      question: "Who carved Cupid?",
      options: ["Van Gogh", "Micheal Angelo", "Voluptas", "Aphrodite"],
      answer: 1,
    },
    {
      question: "Who painted the picture of the last supper?",
      options: [
        "Leonardo Davinci",
        "Salvator Mundi",
        "Voluptas",
        "Santa Maria",
      ],
      answer: 0,
    },
  ];
  startQuiz();
}

function goToFood() {
  questions = [
    {
      question: "Tacos is native to what Country?",
      options: ["Italy", "Spain", "India", "Mexico"],
      answer: 3,
    },

    {
      question: "Chocolate is a ____",
      options: ["Fruit", "Candy", "Vegetable", "Staple"],
      answer: 2,
    },
    {
      question: "What flavor is black in color?",
      options: ["Vanilla", "Chocolate", "Liquorice", "Beetroot"],
      answer: 2,
    },

    {
      question: "What is the most expensive flavor in the world?",
      options: ["Cardamom", "Saffron", "Vanilla", "Gold Caviar"],
      answer: 1,
    },
    {
      question: "Which country eats the spiciest food?",
      options: ["India", "Nigeria", "Thailand", "Korea"],
      answer: 2,
    },
    {
      question: "French fries originated from ___?",
      options: ["Belgium", "Italy", "France", "Mexico"],
      answer: 0,
    },
    {
      question: "The most bitter fruit is ___",
      options: ["Bitter Melon", "Bitter Kola", "Bitter Nut", "Bitter Leaf"],
      answer: 0,
    },
    {
      question: "Most consumed food in the world?",
      options: ["Meat", "Rice", "Vegetable", "Cereal"],
      answer: 1,
    },
    {
      question: "The first restaurant was opened in?",
      options: ["Italy, 1576", "Paris, 1765", "America, 1657", "China, 1452"],
      answer: 1,
    },
    {
      question: "What is KFC's secret ingredient?",
      options: ["Chicken", "Hot Sauce", "Paprika", "White Pepper"],
      answer: 3,
    },
  ];
  startQuiz();
}
