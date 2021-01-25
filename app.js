let clear = document.getElementById("clear");
let display = document.getElementById("display");
let btn = document.getElementsByClassName("btn");

clear.addEventListener("click", () => {
  display.innerText = 0;
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].innerText >= 0 && btn[i].innerText <= 9) {
      if (display.innerText === "0") {
        display.innerText = "";
      }
      display.innerText += btn[i].innerText;
    }
  });
}

console.log(display.innerText);
