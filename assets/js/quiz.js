// To find all the Elements

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("qimage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timegauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scorecontainer");

// Create my questions (lägg till en img imSrc: "img.png")

let questions = [
    {
        question: "What band played and wrote the song Mamma Mia?",
        choiceA: "ABBA",
        choiceB: "Queen",
        choiceC: "Roxette",
        correct: "A"
    },
    {
        question: "What band had their last gig on a rooftop?",
        choiceA: "Iron Maiden",
        choiceB: "The Monkees",
        choiceC: "The Beatles?",
        correct: "C"
    },
];
 
// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER; 
let score = 0;

// render a question

function renderQuestion () {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// Start Quiz
function startQuiz () {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}



function renderProgress () {
    for(let qIndex = 0; qIndex<= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>"
    }
}

// counter render 

function renderCounter () {
    if (count <= questionTime) {
        counter.innerHTML = count; 
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0; 
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
    }
    
    }
}

// Check Answer 
function checkAnswer(answer) {
    if (answer == questions [runningQuestion].correct) {
        // Answer is correct 
        score++;
        // change progresscolor to green
        answerIsCorrect();
    } else {
        // Answer is incorrect 
        // change progresscolor to red
        answerIsWrong();
    } 
    count = 0; 
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }

}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backroundColor = "#0f0";
}
// answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backroundColor = "#f00";
}