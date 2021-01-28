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

//clear button clears display and expression
clear.addEventListener("click", () => {
  display.innerText = 0;
  expression = "";
  result = "";
  lastOperatorClicked = "";
  equalsWasPressed = false;
  isNumNegative = false;
});

//when pressing number keys they show up in the display
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
          expression = result + lastOperatorClicked + btn[i].innerText;
          display.innerText = btn[i].innerText;
          equalsWasPressed = false;
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
          if (display.innerText == 0) {
            display.innerText = "";
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
    //if equals was pressed is true pressing an operator will
    //set equals was pressed to false
    if (equalsWasPressed) {
      switch (operators[i].id) {
        case "divide":
          expression = result;
          equalsWasPressed: false;
          lastOperatorClicked = "/";
          operatorWasClicked = true;
          break;
        case "multiply":
          expression = result;
          equalsWasPressed: false;
          lastOperatorClicked = "*";
          operatorWasClicked = true;
          break;
        case "add":
          expression = result;
          equalsWasPressed: false;
          lastOperatorClicked = "+";
          break;
        case "subtract":
          if (operatorWasClicked) {
            isNumNegative = true;
            display.innerText = "-";
          } else {
            expression = result;
            equalsWasPressed: false;
            lastOperatorClicked = "-";
            operatorWasClicked = true;
          }
          break;
        default:
          console.log("something was missed");
          break;
      }
    } else {
      switch (operators[i].id) {
        case "divide":
          lastOperatorClicked = "/";
          operatorWasClicked = true;
          break;
        case "multiply":
          lastOperatorClicked = "*";
          operatorWasClicked = true;
          break;
        case "add":
          lastOperatorClicked = "+";
          operatorWasClicked = true;
          break;
        case "subtract":
          if (operatorWasClicked) {
            isNumNegative = true;
            display.innerText = "-";
          } else {
            lastOperatorClicked = "-";
            operatorWasClicked = true;
          }
          break;
        default:
          console.log("something was missed");
          break;
      }
    }
  });

  // event listener for decimal
  decimal.addEventListener("click", () => {
    console.log(display.innerHTML.charAt(display.innerText.length - 1));
    if (!display.innerHTML.includes(".")) {
      display.innerText += ".";
      expression += ".";
    }
  });
}

//handle equals
equals.addEventListener("click", () => {
  if (isNumNegative) {
    expression += ")";
    result = eval(expression);
    display.innerHTML = result;
    expression = result;
    equalsWasPressed = true;
    isNumNegative = false;
    lastOperatorClicked = "";
  } else {
    result = eval(expression);
    display.innerHTML = result;
    expression = result;
    equalsWasPressed = true;
    lastOperatorClicked = "";
  }
});

document.addEventListener("click", () => {
  console.log(
    "expression>>",
    expression,
    "=pressed>>",
    equalsWasPressed,
    "result>>",
    result,
    "lastOpClicked>>",
    lastOperatorClicked,
    "operatorClicked>>",
    operatorWasClicked,
    "negNum>>",
    isNumNegative,
    "equalsWasPressed>>",
    equalsWasPressed
  );
});
