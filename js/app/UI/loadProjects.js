import { pageContent, portfolioContent } from "/js/app/utils/constants.js";
import { renderProjects } from "/js/app/projects/cards/renderProjects.js";
import { playVideo } from "/js/app/eventListeners/videoEvents.js";
import projects from "/resources/projects/projects.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { hideCursor } from "/js/app/eventListeners/customCursor/hideCursor.js";

export function loadProjects() {
  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");
  const contactLi = document.getElementById("contactLi");
  const aboutLi = document.getElementById("aboutLi");

  pageContent.classList.remove("landing-content");
  pageContent.classList.remove("contact-page");

  if (projectsLi.classList.contains("active")) return;

  projectsLi.classList.add("active");
  homeLi.classList.remove("active");
  contactLi.classList.remove("active");
  aboutLi.classList.remove("active");

  portfolioContent.innerHTML = "";
  pageContent.innerHTML = "";

  colorModeToggle();
  hideCursor();
  renderProjects(projects);
  playVideo();

  setLanguage(localStorage.getItem("lang") || "no");
}
