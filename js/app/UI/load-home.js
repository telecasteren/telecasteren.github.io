import { pageContent, welcomeContent } from "/js/app/utils/constants.js";
import { welcomeMessage } from "/js/app/landing/welcome-message.js";
import { colorModeToggle } from "/js/app/components/color-modes/switch.js";

export function loadHome() {
  const homeLi = document.getElementById("navHome");
  const projectsLi = document.getElementById("navProjects");
  const contactLi = document.getElementById("navContact");
  const aboutLi = document.getElementById("navAbout");

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
  welcomeMessage();

  setLanguage(localStorage.getItem("lang") || "no");
}
