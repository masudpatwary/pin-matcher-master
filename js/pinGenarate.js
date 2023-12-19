function pinGenarate() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

const pinField = document.getElementById("pin-field");
const inputDisplay = document.getElementById("input-display");

function getPin() {
  const pin = pinGenarate();
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

//**calculatore//

document
  .getElementById("claculatore-main")
  .addEventListener("click", (event) => {
    const btnNumber = event.target.innerText;

    if (btnNumber === "C") {
      inputDisplay.value = "";
    } else if (btnNumber === "<") {
      const btnNumberString = inputDisplay.value.split("");
      btnNumberString.pop();
      const btnNumber = btnNumberString.join("");

      inputDisplay.value = btnNumber;
      console.log(btnNumber);
    } else if (btnNumber.length === 1) {
      inputDisplay.value = inputDisplay.value + btnNumber;
    }
  });

document.getElementById("submit-btn").addEventListener("click", () => {
  if (inputDisplay.value === pinField.value) {
    document.getElementById("notify-show-match").style.display = "block";
    document.getElementById("notify-show-no-match").style.display = "none";
  } else {
    document.getElementById("notify-show-no-match").style.display = "block";
    document.getElementById("notify-show-match").style.display = "none";
  }
});
