//let totalPrice = 0;

let typeSelect = document.getElementById("type");
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let totalPrice = document.querySelectorAll("#totalPrice");

//Converting pancake type price to number
let numPrice = parseInt(totalPrice[0].innerText.substring(1));
let totalValue = 0;

function inputValue() {
  for (let checkbox of checkboxes) {
    //Converting checkbox value to number
    let numCheckbox = parseInt(checkbox.value);

    if (checkbox.checked) {
      totalValue += numCheckbox;
    } else {
      totalValue -= numCheckbox;
    }
  }
  console.log(totalValue);

  totalPrice[0].innerText = `$${typeSelect.value}`;
  totalPrice[1].innerText = `$${typeSelect.value}`;
}

typeSelect.onchange = () => {
  inputValue();
};
