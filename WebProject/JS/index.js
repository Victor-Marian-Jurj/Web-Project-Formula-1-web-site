function addDotColor(color) {
  const trafficLight = document.getElementById("traffic-light");
  const dot = document.createElement("div");
  dot.className = "dot " + color;
  trafficLight.appendChild(dot);
}

function animateTrafficLight() {
  const colors = ["red", "yellow", "green"];
  let currentIndex = 0;
  let count = 0;
  let dotsInGroup = 3;

  function changeDotColor() {
    if (count === 9) {
      clearInterval(dotInterval);
      animateRacingFlag();
      return;
    }

    for (let i = 0; i < dotsInGroup; i++) {
      addDotColor(colors[currentIndex]);
      count++;
    }
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(changeDotColor, 1000);
  }
  const dotInterval = setTimeout(changeDotColor, 1000);
}

function animateRacingFlag() {
  const racingFlag = document.getElementById("racing-flag");
  racingFlag.style.display = "block"; 
  let position = 0;
  const maxPosition = document.querySelector("#traffic-light").offsetWidth - racingFlag.offsetWidth / 2;

  function moveFlag() {
    if (position >= maxPosition) {
      clearInterval(flagInterval);
    } else {
      position += 14; // Adjust the speed of movement (larger value for faster movement)
      racingFlag.style.left = position + "px";
    }
  }
  const flagInterval = setInterval(moveFlag, 25); // Adjust the interval and speed as needed (smaller interval = faster animation)
}

document.addEventListener("DOMContentLoaded", function () {
  animateTrafficLight();
});