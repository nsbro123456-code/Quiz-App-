// ==========================================
// CONCEPT 1: QUIZ DATA (Aapke 10 Sawaal)
// ==========================================
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0,
        hint: "You dont have hint"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        correct: 1,
        hint: "Your hint is Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["NH4", "CO2", "O2", "H2O"],
        correct: 3,
        hint: "You dont have hint"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correct: 2,
        hint: "You dont have hint"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2,
        hint: "You dont have hint"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correct: 1,
        hint: "You dont have hint"
    },
    {
        question: "How many time zones are there in Russia?",
        options: [9, 11, 12, 13],
        correct: 1,
        hint: "You dont have hint"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic"],
        correct: 3,
        hint: "You dont have hint"
    },
    {
        question: "In what year did the Titanic sink in the Atlantic Ocean?",
        options: [1910, 1912, 1914, 1916],
        correct: 1,
        hint: "You dont have hint"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
        correct: 0,
        hint: "You dont have hint"
    }
];
// ==========================================
// CONCEPT 2: DOM ELEMENTS SELECTION
// ==========================================
const questionText = document.getElementById('question-text');
const optionsContainer = document.querySelector('.options-container');
const currentQEl = document.getElementById('current-q');
const progress = document.getElementById('progress');
const hintBtn = document.getElementById('hint-btn');
const nextBtn = document.getElementById('next-btn');
// ==========================================
// CONCEPT 3: STATE MANAGEMENT (Tracking Variables)
// ==========================================
let currentQuestionIndex = 0;
let score = 0;
let hintUsed = false;
// ==========================================
// CONCEPT 4: FUNCTIONS (Sawaal Load Karna)
// ==========================================
function loadQuestion(){
    optionsContainer.innerHTML = "";
    let currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    currentQEl.innerText = currentQuestionIndex + 1;
    currentQuestion.options.forEach((optionText, Index) => {
    const button = document.createElement('button');
    button.innerText = optionText;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectOption(Index, currentQuestion.correct));
    optionsContainer.appendChild(button);
    updateProgressBar();
});
}
loadQuestion();
// ==========================================
// CONCEPT 5: SELECT OPTION (Jawab Check Karna)
// ==========================================
function selectOption(slectedIndex, correctIndex){
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    if(slectedIndex === correctIndex){
        buttons[slectedIndex].classList.add('correct');
        score++;
    }else{
        buttons[slectedIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }
    buttons.forEach(btn => btn.disabled = true);
    nextBtn.disabled = false;
}
// ==========================================
// CONCEPT 6: NEXT BUTTON (Agla Sawaal Load Karna)
// ==========================================
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length){
        loadQuestion();
        nextBtn.disabled = true;
    }else{
        alert("Quiz Finished! Your Result is " + score + "/" + quizData.length);
    }
});
// ==========================================
// CONCEPT 7: PROGRESS BAR (Patti Aage Badhana)
// ==========================================
function updateProgressBar(){
    let progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progress.style.width = progressPercentage + "%";
}
// ==========================================
// CONCEPT 8: HINT BUTTON (Ishara Dikhana)
// ==========================================
hintBtn.addEventListener('click', () => {
    alert(quizData[currentQuestionIndex].hint);
    hintUsed = true;
    hintBtn.disabled = false;
});