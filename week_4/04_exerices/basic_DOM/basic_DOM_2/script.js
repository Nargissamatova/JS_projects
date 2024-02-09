/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.
Ensure the input field is cleared after adding the fruit to the list.
*/

let inputValue = document.getElementById("fruitInput");
let fruitList = document.getElementById("fruitList"); // ul

function buttonClicked() {
  let li = document.createElement("li");
  li.innerText = inputValue.value;
  inputValue.value = "";
  fruitList.append(li);

  //console.log(li.innerText);
  //console.log("button works");
}

document.getElementById("addFruitBtn").addEventListener("click", buttonClicked);

//  ----OR----

// getElementById("addFruitBtn").onclick = () => {};

/*
if(fruitInput){
  const newLi = document.createElement('li')
  newLi.textContent = fruitInput.value.trim();
  fruitList.appendChild(newLi);
  fruitInput.value = ' ';
} else {
  alert('Please enter a fruit name')
}
*/
