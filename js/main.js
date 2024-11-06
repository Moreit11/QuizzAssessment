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
  if (qType === questSing || qType === questMult){ 
    for (let i = 0; i < currentItem.options.length; i++) {
      document.getElementById('option-' + i).value = currentItem.options[i];
      document.getElementById('option-text-' + i).textContent = currentItem.options[i];
    }
  }else {
    console.log('open question')
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

    let selectedOptions = document.querySelectorAll('input[name="option"]:checked');
    if (selectedOptions.length > 0){

      
    } else {
      console.log('Multiple Choice Validation Failed')
      return false
    }
  } else if (qType === questOpen) {
    // For open questions
    let answerInput = document.querySelector('input[name="open-answer"]').value.trim();
    if(answerInput.length > 0) { 

    } else if (answerInput.length <= 0) {
      console.log('single Choice Validation Failed')
      return false;
      
    }
  } else {
    console.log('single Choice Validation Failed')
    return false;
  }

storeInput();
}



function storeInput () {
  //create and object in Java script with the input passed from the form


  if (qType === questSing) {
    // For single-choice questions
    let userInput = document.querySelector('input[name="option"]:checked').value;
    localStorage.setItem(`${qTypeIndex}question-${qIndex}`, userInput);
  

  }else if (qType === questMult) {
    let selectedOptions = document.querySelectorAll('input[name="option"]:checked'); 
    let userInput = Array.from(selectedOptions).map(option => option.value); // Convert NodeList to array of values 
    localStorage.setItem(`${qTypeIndex}-question-${qIndex}`, JSON.stringify(userInput)); // Stringify the array
  } else if (qType === questOpen) {
    let userInput = document.querySelector('input[name="open-answer"]').value; 
    console.log('user imput stored : ' + userInput)
    localStorage.setItem(`${qTypeIndex}-question-${qIndex}`, JSON.stringify(userInput)); // Stringify the array
  } else {
    
  }
  showNextQuestion();
}
  
function showNextQuestion() {
  
  
    if(qIndex < qType.length -1 )  { // check where we are in the current array
      qIndex++;
      loadQuestion();
  }else if ( qIndex === qType.length - 1 ){ // runs if the current array is completed
    
    if( qTypeIndex < qTypeArray.length - 1) { // runs if there is arrays left to iterate through
      console.log('Move to next question type');
      qTypeIndex++;
      qIndex = 0;
      qType = qTypeArray[qTypeIndex];
      loadQuestion();

    }else if(qTypeIndex === qTypeArray.length -1){ // runns if all qType arrarys are completed
      console.log('quizz completed')
    }
   
  }
  else {
    console.log('quizz has been completed')

  }
}