# Quiz Game

A simple quiz game built with HTML, CSS, and JavaScript. The game presents a series of questions with multiple-choice answers, and the player can select an answer to see if it's correct.

## Features

- Multiple-choice questions
- Immediate feedback on answers
- Keeps track of correct answers
- Simple and responsive design

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To run the quiz game locally, follow these steps:

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.
3. Enjoy the quiz!

## File Structure

/quiz-game │ 
    ├── index.html # Main HTML file 
    ├── index.js # JavaScript file containing quiz logic 
    └── styles.css # CSS file for styling

### `index.html`

This is the main HTML file that sets up the structure of the quiz game.

### `index.js`

This JavaScript file contains the logic for the quiz, including the questions and answers, as well as the functions to handle the quiz flow.

### `styles.css`

This CSS file styles the quiz game, making it visually appealing and responsive.

## How to Add More Questions

You can easily add more questions to the quiz by modifying the `quizData` array in the `index.js` file. Each question should follow this format:

```javascript
{
  question: 'Your question here?',
  answers: [
    { text: 'First answer', correct: false },
    { text: 'Second answer', correct: true },
    { text: 'Third answer', correct: false },
    { text: 'Fourth answer', correct: false }
  ]
}
