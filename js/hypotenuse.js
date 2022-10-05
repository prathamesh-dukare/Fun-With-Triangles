const baseOfTriangle = document.querySelector("#base");
const heightOfTriangle = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculate-btn");
const outputDiv = document.querySelector("#output-Div");

calculateBtn.addEventListener("click", function calculateBtnHandler() {
  if (baseOfTriangle.value > -1 && heightOfTriangle.value > -1) {
    let hypotenuse = Math.sqrt(
        Number(baseOfTriangle.value) ** 2 + Number(heightOfTriangle.value) ** 2
      ).toFixed(3);
      outputDiv.innerText = `Hypotenuse is ${hypotenuse} Unit`;
  }else{
        outputDiv.innerText = "Please positive valid values in both fields";
  }
  
});
