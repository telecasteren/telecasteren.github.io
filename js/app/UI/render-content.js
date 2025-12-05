import { loadHome } from "/js/app/UI/load-home.js";
import { loadProjects } from "/js/app/UI/load-projects.js";
import { loadContact } from "/js/app/UI/load-contact.js";
import { loadAbout } from "/js/app/UI/load-about.js";
import { closeMobileMenu } from "/js/app/event-listeners/mobile-menu-events/close-mobile-menu.js";
import { scrollToTitle } from "/js/app/event-listeners/scroll-to-title.js";

export function renderContent() {
  const menuList = document.querySelector(".menuList");
  if (!menuList) return;

  const homeLi = document.getElementById("navHome");
  const projectsLi = document.getElementById("navProjects");
  const contactLi = document.getElementById("navContact");
  const aboutLi = document.getElementById("navAbout");
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
    window.location.hash = "#about";
    loadAbout();
    scrollToTitle("aboutTitle");

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
