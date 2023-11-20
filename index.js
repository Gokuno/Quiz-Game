
const quizData = [
    {question: 'How far is the moon from the Earth?',
     anwser: [
        {text: '384,000 Km', correct: true},
        {text: '210,000 Km', correct: false},
        {text: '384,000 Miles', correct: false},
        {text: '50,000 Miles', correct: false}
        ]
     },
     //Add more questions here...
    ];

    const questionContainer = document.getElementById('question-container');
    const anwserButtons = document.getElementById('anwser-buttons');
    const quizTimer = document.getElementById('quiz-timer');

    console.log('Hello');