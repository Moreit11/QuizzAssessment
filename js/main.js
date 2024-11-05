let questSing = [
  { 
    question: "Q1: What is the capital of Japan?", 
    answer: 'Tokyo',
    options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok']
  },
  { 
    question: "Q2: Which continent is the Sahara Desert located on?", 
    answer: 'Africa',
    options: ['Africa', 'Asia', 'Australia', 'South America']
  },
  { 
    question: "Q3: What is the tallest mountain in the world?", 
    answer: 'Mount Everest',
    options: ['Mount Everest', 'K2', 'Kilimanjaro', 'Mont Blanc']
  }
];

let questMult = [
  { 
    question: "Q1: Which of the following countries are part of the United Kingdom?", 
    answer: ['England', 'Scotland', 'Wales'],
    options: ['England', 'Scotland', 'Wales', 'Ireland']
  },
  { 
    question: "Q2: Which of these rivers flow through Egypt?", 
    answer: ['Nile'],
    options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi']
  },
  { 
    question: "Q3: Which countries border France?", 
    answer: ['Germany', 'Spain', 'Italy'],
    options: ['Germany', 'Spain', 'Italy', 'Brazil']
  }
];

let questOpen = [
  { 
    question: "Q1: What is the longest river in the world?", 
    answer: 'Nile'
  },
  { 
    question: "Q2: How many continents are there on Earth?", 
    answer: 'Seven'
  },
  { 
    question: "Q3: What is the highest mountain in Africa?", 
    answer: 'Kilimanjaro'
  }
];


let currentArray = questSing ; 
let currentIndex = 0 ;
let arrayIndex = 0;
const questionArrays = [questSing, questMult, questOpen];

function getNextArray() {
  arrayIndex++; 
  if (arrayIndex < questionArrays.length) { 
    currentArray = questionArrays[arrayIndex]; 
    currentIndex = 0; 
    return true; 
  } 
    return false; }

function loadQuestion() {
  // fetching template for each question
  let tempPath 
  if (currentArray === questSing) {
    tempPath = 'QuestionTemplates/singleChoice.html'

  } else if (currentArray === questMult) {
    tempPath = 'QuestionTemplates/multipleChoice.html'

  } else if(currentArray === questOpen){ 
    tempPath = 'QuestionTemplates/openChoice.html'

  } else {
    console.log('Question template not defined')

  }
  /*RETRIEVE APPROPRIATE QUESTION TEMPLATE*/
  fetch(tempPath) 
    .then (response => response.text())
    .then (html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html")
      const questionContent = doc.body.innerHTML

      document.getElementById('question-container').innerHTML = questionContent

        displayQuestionContent(currentArray[currentIndex])
    })
}

function displayQuestionContent(question) {
  // Display the question text
  document.getElementById('question-label').innerText = question.question;
  for (let i = 0; i < question.options.length; i++) {
    document.getElementById('option-' + i).value = question.options[i];
    document.getElementById('option-text-' + i).textContent = question.options[i];
  }
}




function validateInput() {
  console.log('validation initiated')
  if (currentArray === questSing) {
    // For single-choice questions
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption){
      console.log(' Single coice option has been selected')
      
    } else {
      console.log('Single choice option has not been selected')
      return false;
    }
  } else if (currentArray === questMult) {
    // For multiple-choice questions
    let selectedOption = document.querySelectorAll('input[name="option"]:checked');
    if (selectedOption){
      console.log('Multiple coice option has been selected')

    } else {
      console.log('Single choice option has not been selected')
      return false
    }
  } else if (currentArray === questOpen) {
    // For open questions
    const answerInput = document.querySelector('input[name="open-answer"]').value.trim();
    if(answerInput.length > 0) { 

    } else if (answerInput.length <= 0) {
      return false
    }
  } else {
    console.log('Question type not defined');
    return false;
  }
console.log('validation complete')
storeInput();
}



function storeInput () {
  //create and object in Java script with the input passed from the form
  console.log('storing input initiated')

  if (currentArray === questSing) {
    // For single-choice questions
    let userInput = document.querySelector('input[name="option"]:checked').value;
    localStorage.setItem(`question-${currentIndex}`, userInput);
    console.log('input has been stored in the browser')

  }else if (currentArray === questMult) {
    let userInput = document.querySelectorAll('input[name="option"]:checked').value;
    
  } else if (currentArray === questOpen) {
    
  } else {
    console.log('Question type not defined');
  }
  showNextQuestion();
}
  
function showNextQuestion() {
  
  console.log('next question called')
    if(currentIndex < currentArray.length)  {
      currentIndex++;
      loadQuestion();
  }else if (getNextArray()){
    loadQuestion();
  }
  else {
    console.log('quizz has been completed')
  }
}