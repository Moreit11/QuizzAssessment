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



let singleQuestions = questSing.length ;

console.log('Single Choice Questions: '+ singleQuestions);

let multQuestions = questMult.length ;

console.log('Multiple Choice Questions: '+ singleQuestions);

let openQuestions = questOpen.length ;

console.log('Open Questions: '+ singleQuestions);

sumQuestion = 

for (let i; i <  ; i++)
function getQuestions () {     
    fetch('/QuestionTemplates/multipleChoice.html')  
      .then(response => response.text())  
      .then(html => {    
        
        const parser = new DOMParser()     // Initialize the DOM to

        const doc = parser.parseFromString(html, "text/html")       // Parse the text into an HTML Document   
        
        const questionContent = doc.body.innerHTML     // Get the inner HTML of the body element of the parsed document

        document.getElementById('quizz-container').innerHTML = questionContent     // Insert the HTML into the div element    

        console.log(questionContent)
      })
  }
  


// function setQuestions() {
//     for(var i=0; i < questions.length; i++)   {
//         document.getElementById("q"+i).textContent = questions[i]
//     }
// }

// function checkAnswers() {

//     let allAnsVal = Array.from(document.querySelectorAll('input')).map(input => input.value); // get a node list for all answers and convert it into an array
//     let results = [] //Declare empty array to store results
//     let score = 0

//     for ( let i = 0; i < allAnsVal.length ; i++ )  {
//         results[i] = allAnsVal[i].toLowerCase() === answers[i].toLowerCase() 

//         if(results[i]) {
//             score ++
//             document.getElementById('q'+i).classList.add('right')
//             document.getElementById('aq'+i).classList.add('right')
            
//         }
//             else {
//                 document.getElementById('q'+i).classList.add('wrong')
//                 document.getElementById('aq'+i).classList.add('wrong')
//             }
//     }
//     document.getElementById('score').textContent = 'Your Score is ' + score
// }