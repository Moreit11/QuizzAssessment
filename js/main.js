let questSing = [
    ["Q1: What is the capital of Japan?", 'Tokyo', 'Seoul', 'Beijing', 'Bangkok'],
    ["Q2: Which continent is the Sahara Desert located on?", 'Africa', 'Asia', 'Australia', 'South America'],
    ["Q3: What is the tallest mountain in the world?", 'Mount Everest', 'K2', 'Kilimanjaro', 'Mont Blanc']
];

let questMult = [
    ["Q1: Which of the following countries are part of the United Kingdom?", 'England', 'Scotland', 'Wales', 'Ireland'],
    ["Q2: Which of these rivers flow through Egypt?", 'Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    ["Q3: Which countries border France?", 'Germany', 'Spain', 'Italy', 'Brazil']
];

let questOpen = [
    ["Q1: What is the longest river in the world?", 'Nile'],
    ["Q2: How many continents are there on Earth?", 'Seven'],
    ["Q3: What is the highest mountain in Africa?", 'Kilimanjaro']
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