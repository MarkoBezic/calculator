let clear = document.getElementById("clear");
let display = document.getElementById("display");
let btn = document.getElementsByClassName("btn");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");
let operators = [divide, multiply, subtract, add];
let expression = "";
let lastOperatorClicked = "";
let result = "";
let equalsWasPressed = false;
let operatorWasClicked = false;
let isNumNegative = false;

//clear button set everything back intial state
clear.addEventListener("click", () => {
  display.innerText = 0;
  expression = "";
  result = "";
  lastOperatorClicked = "";
  equalsWasPressed = false;
  isNumNegative = false;
});

//when pressing number keys they show up in the display and concatonates with expression bucket
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].innerText >= 0 && btn[i].innerText <= 9) {
      if (equalsWasPressed) {
        if (isNumNegative) {
          if (display.innerText === "-") {
            expression += lastOperatorClicked + "(-";
          }
          if (display.innerText.length > 0) {
            display.innerText += btn[i].innerText;
            expression += btn[i].innerText;
            operatorWasClicked = false;
          } else {
            display.innerText += btn[i].innerText;
            expression += lastOperatorClicked + btn[i].innerText;
            operatorWasClicked = false;
          }
        } else {
          if (operatorWasClicked) {
            expression = result + lastOperatorClicked + btn[i].innerText;
            display.innerText = btn[i].innerText;
            equalsWasPressed = false;
            operatorWasClicked = false;
          } else {
            expression = btn[i].innerText;
            display.innerText = btn[i].innerText;
            equalsWasPressed = false;
            operatorWasClicked = false;
          }
        }
      } else {
        if (isNumNegative) {
          if (display.innerText === "-") {
            expression += lastOperatorClicked + "(-";
          }
          if (display.innerText.length > 0) {
            display.innerText += btn[i].innerText;
            expression += btn[i].innerText;
            operatorWasClicked = false;
          } else {
            display.innerText += btn[i].innerText;
            expression += lastOperatorClicked + btn[i].innerText;
            operatorWasClicked = false;
          }
        } else {
          if (display.innerText === "0") {
            display.innerText = "";
            expression = "";
          }
          if (operatorWasClicked) {
            display.innerText = "";
            operatorWasClicked = false;
          }
          if (display.innerText.length > 0) {
            display.innerText += btn[i].innerText;
            expression += btn[i].innerText;
            operatorWasClicked = false;
          } else {
            display.innerText += btn[i].innerText;
            expression += lastOperatorClicked + btn[i].innerText;
            operatorWasClicked = false;
          }
        }
      }
    }
  });
}

//operator functionality
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    if (equalsWasPressed) {
      switch (operators[i].id) {
        case "divide":
          if (isNumNegative) {
            isNumNegative = false;
            operatorWasClicked = true;
            lastOperatorClicked = "/";
          } else {
            expression = result;
            equalsWasPressed: false;
            lastOperatorClicked = "/";
            operatorWasClicked = true;
          }
          break;
        case "multiply":
          if (isNumNegative) {
            isNumNegative = false;
            operatorWasClicked = true;
            lastOperatorClicked = "+";
          }
          expression = result;
          equalsWasPressed: false;
          lastOperatorClicked = "*";
          operatorWasClicked = true;
          break;
        case "add":
          if (isNumNegative) {
            display.innerText = "";
            isNumNegative = false;
            equalsWasPressed = false;
            lastOperatorClicked = "+";
          } else {
            expression = result;
            equalsWasPressed: false;
            lastOperatorClicked = "+";
            operatorWasClicked = true;
          }
          break;
        case "subtract":
          if (isNumNegative) {
            expression += ")";
            isNumNegative = false;
            operatorWasClicked = true;
            lastOperatorClicked = "-";
          } else {
            if (operatorWasClicked) {
              isNumNegative = true;
              display.innerText = "-";
            } else {
              expression = result;
              equalsWasPressed: false;
              operatorWasClicked = true;
              lastOperatorClicked = "-";
            }
          }

          break;
        default:
          console.log("something was missed");
          break;
      }
    } else {
      switch (operators[i].id) {
        case "divide":
          if (isNumNegative) {
            expression += ")";
            isNumNegative = false;
            lastOperatorClicked = "/";
            operatorWasClicked = true;
          } else {
            lastOperatorClicked = "/";
            operatorWasClicked = true;
          }

          break;
        case "multiply":
          if (isNumNegative) {
            expression += ")";
            isNumNegative = false;
            lastOperatorClicked = "*";
            operatorWasClicked = true;
          } else {
            lastOperatorClicked = "*";
            operatorWasClicked = true;
          }
          break;
        case "add":
          if (isNumNegative) {
            display.innerText = "";
            isNumNegative = false;
            lastOperatorClicked = "+";
          } else {
            lastOperatorClicked = "+";
            operatorWasClicked = true;
          }
          break;
        case "subtract":
          if (isNumNegative) {
            expression += ")";
            isNumNegative = false;
            lastOperatorClicked = "-";
            operatorWasClicked = true;
          } else {
            if (operatorWasClicked || expression === "") {
              isNumNegative = true;
              display.innerText = "-";
            } else {
              lastOperatorClicked = "-";
              operatorWasClicked = true;
            }
          }

          break;
        default:
          console.log("something was missed");
          break;
      }
    }
  });
}

//handle decimal button
decimal.addEventListener("click", () => {
  if (equalsWasPressed && operatorWasClicked) {
    expression = result + lastOperatorClicked + "0.";
    display.innerText = "0.";
    equalsWasPressed = false;
    operatorWasClicked = false;
  } else if (operatorWasClicked) {
    expression += lastOperatorClicked + "0.";
    display.innerText = "0.";
    operatorWasClicked = false;
  } else if (equalsWasPressed) {
    expression = "0.";
    display.innerText = "0.";
    equalsWasPressed = false;
  } else if (!display.innerHTML.includes(".")) {
    display.innerText += ".";
    expression += ".";
  }
});

//handle equals
equals.addEventListener("click", () => {
  if (display.innerText === "0") {
    expression = 0;
  }
  if (isNumNegative) {
    expression += ")";
    result = eval(expression);
    display.innerHTML = result;
    expression = result;
    equalsWasPressed = true;
    isNumNegative = false;
    lastOperatorClicked = "";
    if (result < 0) {
      isNumNegative = true;
    }
  } else {
    result = eval(expression);
    display.innerHTML = result;
    expression = result;
    equalsWasPressed = true;
    lastOperatorClicked = "";
    if (result < 0) {
      isNumNegative = true;
    }
  }
});

////logging logic
// document.addEventListener("click", () => {
//   console.log(
//     "expression>>",
//     expression,
//     "=pressed>>",
//     equalsWasPressed,
//     "result>>",
//     result,
//     "lastOpClicked>>",
//     lastOperatorClicked,
//     "operatorClicked>>",
//     operatorWasClicked,
//     "negNum>>",
//     isNumNegative,
//     "equalsWasPressed>>",
//     equalsWasPressed
//   );
// });
