const landingPageImages = document.querySelectorAll(
  ".landing-page-img-container img"
);
console.log(landingPageImages);

let i = 1;
setInterval(() => {
  i++;
  const image = document.querySelector(".landing-page-img-container .change");
  console.log(image);
  image.classList.remove("change");
  if (i > landingPageImages.length) {
    landingPageImages[0].classList.add("change");
    i = 1;
  } else {
    image.nextElementSibling.classList.add("change");
  }
}, 2500);
