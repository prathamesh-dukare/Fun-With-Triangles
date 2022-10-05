const baseOfTriangle = document.querySelector("#base");
const heightOfTriangle = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculate-btn");
const outputDiv = document.querySelector("#output-Div");

calculateBtn.addEventListener("click",function calculateBtnHandler(){
    if(baseOfTriangle.value && heightOfTriangle.value){
        let area = (1/2*(Number(baseOfTriangle.value)*Number(heightOfTriangle.value))).toFixed(3);
        outputDiv.innerText = `Area is ${area} Unit^2`;
    }
    else{
        outputDiv.innerText = "Please positive valid values in both fields";
    }
    
})
