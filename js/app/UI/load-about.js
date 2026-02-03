import { pageContent, welcomeContent } from "/js/app/utils/constants.js";
import { welcomeMessage } from "/js/app/landing/welcome-message.js";
import { colorModeToggle } from "/js/app/components/color-modes/switch.js";
import { aboutContent } from "/js/app/landing/about/about-section.js";

export function loadAbout() {
  const homeLi = document.getElementById("navHome");
  const projectsLi = document.getElementById("navProjects");
  const contactLi = document.getElementById("navContact");
  const aboutLi = document.getElementById("navAbout");

  pageContent.classList.add("landing-content");
  pageContent.classList.remove("contact-page");

  if (aboutLi.classList.contains("active")) return;

  aboutLi.classList.add("active");
  homeLi.classList.remove("active");
  projectsLi.classList.remove("active");
  contactLi.classList.remove("active");

  pageContent.innerHTML = "";
  welcomeContent.innerHTML = "";

  colorModeToggle();
  welcomeMessage();
  aboutContent();

  setLanguage(localStorage.getItem("lang") || "no");
}
