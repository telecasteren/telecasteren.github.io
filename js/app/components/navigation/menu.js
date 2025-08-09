import { mainSection } from "/js/app/utils/constants.js";
import { mobileMenuEvents } from "/js/app/eventListeners/mobileMenuEvents/mobileMenuEvents.js";

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
  home.id = "homeLi";
  home.textContent = "HOME";

  const about = document.createElement("li");
  about.classList.add("nav-li");
  about.id = "aboutLi";
  about.textContent = "ABOUT";

  const projects = document.createElement("li");
  projects.classList.add("nav-li");
  projects.id = "projectsLi";
  projects.textContent = "PROJECTS";

  const contact = document.createElement("li");
  contact.classList.add("nav-li");
  contact.id = "contactLi";
  contact.textContent = "CONTACT";

  menuList.appendChild(home);
  menuList.appendChild(about);
  menuList.appendChild(projects);
  menuList.appendChild(contact);
  menuContainer.appendChild(mobileMenu);
  menuContainer.appendChild(menuList);
  mainSection.prepend(menuContainer);

  mobileMenuEvents();
}
