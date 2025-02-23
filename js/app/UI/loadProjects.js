import { pageContent, portfolioContent } from "/js/app/utils/constants.js";
import { renderProjects } from "/js/app/projects/cards/renderProjects.js";
import { playVideo } from "/js/app/eventListeners/videoEvents.js";
import projects from "/resources/projects/projects.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";

export function loadProjects() {
  const projectsLi = document.getElementById("projectsLi");

  pageContent.classList.remove("landing-content");
  pageContent.classList.remove("contact-page");

  if (projectsLi.classList.contains("active")) return;

  projectsLi.classList.add("active");
  homeLi.classList.remove("active");
  contactLi.classList.remove("active");

  portfolioContent.innerHTML = "";
  pageContent.innerHTML = "";

  colorModeToggle();
  renderProjects(projects);
  playVideo();
}
