// VARIABLES

let result = document.getElementById("result");
let category = document.getElementById("category");

// FUNCTIONS

function calculate() {
  let bmi;

  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);

  document.getElementById("weight-value").textContent = weight + " kg";
  document.getElementById("height-value").textContent = height + " cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;

  if (bmi < 18.5) {
    category.textContent = "Underweight";
    result.style.color = "orange";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category.textContent = "Normal weight";
    result.style.color = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category.textContent = "Overweight";
    result.style.color = "crimson";
  } else if (bmi >= 30) {
    category.textContent = "Obese";
    result.style.color = "maroon";
  }
}

// EVENT LISTENERS
