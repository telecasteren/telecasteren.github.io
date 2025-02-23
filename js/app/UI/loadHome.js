import { pageContent, welcomeContent } from "/js/app/utils/constants.js";
import { welcomeMessage } from "/js/app/landing/welcomeMessage.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";

export function loadHome() {
  const homeLi = document.getElementById("homeLi");

  pageContent.classList.add("landing-content");
  pageContent.classList.remove("contact-page");

  if (homeLi.classList.contains("active")) return;

  homeLi.classList.add("active");
  projectsLi.classList.remove("active");
  contactLi.classList.remove("active");

  pageContent.innerHTML = "";
  welcomeContent.innerHTML = "";

  colorModeToggle();
  welcomeMessage();
}
