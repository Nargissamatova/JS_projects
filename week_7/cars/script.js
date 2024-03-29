//Access html car inputs
const addButton = document.getElementById("addCar");
const addCarForm = document.querySelector("#addCar");

// Access table body
const tbody = document.querySelector("tbody");

// Car template
class Car {
  constructor(licensePlate, maker, model, currentOwner, price, color) {
    this.licensePlate = licensePlate;
    this.maker = maker;
    this.model = model;
    this.currentOwner = currentOwner;
    this.price = price;
    this.color = color;
  }
}

// Initialize storage array
const storage = [];

function addCar() {
  // Access car input values from html
  const license = document.getElementById("license").value;
  const maker = document.getElementById("maker").value;
  const model = document.getElementById("model").value;
  const owner = document.getElementById("owner").value;
  const price = document.getElementById("price").value;
  const color = document.getElementById("color").value;

  const newCar = new Car(license, maker, model, owner, price, color);
  storage.push(newCar);
  console.log(storage);

  // Create new row in table for new car
  const tr = document.createElement("tr");
  const tdLicense = document.createElement("td");
  tdLicense.textContent = license;
  tr.appendChild(tdLicense);

  const tdMaker = document.createElement("td");
  tdMaker.textContent = maker;
  tr.appendChild(tdMaker);

  const tdModel = document.createElement("td");
  tdModel.textContent = model;
  tr.appendChild(tdModel);

  const tdOwner = document.createElement("td");
  tdOwner.textContent = owner;
  tr.appendChild(tdOwner);

  const tdPrice = document.createElement("td");
  tdPrice.textContent = price;
  tr.appendChild(tdPrice);

  const tdColor = document.createElement("td");
  tdColor.textContent = color;
  tr.appendChild(tdColor);

  tbody.appendChild(tr);
}

addButton.addEventListener("click", addCar);

const searchCarForm = document.getElementById("searchForm");

const searchCar = (e) => {
  e.preventDefault();
  const licenseQuery = document
    .querySelector("#search")
    .value.trim()
    .toLowerCase();

  const display = document.querySelector("#searchResult");

  if (!licenseQuery) {
    display.textContent = "Please enter a license plate to search";
    return;
  }

  try {
    const result = storage.find(({ licensePlate }) =>
      licensePlate.toLowerCase().includes(licenseQuery)
    );

    display.textContent = result
      ? `Found ${result.maker}, ${result.model}, owned by ${result.currentOwner} `
      : "No car with that license plate";
  } catch (error) {
    console.error("Error occurred:", error);
    display.textContent = "Something went wrong, try again";
  }
};

searchCarForm.addEventListener("submit", searchCar);
