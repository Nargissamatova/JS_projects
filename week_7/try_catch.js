"use strict";

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function isLightOn(light) {
  // Simulate error
  if (light === false) {
    throw new Error("Oops, something went wrong! Lights are off");
  }
  console.log("Phew lights are on");
}
try {
  isLightOn(false);
} catch (error) {
  console.log(error.message);
}

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
  // Code here
  try {
    console.log(fox);
  } catch (error) {
    console.error(error);
  }
}
task2();

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  // Code here
  try {
    console.log(2 + 2);
    throw new Error("Test error");
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Execution completed");
  }
}

// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
  // Code here
  try {
    console.log("Outer try block");
    try {
      // Simulate error
      throw new Error("Nested error occured");
    } catch (error) {
      console.log("Nested catch block", error.message);
    }
  } catch (error) {
    console.log();
  }
}
task4();
// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  // Code here
  try {
    if (index < 0 || index >= array.length) {
      throw new Error("Index out of bounds");
    }
    console.log("Value: ", array[index]);
  } catch (error) {
    console.error(error.message);
  }
}
task5([1, 2, 3], 5);
