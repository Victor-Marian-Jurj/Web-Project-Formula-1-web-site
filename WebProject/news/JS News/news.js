function handleLikeClick(newsIndex) {
  const likeCounter = document.getElementById(`like-counter-${newsIndex}`);
  let currentLikes = parseInt(likeCounter.textContent, 10);
  currentLikes++;
  likeCounter.textContent = currentLikes;

  const tireImage = document.getElementById(`tire-image-${newsIndex}`);
  tireImage.classList.add("animate-tire");
  setTimeout(() => {
    tireImage.classList.remove("animate-tire");
  }, 1000); 
}

function addLikeButtonAndCounter() {
  const newsSections = document.querySelectorAll("#feature-div .col-md-6");
  newsSections.forEach((news, index) => {
    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.classList.add("btn", "btn-primary", "mb-2");
    likeButton.addEventListener("click", () => handleLikeClick(index));

    const likeCounter = document.createElement("span");
    likeCounter.textContent = "0 Likes";
    likeCounter.classList.add("badge", "bg-secondary", "ms-2");
    likeCounter.id = `like-counter-${index}`;

    const tireImage = document.createElement("img");
    tireImage.src = "./images/png-clipart-2017-abu-dhabi-grand-prix-2017-formula-one-world-championship-car-williams-martini-racing-formula-one-tyres-car-car-transport-thu.png";
    tireImage.classList.add("tire-image");
    tireImage.id = `tire-image-${index}`;

    const likeContainer = document.createElement("div");
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCounter);
    likeContainer.appendChild(tireImage);

    news.appendChild(likeContainer);
  });
}

window.addEventListener("load", addLikeButtonAndCounter);
document.addEventListener("DOMContentLoaded", function () {
 
  function addPoint(container, position) {
    const point = document.createElement("div");
    point.className = "point";
    point.style.position = "absolute";
    point.style.width = "18px"; 
    point.style.height = "18px"; 
    point.style.borderRadius = "50%"; 
    point.style.backgroundColor = "black";
    point.style.left = position + "%";
    point.style.top = "-5";
    container.appendChild(point);
  }
  const paragraphContainers = document.querySelectorAll(".paragraph-container");

  // Add the three points after each paragraph container
  paragraphContainers.forEach((container) => {
    addPoint(container, 45); // 25% from the left edge
    addPoint(container, 50); // 50% (center) of the container
    addPoint(container, 55); // 75% from the left edge
  });
});

