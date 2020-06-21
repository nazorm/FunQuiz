var questionList = [
  
     questionTwo = {
        question: "where is Narobi?",
        opttion1: "two one",
        option2: "two two",
        option3: "two three",
        option4: "two four",

    },
     questionThree = {
        question: "where is texas?",
        opttion1: "three one",
        option2: "three two",
        option3: "three three",
        option4: "three four",

    },
     questionFour = {
        question: "where is Kenya?",
        opttion1: "four one",
        option2: "four two",
        option3: "four three",
        option4: "four four",

    },
];

var pageList = questionList; 
var  currentPage = 1;
var numberPerPage = 1;
var numberOfPages = 0;

















































/*function getNumberOfPages(){
    return Math.ceil(questionList.length / numberPerPage);
}

function submitBtn(){
    currentPage += 1;
    loadList();
};

function previousBtn(){
    currentPage -=1;
    loadList();
}

function loadList(){
    var begin = ((currentPage -1) * numberPerPage);
    var end = begin + numberPerPage;

pageList = questionList.slice(begin, end);
drawList();
check();
};

function drawList(){
    document.querySelector(".newPage").innerHTML = "";
    for (i = 0; i<pageList.length; i++){
        document.querySelector(".newPage").innerHTML  += pageList[i] + "<br/>";

    }
}

function check(){
        document.querySelector(".nextPage").disabled = currentPage == numberOfPages ? true : false;
        document.querySelector(".previousPage").disabled = currentPage == 1 ? true : false;
}*/