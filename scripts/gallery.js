const filterLinks = Array.from(document.querySelectorAll(".link"));
const allImages = Array.from(document.querySelectorAll(".gallery_image"));
const activeBox = document.querySelector(".active_box");
let windowWidth = 120;
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth > 768 ? 120 : 70;
  console.log(windowWidth);
});

filterLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    console.log(getComputedStyle(link).width);
    let activeBoxPosition =
      index * Number(getComputedStyle(link).width.slice(0, -2));
    activeBox.style.transform = `translateX(${activeBoxPosition}px)`;
    activeBox.style.width = getComputedStyle(link).width;

    filterImages(link.getAttribute("data-filter"));
  });
});

function filterImages(imageFilterType) {
  allImages.forEach((image) => {
    let imageType = image.getAttribute("data-image-type");
    if (!imageType.includes(imageFilterType) && imageFilterType !== "*") {
      image.classList.add("hide_image");
    } else {
      image.classList.remove("hide_image");
    }
  });
}