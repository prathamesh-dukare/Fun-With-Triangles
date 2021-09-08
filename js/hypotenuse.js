const baseOfTriangle = document.querySelector("#base");
const heightOfTriangle = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculate-btn");
const outputDiv = document.querySelector("#output-Div");

calculateBtn.addEventListener("click",function calculateBtnHandler(){
    console.log(baseOfTriangle,heightOfTriangle,outputDiv)
    let hypotenuse = Math.sqrt(Number(baseOfTriangle.value)**2 + Number(heightOfTriangle.value)**2)
    outputDiv.innerText = `Hypotenuse is ${hypotenuse} Unit`;
})