/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
function Library(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}
const book1 = new Library("Amphibia man", "Alexander Belyaev", 1961);
const book2 = new Library("Anna Karenina", "Lev Tolstoy", 1978);

// OR

const libraryArr = [
  {
    title: "Amphibia man",
    author: "Alexander Belyaev",
    yearPublished: 1961,
  },
  {
    title: "Anna Karenina",
    author: "Lev Tolstoy",
    yearPublished: 1978,
  },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
book2.yearPublished = 1979;
console.log(book1);
console.log(book2);
// OR
console.log("Object:" + libraryArr[0].title);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
libraryArr[0].genres = ["Sci-fi", "Romance"];
libraryArr[0].isAvailable = false;
console.log(libraryArr[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}
const bookOne = new Book(
  "Thousand Splendid Suns",
  "Khaled Hosseini",
  2007,
  "SciFi"
);
const bookTwo = new Book("Kite Runner", "Khaled Hosseini", 2007);
const bookThree = new Book("Atomic Habits", "James Clear", 2018);
libraryArr.push(bookThree);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
// on task 5 file

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Convert the `libraryArr` to a JSON string and log it to the console
let jsonLibrary = JSON.stringify(libraryArr);
console.log("JSON String:", jsonLibrary);

// Parse the JSON string back into a JavaScript object
let parsedLibrary = JSON.parse(jsonLibrary);

// Log the title of the first book to the console
console.log("First Book Title:", parsedLibrary[0].title);
