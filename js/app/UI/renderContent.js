import { loadHome } from "/js/app/UI/loadHome.js";
import { loadProjects } from "/js/app/UI/loadProjects.js";
import { loadContact } from "/js/app/UI/loadContact.js";
import { loadAbout } from "/js/app/UI/loadAbout.js";
import { closeMobileMenu } from "/js/app/eventListeners/mobileMenuEvents/closeMobileMenu.js";
import { scrollToTitle } from "/js/app/eventListeners/scrollToTitle.js";

export function renderContent() {
  const menuList = document.querySelector(".menuList");
  if (!menuList) return;

  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");
  const contactLi = document.getElementById("contactLi");
  const aboutLi = document.getElementById("aboutLi");
  const keywords = document.getElementById("landingMessage");

  homeLi.addEventListener("click", () => {
    loadHome();
    window.location.hash = "#home";

    closeMobileMenu();
  });

  projectsLi.addEventListener("click", () => {
    loadProjects();
    window.location.hash = "#projects";

    scrollToTitle("featuredTitle");
    closeMobileMenu();
  });

  contactLi.addEventListener("click", () => {
    loadContact();
    window.location.hash = "#contact";

    scrollToTitle("contactTitle");
    closeMobileMenu();
  });

  aboutLi.addEventListener("click", () => {
    loadAbout();
    window.location.hash = "#about";

    closeMobileMenu();
  });

  keywords.addEventListener("click", () => {
    loadAbout();
    window.location.hash = "#about";

    closeMobileMenu();
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
}
