// To find all the Elements

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("qimage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timegauge = document.getElementById("timegauge");

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
 