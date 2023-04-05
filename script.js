const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const key = button.dataset.key;

    if (key === "C") {
      display.value = "";
    } else if (key === "=") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        alert("Invalid expression");
        display.value = "";
      }
    } else {
      display.value += key;
    }
  });
});
