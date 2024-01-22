/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs 
whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(Number) {
  if (Number < 15) {
    console.log("Wear a jacket");
  } else {
    console.log("It s fine");
  }
}

getTemperature(Number(prompt("What is the current temperature?")));
