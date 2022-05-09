const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const btnLighter = document.querySelector(".buttonLighter");
const overlay = document.getElementById("overlay");

/* Looping through images */
//Adding images to array.
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];

// foreach
images.forEach((i) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", i);
  // console.log(newImage);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", function () {
    displayedImage.setAttribute("src", i);
  });
});

const checkBtn = () => {
  // console.log("Check button running...");
  if (btn.textContent.includes("Darken")) {
    btn.classList.add("buttonLight");
    btn.textContent = "Lighten";
  } else {
    btn.textContent.includes("Lighten");
    btn.textContent = "Darken";
    btn.classList.remove("buttonLight");
  }
};
// btn.classList.toogle("buttonLight");
btn.addEventListener("click", function () {
  checkBtn();
  overlay.classList.toggle("overlay");
});

