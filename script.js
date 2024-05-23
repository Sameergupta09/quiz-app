const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answer: [
            { text: "Shark" , correct: false},
            { text: "Blue whale" , correct: true},
            { text: "Elephant" , correct: false},
            { text: "ant" , correct: false},
        ]
    },

    {
        question: "Which is the largest continent in the world ?",
        answer: [
            { text: "Shark" , correct: false},
            { text: "Blue whale" , correct: true},
            { text: "Elephant" , correct: false},
            { text: "ant" , correct: false},
        ] 
    },

    {
        question: "file extention of python ?",
        answer: [
            { text: "Shark" , correct: false},
            { text: "Blue whale" , correct: true},
            { text: "Elephant" , correct: false},
            { text: "ant" , correct: false},
        ]
    },
    {
        question: "file extention of python ?",
        answer: [
            { text: "Shark" , correct: false},
            { text: "Blue whale" , correct: true},
            { text: "Elephant" , correct: false},
            { text: "ant" , correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0 ;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
startQuiz();