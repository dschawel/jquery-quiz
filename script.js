// Questions
let quiz = [{
    prompt: "What is the capitol of Washington?",
    answers: ["Olympia", "Seattle", "Spokane", "Bellingham"],
    correctAnswerIndex: 0
}, {
    prompt: "When did Washington enter the United States?",
    answers: ["Nov. 11, 1887", "Nov. 11, 1888", "Nov 11, 1889", "Nov. 11, 1890"],
    correctAnswerIndex: 2
}, {
}, {
    prompt: "What is Washington State's motto??",
    answers: ["Seattle is cool", "Al-Ki, 1888", "SEI 28", "Washington My Home"],
    correctAnswerIndex: 1
}, {
    prompt: "What is the nickname of Washington?",
    answers: ["Amazon State", "Sound State", "Mountain State", "Evergreen State"],
    correctAnswerIndex: 3
}, {
    prompt: "What is the state tree of Washington?",
    answers: ["Western Hemlock", "Pine Tree", "Maple Tree", "Birch"],
    correctAnswerIndex: 0
}, {
    prompt: "What is the state marine animal of Washington?",
    answers: ["Seal", "Orca", "Trout", "Walrus"],
    correctAnswerIndex: 1
}, {
    prompt: "What is the state fruit of Washington",
    answers: ["Pear", "Strawberry", "Blueberry", "Apple"],
    correctAnswerIndex: 3
}, {
    prompt: "What is the state bird of Washington?",
    answers: ["Willow Goldfinch", "Hummingbird", "Blue Jay", "Cardinal"],
    correctAnswerIndex: 0
}, {
    prompt: "What is the state flower of Washington?",
    answers: ["Rose", "Carnation", "Petunia", "Coast Rhododendron"],
    correctAnswerIndex: 3
}, {
    prompt: "What is the state song of Washington?",
    answers: ["Washington, My Home", "Johnny Appleseed", "Washington On My Mind", "Hello Washington"],
    correctAnswerIndex: 0
}];

// Empty array for users answers
const userAnswers = []

// When start is clicked, show first question
const startGame = () => {
    var prompt = quiz[0].prompt;
    $('.start').click(() => {
            $('.question').text(prompt)
        })
}
startGame()

// When next is clicked, show second question and go through the rest of the questions
const nextQuestion = () => {
    // Trying to make the next question display when the nextQuestion button is clicked
    for (let i = 1; i < quiz.length; i++) {
    var prompt = quiz[1].prompt;
    $('.next').click(() => {
        $('.question').text(prompt)
        })
    }
}
nextQuestion()

// Setting first answer button
const buttonOne = () => {
    startGame()
    var answer = quiz[0].answers[0];
        // Tried putting the button answers to .load so they loaded when startGame() was called but that didn't work
    $('.buttonOne').click(() => {
        $('.buttonOne').text(answer)
    })
}
buttonOne()

// Setting second answer button
const buttonTwo = () => {
    startGame()
    var answer = quiz[0].answers[1];
    // Tried putting the button answers to .load so they loaded when startGame() was called but that didn't work
    $('.buttonTwo').click(() => {
        $('.buttonTwo').text(answer)
    })
}
buttonTwo()

// Setting third answer button
const buttonThree = () => {
    startGame()
    var answer = quiz[0].answers[2];
        // Tried putting the button answers to .load so they loaded when startGame() was called but that didn't work
    $('.buttonThree').click(() => {
        $('.buttonThree').text(answer)
    })
}
buttonThree()

// Setting fourth answer button
const buttonFour = () => {
    startGame()
    var answer = quiz[0].answers[3];
        // Tried putting the button answers to .load so they loaded when startGame() was called but that didn't work
    $('.buttonFour').click(() => {
        $('.buttonFour').text(answer)
    })
}
buttonFour()


