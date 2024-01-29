// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

while (true) {
  let distance = prompt("Input distance in km");
  let distanceNum = parseFloat(distance);
  if (distanceNum === 0) break;

  let time = prompt("Input time in hours");
  let timeNum = parseFloat(time);

  if (timeNum === 0) {
    console.log("Enter actual time");
    continue;
  }
  console.log("Average speed: " + distanceNum / timeNum);
}

//Number(prompt('Enter distance in kilometers')) ---> Number() instead of parseFloat()
