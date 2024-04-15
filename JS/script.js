let topic = prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math')

let question;
let answer;

if (topic === "1") {
    question = "რა არის რა არის typeof(5)?"
    answer = "number";
}
else if (topic === "2") {
    question = "შეიძლება თუ არა let-ის რედეკლალირებ"
    answer = "yes"
}
else if (topic === "3") {
    question = "რას აბრუნებს console.log(Math.floor(2.1))"
        answer = 2
}


let userAnswer = prompt(question);

if (userAnswer.toLowerCase() === answer) {
    alert("პასუხი არის სწორი")
}
else {
    alert("პასუხი არასწორია")
}

// ! if-ად გადავაკეთე