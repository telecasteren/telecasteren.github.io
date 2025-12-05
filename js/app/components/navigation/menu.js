import { mainSection } from "/js/app/utils/constants.js";
import { mobileMenuEvents } from "/js/app/event-listeners/mobile-menu-events/mobile-menu-events.js";

export function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menuContainer";

  const menuList = document.createElement("ul");
  menuList.className = "menuList";
  menuList.style.maxHeight = "0";

  const mobileMenu = document.createElement("div");
  mobileMenu.className = "mobileMenu";
  const mobileMenuSr = document.createElement("span");
  mobileMenuSr.className = "sr-only";
  mobileMenuSr.textContent = "Open menu";
  mobileMenu.appendChild(mobileMenuSr);

  const home = document.createElement("li");
  home.classList.add("nav-li", "active");
  home.id = "navHome";
  home.setAttribute("data-i18n", "navHome");

  const about = document.createElement("li");
  about.classList.add("nav-li");
  about.id = "navAbout";
  about.setAttribute("data-i18n", "navAbout");

  const projects = document.createElement("li");
  projects.classList.add("nav-li");
  projects.id = "navProjects";
  projects.setAttribute("data-i18n", "navProjects");

  const contact = document.createElement("li");
  contact.classList.add("nav-li");
  contact.id = "navContact";
  contact.setAttribute("data-i18n", "navContact");

  menuList.appendChild(home);
  menuList.appendChild(about);
  menuList.appendChild(projects);
  menuList.appendChild(contact);
  menuContainer.appendChild(mobileMenu);
  menuContainer.appendChild(menuList);
  mainSection.prepend(menuContainer);

  mobileMenuEvents();

  setLanguage(localStorage.getItem("lang") || "no");
}
