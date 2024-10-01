let questions = [
    "Q1: What is the capital city of Scotland?",
    "Q2: What is the capital city of Ireland?",
    "Q3: What is the capital city of Peru?"
];

let answers = [
    "A1: Edinburgh",
    "A2: Dublin",
    "A3: Lima"
]

function setQuestions() {
    for(var i=0; i < questions.length; i++)   {
        document.getElementById("q"+i).textContent = questions[i];
    }
}



function checkAnswers() {

    console.log('answer check intiated')

    let allAnsNode = Array.from(document.querySelectorAll('input')); // get a node list for all answers and convert it into an array

    let allAnsVal = allAnsNode.map(input => input.value); // map the values of the input fields into an array

    console.log(allAnsNode);
    console.log(allAnsVal);

    for ( let i=1; i<allAnsVal.length ; i++ )  {
       let check[i] = allAnsVal[i].toLowerCase === answers[i] ;
       console.log(check);
    }
    
}