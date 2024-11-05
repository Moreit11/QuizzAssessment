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


let qIndex = 0 ;
let qTypeIndex = 0;
const qTypeArray = [questSing, questMult, questOpen];
let qType = qTypeArray[qTypeIndex];

// function getNextArray() {
//   arrayIndex++; 
//   if (arrayIndex <= qTypeArray.length) { 
//     qType = qTypeArray[arrayIndex]; 
//     currentIndex = 0; 
//     return true; 
//   }
//     return false; }

function loadQuestion() {
  // fetching template for each question
  let tempPath 
  if (qType === questSing) {
    tempPath = 'QuestionTemplates/singleChoice.html'

  } else if (qType === questMult) {
    tempPath = 'QuestionTemplates/multipleChoice.html'

  } else if(qType === questOpen){ 
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

      document.getElementById('question-container').innerHTML = questionContent;

        displayQuestionContent(qType[qIndex]);
    })
}

function displayQuestionContent(currentItem) {
  // Display the question text
  document.getElementById('question-label').innerText = currentItem.question;
  for (let i = 0; i < currentItem.options.length; i++) {
    document.getElementById('option-' + i).value = currentItem.options[i];
    document.getElementById('option-text-' + i).textContent = currentItem.options[i];
  }
}




function validateInput() {

  if (qType === questSing) {
    // For single-choice questions
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption){

      
    } else {

      return false;
    }
  } else if (qType === questMult) {
    // For multiple-choice questions
    let selectedOption = document.querySelectorAll('input[name="option"]:checked');
    if (selectedOption){
      console.log('Multiple coice option has been selected')

    } else {

      return false
    }
  } else if (qType === questOpen) {
    // For open questions
    const answerInput = document.querySelector('input[name="open-answer"]').value.trim();
    if(answerInput.length > 0) { 

    } else if (answerInput.length <= 0) {
      return false
    }
  } else {

    return false;
  }

storeInput();
}



function storeInput () {
  //create and object in Java script with the input passed from the form


  if (qType === questSing) {
    // For single-choice questions
    let userInput = document.querySelector('input[name="option"]:checked').value;
    localStorage.setItem(`question-${qIndex}`, userInput);
  

  }else if (qType === questMult) {
    let userInput = document.querySelectorAll('input[name="option"]:checked').value;
    
  } else if (qType === questOpen) {
    
  } else {
    
  }
  showNextQuestion();
}
  
function showNextQuestion() {
  
  
    if(qIndex < qType.length -1 )  { // check where we are in the current array
      console.log('next question called - current question: ' + qIndex)
      qIndex++;
      loadQuestion();
  }else if ( qIndex = qType.length - 1 ){ // runs if the current array is completed
    loadQuestion();
    console.log('Move to next question type');
    qTypeIndex++;
    qIndex = 0;
  }
  else {
    console.log('quizz has been completed')

  }
}