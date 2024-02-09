const inputValue = document.getElementById("input");
let button = document.querySelector("button");
let textArea = document.querySelector("#answer");
let storedAnswer = "";

button.onclick = () => {
  let answer = "";
  let randomNumber = Math.floor(Math.random() * 8 + 1);
  let question = inputValue.value.trim();

  if (question === "") {
    alert("Enter a question first");
    return;
  }

  switch (randomNumber) {
    case 1:
      answer = "Absolutely!";
      break;
    case 2:
      answer = "Never";
      break;
    case 3:
      answer = "As likely as finding socks in a dryer";
      break;
    case 4:
      answer = "Definitely yes!";
      break;
    case 5:
      answer = "My future self says no!";
      break;
    case 6:
      answer = "Even my dog is saying yes";
      break;
    case 7:
      answer = "Hahaha no";
      break;
    case 8:
      answer = "I love you, so yeah";
      break;
    default:
      break;
  }
  storedAnswer = answer;
  textArea.style.opacity = 1;
  textArea.textContent = storedAnswer;
  inputValue.value = "";

  // Set timeout to clear the answer after a couple of seconds (e.g., 2000 milliseconds)
  setTimeout(() => {
    textArea.textContent = "";
  }, 3000);
};
