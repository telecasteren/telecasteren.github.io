import { pageContent, welcomeContent } from "/js/app/utils/constants.js";
import { welcomeMessage } from "/js/app/landing/welcomeMessage.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { hideCursor } from "/js/app/eventListeners/customCursor/hideCursor.js";

export function loadHome() {
  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");
  const contactLi = document.getElementById("contactLi");
  const aboutLi = document.getElementById("aboutLi");

  pageContent.classList.add("landing-content");
  pageContent.classList.remove("contact-page");

  if (homeLi.classList.contains("active")) return;

  homeLi.classList.add("active");
  projectsLi.classList.remove("active");
  contactLi.classList.remove("active");
  aboutLi.classList.remove("active");

  pageContent.innerHTML = "";
  welcomeContent.innerHTML = "";

  colorModeToggle();
  hideCursor();
  welcomeMessage();

  setLanguage(localStorage.getItem("lang") || "no");
}
