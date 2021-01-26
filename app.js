let clear = document.getElementById("clear");
let display = document.getElementById("display");
let btn = document.getElementsByClassName("btn");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");
let operators = [divide, multiply, subtract, add, equals];
let expression = "";

//clear button clears display and expression
clear.addEventListener("click", () => {
  display.innerText = 0;
  expression = "";
});

//when pressing number keys they show up in the display
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].innerText >= 0 && btn[i].innerText <= 9) {
      if (display.innerText === "0") {
        display.innerText = "";
      }
      display.innerText += btn[i].innerText;
      expression += btn[i].innerText;
    }
  });
}
// event listener for decimal
decimal.addEventListener("click", () => {
  console.log(display.innerHTML.charAt(display.innerText.length - 1));
  if (!display.innerHTML.includes(".")) {
    display.innerText += ".";
    expression += ".";
  }
});

//operator functionality
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    switch (operators[i].id) {
      case "divide":
        expression = expression + "/";
        display.innerHTML = 0;
        break;
      case "multiply":
        expression = expression + "*";
        display.innerHTML = 0;
        break;
      case "add":
        expression = expression + "+";
        display.innerHTML = 0;
        break;
      case "subtract":
        expression = expression + "-";
        display.innerHTML = 0;
        break;
      case "equals":
        let result = eval(expression);
        display.innerHTML = result;
        expression = result;
      default:
        console.log(result);
    }
  });
}
