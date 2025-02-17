import {
  pageContent,
  welcomeContent,
  portfolioContent,
} from "/js/app/utils/constants.js";
import { welcomeMessage } from "/js/app/landing/welcomeMessage.js";
import { renderProjects } from "/js/app/projects/cards/renderProjects.js";
import { playVideo } from "/js/app/eventListeners/videoEvents.js";
import projects from "/resources/projects/projects.js";

export function menuEvents() {
  const menuList = document.querySelector(".menuList");
  if (!menuList) return;

  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");

  function loadHome() {
    if (homeLi.classList.contains("active")) return;

    homeLi.classList.add("active");
    projectsLi.classList.remove("active");

    pageContent.innerHTML = "";
    welcomeContent.innerHTML = "";

    welcomeMessage();
  }

  function loadProjects() {
    if (projectsLi.classList.contains("active")) return;

    projectsLi.classList.add("active");
    homeLi.classList.remove("active");

    portfolioContent.innerHTML = "";
    pageContent.innerHTML = "";

    renderProjects(projects);
    playVideo();
  }

  homeLi.addEventListener("click", () => {
    loadHome();
    window.location.hash = "#home";
  });

  projectsLi.addEventListener("click", () => {
    loadProjects();
    window.location.hash = "#projects";
  });

  // Making sure URL and content always reflect the correct pathname
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#projects") {
      loadProjects();
    } else {
      loadHome();
    }
  });

  if (window.location.hash === "#projects") {
    loadProjects();
  } else {
    loadHome();
  }

  if (window.location.pathname.includes("index.html")) {
    window.location.replace("#home");
  }
}
