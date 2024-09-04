const starContainer = document.getElementById("stars");
const countContainer = document.getElementById("star-count");
let active = -1;

for (let i = 0; i < 5; i++) {
  const starDiv = document.createElement("img");
  starDiv.className = "star";
  starDiv.src = "./star.png";
  starContainer.appendChild(starDiv);

  starDiv.addEventListener("click", () => starClickHandler(i));
  starDiv.addEventListener("mouseover", () => starOnMouseHover(i));
  starDiv.addEventListener("mouseout", starOnMouseOut);
}

function starClickHandler(i) {
  active = i;
  fill(i);
  countContainer.innerHTML = i+1
}

function starOnMouseHover(i) {
  fill(i);
}

function starOnMouseOut() {
  fill(active);
}

function fill(starCount) {
  let allStars = document.querySelectorAll(".star");
  for (i = 0; i < 5; i++) {
    if (i <= starCount) {
      allStars[i].src = "./starColored.png";
    } else {
      allStars[i].src = "./star.png";
    }
  }
}
