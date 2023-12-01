// In script.js

const quizData = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Paris', correct: true },
      { text: 'Madrid', correct: false },
      { text: 'Rome', correct: false }
    ]
  },
  {
    question: 'What is the capital of Mexico?',
    answers: [
      { text: 'Buenos Aires', correct: false },
      { text: 'Rio de Janeiro', correct: false },
      { text: 'Mexico City', correct: true },
      { text: 'Lima', correct: false }
    ]
  },
  // Add more questions here...
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let correctAnswersCounter = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  correctAnswersCounter = 0;
  showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtons.innerHTML = '';

  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  const isCorrect = checkAnswer(answer);

  if (isCorrect) {
    alert('Correct!');
    correctAnswersCounter++;
  } else {
    alert('Wrong Answer.');
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showQuestion(quizData[currentQuestionIndex]);
  } else {
    alert(`Quiz completed! You got ${correctAnswersCounter} out of ${quizData.length} correct answers.`);
  }
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = quizData[currentQuestionIndex].answers.find(answer => answer.correct);
  return selectedAnswer === correctAnswer;
}

// Start the quiz when the page loads
startQuiz();
