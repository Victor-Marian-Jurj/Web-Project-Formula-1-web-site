function addDotColor(color) {
  const trafficLight = document.getElementById("traffic-light");
  const dot = document.createElement("div");
  dot.className = "dot " + color;
  trafficLight.appendChild(dot);
}

// Function to animate the traffic light dots
function animateTrafficLight() {
  const colors = ["red", "yellow", "green"];
  let currentIndex = 0;
  let count = 0;
  let dotsInGroup = 3;

  // Function to add the next group of dot colors and remove the previous dots
  function changeDotColor() {
    if (count === 9) {
      clearInterval(dotInterval);
      animateRacingFlag(); // Start the racing flag animation almost instantly after lights are done
      return;
    }

    for (let i = 0; i < dotsInGroup; i++) {
      addDotColor(colors[currentIndex]);
      count++;
    }

    currentIndex = (currentIndex + 1) % colors.length;

    // Wait for 500ms before showing the next group (adjust as needed)
    setTimeout(changeDotColor, 1000);
  }

  // Start changing dots
  const dotInterval = setTimeout(changeDotColor, 1000); // Initial delay before the first group appears (adjust as needed)
}

// Function to animate the racing flag
function animateRacingFlag() {
  const racingFlag = document.getElementById("racing-flag");
  racingFlag.style.display = "block"; // Display the racing flag
  let position = 0;
  const distanceOfTravel = 0.45; // Adjust this value to set the distance of travel (e.g., 0.7 for 70% of the screen width)
  const maxPosition = (window.innerWidth - racingFlag.offsetWidth) * distanceOfTravel; // Adjust this value for the desired animation distance

  function moveFlag() {
    if (position >= maxPosition) {
      clearInterval(flagInterval);
    } else {
      position += 14; // Adjust the speed of movement (larger value for faster movement)
      racingFlag.style.left = position + "px";
    }
  }

  // Start the flag animation with a faster speed
  const flagInterval = setInterval(moveFlag, 25); // Adjust the interval and speed as needed (smaller interval = faster animation)
}

// Start the animations when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  animateTrafficLight();
});