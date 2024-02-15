/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
const addButton = document.getElementById("addFruitBtn");
const fruitList = document.getElementById("fruitList");
const fruitInput = document.getElementById("fruitInput");

const addNewList = () => {
  const newList = document.createElement("li");
  newList.textContent = fruitInput.value;
  fruitList.append(newList);
  fruitInput.value = "";
};

addButton.addEventListener("click", addNewList);
