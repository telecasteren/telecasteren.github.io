import { userMessage } from "/js/app/utils/validation/userMessage.js";
import { welcomeContent } from "/js/app/utils/constants.js";

export function screenSizeChange() {
  const container = document.querySelector(".landingIMGcontainer");

  if (!container) {
    const errorMessage = userMessage("Woops! Can't display image.");
    welcomeContent.appendChild(errorMessage);
    return;
  }

  if (window.innerWidth <= 778) {
    welcomeContent.prepend(container);
  } else {
    welcomeContent.appendChild(container);
  }
}
window.addEventListener("resize", screenSizeChange);
