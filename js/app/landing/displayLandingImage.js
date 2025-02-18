import { welcomeContent } from "/js/app/utils/constants.js";

export function displayLandingImage() {
  const existingImage = document.getElementById("landingImage");
  if (existingImage) existingImage.parentElement.remove();

  const container = document.createElement("div");

  const img = document.createElement("img");
  img.id = "landingImage";
  img.src = "/resources/images/IMG_3324 1-downsizedExposed 1.jpg";
  img.alt = "A black and white photo of the portfolio owner.";
  container.appendChild(img);

  function screenSizeChange() {
    if (window.innerWidth <= 778) {
      welcomeContent.prepend(container);
    } else {
      welcomeContent.appendChild(container);
    }
  }
  screenSizeChange();

  window.removeEventListener("resize", screenSizeChange);
  window.addEventListener("resize", screenSizeChange);
}
