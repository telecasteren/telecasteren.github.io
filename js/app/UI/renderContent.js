import { loadHome } from "/js/app/UI/loadHome.js";
import { loadProjects } from "/js/app/UI/loadProjects.js";
import { loadContact } from "/js/app/UI/loadContact.js";
import { loadAbout } from "/js/app/UI/loadAbout.js";

export function renderContent() {
  const menuList = document.querySelector(".menuList");
  if (!menuList) return;

  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");
  const contactLi = document.getElementById("contactLi");
  const aboutLi = document.getElementById("aboutLi");

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

  aboutLi.addEventListener("click", () => {
    loadAbout();
    window.location.hash = "#about";
  });

  // Making sure URL and content always reflect the correct pathname
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#projects") {
      loadProjects();
    } else if (window.location.hash === "#contact") {
      loadContact();
    } else if (window.location.hash === "#about") {
      loadAbout();
    } else {
      loadHome();
    }
  });

  if (window.location.hash === "#projects") {
    loadProjects();
  } else if (window.location.hash === "#contact") {
    loadContact();
  } else if (window.location.hash === "#about") {
    loadAbout();
  } else {
    loadHome();
  }

  if (window.location.pathname.includes("index.html")) {
    window.location.replace("#home");
  }
}
