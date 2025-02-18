import { welcomeContent } from "/js/app/utils/constants.js";
import { screenSizeChange } from "/js/app/eventListeners/screenSizeChange.js";

export function displayLandingImage() {
  const existingImage = document.getElementById("landingImage");
  if (existingImage) existingImage.parentElement.remove();

  const container = document.createElement("div");
  container.className = "landingIMGcontainer";

  const img = document.createElement("img");
  img.id = "landingImage";
  img.src = "/resources/images/IMG_3324 1-downsizedExposed 1.webp";
  img.alt = "A black and white photo of the portfolio owner.";
  container.appendChild(img);

  welcomeContent.appendChild(container);

  screenSizeChange();
}
