import {
  welcomeContent,
  pageContent,
  loader,
} from "/js/app/utils/constants.js";
import { displayLandingImage } from "/js/app/landing/displayLandingImage.js";
// import { landingTexts } from "/resources/texts/landing.js";

export function welcomeMessage() {
  const container = document.createElement("div");
  container.className = "welcomeMessage";

  const title = document.createElement("h1");
  title.id = "title";
  title.setAttribute("data-i18n", "welcome");
  // title.innerText = landingTexts.welcome;

  const location = document.createElement("p");
  location.id = "location";
  location.setAttribute("data-i18n", "location");
  // location.innerHTML = landingTexts.location;

  const subMessage = document.createElement("h2");
  subMessage.id = "subMessage";
  subMessage.setAttribute("data-i18n", "pitch");
  // subMessage.innerHTML = landingTexts.pitch;

  const message = document.createElement("h3");
  message.id = "landingMessage";
  message.setAttribute("data-i18n", "keys");
  // message.innerHTML = landingTexts.keys;

  loader.style.display = "none";

  container.prepend(message);
  container.prepend(subMessage);
  container.prepend(location);
  container.prepend(title);
  welcomeContent.appendChild(container);
  pageContent.appendChild(welcomeContent);

  displayLandingImage();
}
