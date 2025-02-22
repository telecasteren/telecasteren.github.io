import {
  pageContent,
  welcomeContent,
  portfolioContent,
} from "/js/app/utils/constants.js";
import { welcomeMessage } from "/js/app/landing/welcomeMessage.js";
import { renderProjects } from "/js/app/projects/cards/renderProjects.js";
import { playVideo } from "/js/app/eventListeners/videoEvents.js";
import projects from "/resources/projects/projects.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { displayContactPage } from "/js/app/contact/displayContactPage.js";

export function renderContent() {
  const menuList = document.querySelector(".menuList");
  if (!menuList) return;

  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");
  const contactLi = document.getElementById("contactLi");

  function loadHome() {
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

  function loadProjects() {
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

  function loadContact() {
    pageContent.classList.remove("landing-content");

    if (contactLi.classList.contains("active")) return;

    contactLi.classList.add("active");
    projectsLi.classList.remove("active");
    homeLi.classList.remove("active");

    portfolioContent.innerHTML = "";
    pageContent.innerHTML = "";

    colorModeToggle();
    displayContactPage();
  }

  homeLi.addEventListener("click", () => {
    loadHome();
    window.location.hash = "#home";
  });

  projectsLi.addEventListener("click", () => {
    loadProjects();
    window.location.hash = "#projects";
  });

  contactLi.addEventListener("click", () => {
    loadContact();
    window.location.hash = "#contact";
  });

  // Making sure URL and content always reflect the correct pathname
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#projects") {
      loadProjects();
    } else if (window.location.hash === "#contact") {
      loadContact();
    } else {
      loadHome();
    }
  });

  if (window.location.hash === "#projects") {
    loadProjects();
  } else if (window.location.hash === "#contact") {
    loadContact();
  } else {
    loadHome();
  }

  if (window.location.pathname.includes("index.html")) {
    window.location.replace("#home");
  }
}
