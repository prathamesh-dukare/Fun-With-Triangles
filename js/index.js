const angleList = document.querySelectorAll(".angle")
const checkButton = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-Div")

checkButton.addEventListener("click", function checkButtonHandler() {

    let isAngle = checkForAngle(angleList[0].value, angleList[1].value, angleList[2].value);
    if (isAngle) {
        outputDiv.innerText = "Yes , Its a Triangle🔺"
    } else {
        outputDiv.innerText = "No , Its Not a Triangle🔺"
    }
})

function checkForAngle(a, b, c) {
    if ((a == 180 || b == 180 || c == 180) || ((a == 90 && b == 90) || (a == 90 && c == 90) || (b == 90 && c == 90))) {
        return false
    } else {
        const sumofAngles = Number(a) + Number(b) + Number(c)
        if (sumofAngles === 180) {
            return true
        } else { return false }
    }
}