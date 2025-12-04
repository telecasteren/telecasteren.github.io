import { welcomeContent } from "/js/app/utils/constants.js";

export function displayLandingImage() {
  const existingImage = document.getElementById("landingImage");
  if (existingImage) existingImage.parentElement.remove();

  const container = document.createElement("div");
  container.className = "landingIMGcontainer";
  container.style.position = "relative";

  const img = document.createElement("img");
  img.id = "landingImage";
  img.src = "resources/images/tele-avatar-blue-revised.png";
  img.alt = "A photo of the portfolio owner.";

  container.appendChild(img);
  welcomeContent.appendChild(container);
}
