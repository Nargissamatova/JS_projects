const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => displayData(json));
};

/*
// ASYNC
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Error status ${response.status}`);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};
*/

fetchData();

const displayData = (data) => {
  const container = document.querySelector("#container");
  // post can be replaced with anything: user;
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h2>${post.name}</h2>
      <p>${post.username}</p>
      <p>Email: ${post.email}</p>
      <p>Address: ${post.address.street}, ${post.address.suite}</p>
      <p>City: ${post.address.city}</p>
      <p>Phone: ${post.phone}</p>
      <p><b>Company:</b> ${post.company.name}</p>
      <p>Phrase: ${post.company.catchPhrase}</p>
      <p>Website: ${post.website}</p>


      `;
    container.appendChild(postElement);
  });
};
