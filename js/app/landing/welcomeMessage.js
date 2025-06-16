import {
  welcomeContent,
  pageContent,
  loader,
} from "/js/app/utils/constants.js";
import { displayLandingImage } from "/js/app/landing/displayLandingImage.js";
import { landingTexts } from "/resources/texts/landing.js";

export function welcomeMessage() {
  const container = document.createElement("div");
  container.className = "welcomeMessage";

  const title = document.createElement("h1");
  title.id = "title";
  title.innerText = landingTexts.welcome;

  const subMessage = document.createElement("h2");
  subMessage.id = "subMessage";
  subMessage.innerHTML = landingTexts.pitch;

  const message = document.createElement("h3");
  message.id = "landingMessage";
  message.innerHTML = landingTexts.keys;

  loader.style.display = "none";

  container.prepend(message);
  container.prepend(subMessage);
  container.prepend(title);
  welcomeContent.appendChild(container);
  pageContent.appendChild(welcomeContent);

  displayLandingImage();
}
