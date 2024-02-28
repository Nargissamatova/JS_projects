/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
const button = document.querySelector("button");
const nameBook = document.getElementById("bookName");
const authorBook = document.getElementById("bookAuthor");
const yearBook = document.getElementById("bookYear");
const genreBook = document.getElementById("bookGenre");

function createBook(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

button.onclick = () => {
  const newBook = new createBook(
    nameBook.value,
    authorBook.value,
    yearBook.value,
    genreBook.value
  );
  console.log(newBook);
};
