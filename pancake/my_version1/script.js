const form = document.querySelector(".form-container");

const priceCalc = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const priceBanner = document.getElementById("totalPrice");

  let totalAmount = parseInt(typeSelect.value);
  // console.log(totalAmount);
  const selectedOptions = [];

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
      // labels next to checkboxes
      const label = document.querySelector(`label[for='${checkbox.id}']`);
      selectedOptions.push(label.textContent.trim());
    }
  }
  console.log(selectedOptions);

  priceBanner.textContent = `$${totalAmount}`;
  console.log("Selected Options:", selectedOptions);
};
form.addEventListener("change", priceCalc);
