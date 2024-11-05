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
  console.log(question.options.length)
  for (let i = 0; i < question.options.length; i++) {
    document.getElementById('option-' + i).value = question.options[i];
    document.getElementById('option-text-' + i).textContent = question.options[i]; 
    console.log(question.options[i]);

  }
}







//   fetch(templatePath)
//     .then(response => response.text())
//     .then(html => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");
//       const questionContent = doc.body.innerHTML;
      
//       document.getElementById('question-container').innerHTML = questionContent;

//       // Display question content
//       displayQuestionContent(currentArray[currentIndex]);
//     })
//     .catch(error => console.error("Error loading template:", error));
// }

// /**/
// function displayQuestionContent(question) {
//   document.getElementById('question-text').innerText = question.question;

//   if (question.options) {
//     question.options.forEach((option, index) => {
//       const optionElement = document.getElementById(`option-${index + 1}`);
//       if (optionElement) optionElement.innerText = option;
//     });
//   }
// }


// /*
// function nextQuestion() {
//   currentIndex++;

//   if (currentIndex >= currentArray.length) {
//     // Move to the next array
//     if (currentArray === questSing) {
//       currentArray = questMult;
//     } else if (currentArray === questMult) {
//       currentArray = questOpen;
//     } else {
//       // End the quiz if no more arrays
//       endQuiz();
//       return;
//     }
    
//     // Reset index for the new array
//     currentIndex = 0;
//   }

//   // Load the next question
//   loadQuestion();
// }

// function endQuiz() {
//   console.log("Quiz completed!");
//   // Show final score or summary here
// }