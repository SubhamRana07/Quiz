const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Dollar", "Yuan", "Yen", "Euro"],
        answer: "Yen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which gas is responsible for the Earth's ozone layer?",
        options: ["Oxygen", "Methane", "Ozone", "Chlorofluorocarbons"],
        answer: "Ozone"
    },
    {
        question: "In which year did Christopher Columbus first arrive in the Americas?",
        options: ["1492", "1620", "1776", "1812"],
        answer: "1492"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Skin"],
        answer: "Skin"
    }
];

let currentQuestionIndex = 0;
let timer = 30;
let score = 0;

function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const options = document.querySelectorAll(".option");

    questionText.textContent = questions[currentQuestionIndex].question;

    options.forEach((option, index) => {
        option.textContent = questions[currentQuestionIndex].options[index];
    });
}
function updateTimer() {
    timer--;
    document.getElementById("timer").innerHTML = "Time remaining: " + timer + " seconds";
    if (timer <= 0) {
      alert("Time's up!");
      handleSubmit();
    }
}
setInterval(updateTimer, 1000);

function checkAnswer(selectedOption) {
    const userAnswer = selectedOption.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultText = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultText.textContent = "Correct!";
        score++;
    } else {
        resultText.textContent = "Incorrect. The correct answer is: " + correctAnswer;
    }

    disableOptions();
    showNextButton();
}

function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.disabled = true;
    });
}

function showNextButton() {
    const nextButton = document.getElementById("next-btn");
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        resetQuiz();
    } else {
        endQuiz();
    }
}

function resetQuiz() {
    const options = document.querySelectorAll(".option");
    const resultText = document.getElementById("result");
    const nextButton = document.getElementById("next-btn");

    options.forEach((option) => {
        option.disabled = false;
    });

    resultText.textContent = "";
    nextButton.style.display = "none";
}

function endQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h1>Quiz Completed</h1><p>Your Score: ${score}/${questions.length}</p>`;
}

loadQuestion();
