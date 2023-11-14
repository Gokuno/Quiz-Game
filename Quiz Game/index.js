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

  // In script.js

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
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
  // Handle user's answer
  // Check if the answer is correct
  // Display feedback to the user

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion(quizData[currentQuestionIndex]);
  } else {
    // Quiz is finished
    // Display a summary or redirect to a results page
    alert('Quiz completed!');
  }
}

// Event listener for the "Next" button
nextButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
startQuiz();