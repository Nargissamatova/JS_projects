const form = document.querySelector(".form-container");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");
const orderButton = document.querySelector("#orderButton");

let total;
let toppings = [];
let extras = [];

const pancakePriceCalc = () => {
  // total price icon
  const totalPriceElement = document.querySelector("#totalPrice");
  const priceBanner = document.querySelector(".price-banner");

  total = parseInt(typeSelect.value);
  totalPriceElement.textContent = `$${total}`;
  checkToppings();

  // Animation for price banner

  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: " scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};

// Function to add an item to toppings or extras array
const addItem = (itemName, category) => {
  if (category === "toppings") {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }
};
const removeItem = () => {};

const checkToppings = () => {
  // Resetting toppings and extras arrays
  toppings = [];
  extras = [];

  // Initialize total with the pancake type value
  total = parseInt(typeSelect.value);

  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;

    if (item.checked) {
      // Update total based on selected toppings
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      // Placeholder for removing unchecked items (currently empty)
      removeItem(itemName, category);
    }
  }

  // Display the updated total price
  const totalPriceElement = document.querySelector("#totalPrice");
  totalPriceElement.textContent = `$${total}`;

  // Logging arrays for debugging
  console.log("toppings array", toppings);
  console.log("extras array", extras);
};

const displayOrder = () => {
  const customerName = document.querySelector("#customerName").value;
  const orderType = document.querySelector("#order_type");
  const orderToppings = document.querySelector("#order_toppings");
  const orderExtras = document.querySelector("#order_extras");
  const orderName = document.querySelector("#order_name");

  // Updating order details in the DOM
  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = toppings.join(", ");
  orderExtras.textContent = extras.join(", ");
  orderName.textContent = customerName; // display name in order

  // To display card orders
  const orderContainer = document.getElementById("order-container");
  const card = document.createElement("div");
  const h3 = document.createElement("h3");
  const cardType = document.createElement("p");
  const cardToppings = document.createElement("p");
  const cardExtras = document.createElement("p");
  const cardName = document.createElement("p");

  h3.textContent = `Order: ${Math.floor(Math.random() * 90000) + 10000}`;
  cardType.textContent = `Type: ${typeSelect.selectedOptions[0].text}`;
  cardToppings.textContent = `Toppings: ${toppings.join(", ")}`;
  cardExtras.textContent = `Extras: ${extras.join(", ")}`;
  cardName.textContent = `Name: ${customerName}`;

  card.className = "order-card";

  orderContainer.append(card);
  card.append(h3);
  card.append(cardType);
  card.append(cardToppings);
  card.append(cardExtras);
  card.append(cardName);
};

form.addEventListener("change", pancakePriceCalc);
orderButton.addEventListener("click", displayOrder);
