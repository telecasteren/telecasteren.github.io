import { pageContent, portfolioContent } from "/js/app/utils/constants.js";
import { renderProjects } from "/js/app/projects/cards/render-projects.js";
import { playVideo } from "/js/app/event-listeners/video-events.js";
import projects from "/resources/projects/projects.js";
import { colorModeToggle } from "/js/app/components/color-modes/switch.js";
import { hideCursor } from "/js/app/event-listeners/custom-cursor/hide-cursor.js";

export function loadProjects() {
  const homeLi = document.getElementById("navHome");
  const projectsLi = document.getElementById("navProjects");
  const contactLi = document.getElementById("navContact");
  const aboutLi = document.getElementById("navAbout");

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
