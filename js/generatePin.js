function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
const pinField = document.getElementById("pin-field");
const inputDisplay = document.getElementById("input-display");

function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

document.getElementById("generate-pin").addEventListener("click", () => {
  const pin = getPin();
  pinField.value = pin;
});

//**//**Calculatore//**// *//

document
  .getElementById("claculatore-main")
  .addEventListener("click", (event) => {
    const numbers = event.target.innerText;

    if (numbers === "C") {
      inputDisplay.value = "";
    } else if (numbers === "<") {
      const inputDisplaystring = inputDisplay.value.split("");
      inputDisplaystring.pop();
      const numbers = inputDisplaystring.join("");
      inputDisplay.value = numbers;
    } else if (numbers.length === 1) {
      inputDisplay.value = inputDisplay.value + numbers;
    }
  });

document.getElementById("submit-btn").addEventListener("click", () => {
  if (pinField.value === inputDisplay.value) {
    document.getElementById("notify-show-match").style.display = "block";
    document.getElementById("notify-show-no-match").style.display = "none";
  } else {
    document.getElementById("notify-show-match").style.display = "none";
    document.getElementById("notify-show-no-match").style.display = "block";
  }
});
