// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const multi = document.getElementById("multi");
// const divide = document.getElementById("divide");
const operators = document.getElementsByClassName("btn-op");
const clearBtn = document.getElementById("clearBtn");
const display = document.getElementById("display");
const btns = document.getElementsByClassName("btn-num");
const equal = document.getElementById("equal");
let plusBtn = true;
let a = 0;
let c = 0;
let operator = "";

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (plusBtn) {
      display.textContent += btns[i].textContent;
    }
  });
}

for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", () => {
    operator = operators[j].textContent;
    a = display.textContent;
    display.textContent = "";
  });
}

equal.addEventListener("click", () => {
  switch (operator) {
    case "+":
      c = Number(a) + Number(display.textContent);
      break;
    case "-":
      c = Number(a) - Number(display.textContent);
      break;
    case "*":
      c = Number(a) * Number(display.textContent);
      break;
    case "/":
      c = Number(a) / Number(display.textContent);
  }
  display.textContent = c;
});

clearBtn.addEventListener("click", () => {
  display.innerText = "";
  a = 0;
  b = 0;
  plusBtn = true;
});
