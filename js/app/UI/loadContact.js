import { pageContent, portfolioContent } from "/js/app/utils/constants.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { hideCursor } from "/js/app/eventListeners/customCursor/hideCursor.js";
import { displayContactPage } from "/js/app/contact/displayContactPage.js";

export function loadContact() {
  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");
  const contactLi = document.getElementById("contactLi");
  const aboutLi = document.getElementById("aboutLi");

  pageContent.classList.remove("landing-content");

  if (contactLi.classList.contains("active")) return;

  contactLi.classList.add("active");
  projectsLi.classList.remove("active");
  homeLi.classList.remove("active");
  aboutLi.classList.remove("active");

  portfolioContent.innerHTML = "";
  pageContent.innerHTML = "";

  colorModeToggle();
  hideCursor();
  displayContactPage();
}
