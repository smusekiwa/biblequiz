const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreText = document.querySelector ('#score');

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

let time = 2;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScore();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

startCountdown();
class quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    get questionIndex(){
        return this. questions[this.questionIndex];
    }
    guess(answer){
        if (this .getQuestionIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++; 
}

isEnded(){
    return this.questionIndex === this.question.length;
}}

class Question {
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choces;
        this.answer = answer;
   }

   iscorrectAnswer(choice){
    return this.answer === choice;
   }
}

function displayQuestion(){
    if (quiz.isEnded()){
        showscores();
    } else {
        let questionElement = document.getElementById("question");
        questionElement.innerHTML =quiz.getQuestionIndex().text;
    }

    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
        let choiceElement = document.getElementById("choice" + 1);
        choiceElement.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
    }

    showProgress();
}

function showPrgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document. getElementId ("progress");
    progressElement.innerHTML = 
    `Question ${currentquestionNumber} of ${quiz.questions.length}`;
}

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'RESTART'
        startButton.classList.remove('hide')
      }
  }

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {question: 'What language is te old testament written in ?',
       answers: [
         { text: 'Greek', correct: false },
         { text: 'Jewish', correct: false },
         { text: 'Aramaic', correct: false },
         { text: 'Hebrew', correct: true }
       ]
     },
     {
       question: 'Where did Jesus grow up ?',
       answers: [
         { text: 'Damascus', correct: false },
         { text: 'Nazareth', correct: true },
         { text: 'Bethlehem', correct: false },
         { text: 'Jerusalem', correct: false }
       ]
     },
   { question: 'Whats the name of the king who sought to kill jesus as a baby ?',
       answers: [
         { text: 'King Herod', correct: true },
         { text: 'King Solomon', correct: false },
         { text: 'King David', correct: false },
         { text: 'King Saul', correct: false }
       ]
     },
   { question: '"You shall have no other Gods before me" is which of the ten commandments ?',
     answers: [
       { text: 'Seveth', correct: false },
       { text: 'First', correct: true },
       { text: 'Third', correct: false },
       { text: 'Tenth', correct: false }
     ]
   },
   { question: 'How many days did it take God to create the universe ?',
     answers: [
       { text: '10', correct: false },
       { text: '8', correct: false },
       { text: '7 ', correct: true },
       { text: '9', correct: false }
     ]
   },
   { question: 'Who is not part of the holy trinity ?',
     answers: [
       { text: 'Father', correct: false },
       { text: 'Holy Spirit', correct: false },
       { text: 'Son', correct: false },
       { text: 'Mary', correct: true }
     ]
   },

   ]