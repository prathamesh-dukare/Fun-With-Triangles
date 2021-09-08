const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-Div");
let answersArray = ["Right angled", "90°", "obtuse triangle", "Equilateral triangle", "Concurrent"];

submitBtn.addEventListener("click", function submitAnswerBtnHandler() {
    let lengthOfResults = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        lengthOfResults = lengthOfResults + 1
    }
    if (lengthOfResults === 5) {
        let score = 0;
        let index = 0;

        for (let value of formResults.values()) {
            if (value === answersArray[index]) {
                score = score + 1;
                console.log("Correct")
            } else { console.log("wrong") }
            index = index + 1;
        }
        outputDiv.innerText = `Your score is: ${score}`;
    } else {
        outputDiv.innerText = `Please Solve All Questions!`;
    }
});