const form = document.querySelector(".form-container");

const priceCalc = () => {
  //console.log("edhhf");
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const priceBanner = document.querySelector("#totalPrice");

  let totalAmount = parseInt(typeSelect.value);
  console.log(totalAmount);

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    }
    console.log(totalAmount);
    priceBanner.textContent = `$${totalAmount}`;
  }
};

form.addEventListener("change", priceCalc);
