import { mainSection } from "/js/app/utils/constants.js";
import { menuEvents } from "/js/app/eventListeners/menuEvents.js";

export function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menuContainer";

  const menuList = document.createElement("ul");
  menuList.className = "menuList";

  const home = document.createElement("li");
  home.classList.add("nav-li", "active");
  home.id = "homeLi";
  home.textContent = "HOME";

  const projects = document.createElement("li");
  projects.classList.add("nav-li");
  projects.id = "projectsLi";
  projects.textContent = "PROJECTS";

  menuList.appendChild(home);
  menuList.appendChild(projects);
  menuContainer.appendChild(menuList);

  mainSection.prepend(menuContainer);

  menuEvents();
}
