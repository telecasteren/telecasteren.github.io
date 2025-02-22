import {
  welcomeContent,
  pageContent,
  loader,
} from "/js/app/utils/constants.js";
import { displayLandingImage } from "/js/app/landing/displayLandingImage.js";

export function welcomeMessage() {
  const container = document.createElement("div");
  container.className = "welcomeMessage";

  const title = document.createElement("h1");
  title.id = "title";
  title.innerText = "Hi! My name is Tele.";

  const subMessage = document.createElement("h2");
  subMessage.id = "subMessage";
  subMessage.innerText = `
  I'm a web developer from Norway.
  I'm also notoriously curious about everything.`;

  const message = document.createElement("h3");
  message.id = "landingMessage";
  message.innerHTML = `Keywords: <span>playful, simple and efficient.</span>`;

  loader.style.display = "none";

  container.prepend(message);
  container.prepend(subMessage);
  container.prepend(title);
  welcomeContent.appendChild(container);
  pageContent.appendChild(welcomeContent);

  displayLandingImage();
}
