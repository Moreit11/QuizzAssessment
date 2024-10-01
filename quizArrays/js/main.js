let questions = [
    "Q1: What is the capital city of Scotland?",
    "Q2: What is the capital city of Ireland?",
    "Q3: What is the capital city of Peru?"
];

let answers = [
    "Edinburgh",
    "Dublin",
    "Lima"
]

function setQuestions() {
    for(var i=0; i < questions.length; i++)   {
        document.getElementById("q"+i).textContent = questions[i]
    }
}

function checkAnswers() {

    let allAnsVal = Array.from(document.querySelectorAll('input')).map(input => input.value); // get a node list for all answers and convert it into an array
    let results = [] //Declare empty array to store results
    let score = 0

    for ( let i = 0; i < allAnsVal.length ; i++ )  {
        results[i] = allAnsVal[i].toLowerCase() === answers[i].toLowerCase() 

        if(results[i]) {
            score ++
            document.getElementById('q'+i).classList.add('right')
            document.getElementById('aq'+i).classList.add('right')
            
        }
            else {
                document.getElementById('q'+i).classList.add('wrong')
                document.getElementById('aq'+i).classList.add('wrong')
            }
    }
    document.getElementById('score').textContent = 'Your Score is ' + score
}