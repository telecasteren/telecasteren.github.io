import { mainSection } from "/js/app/utils/constants.js";

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

  const contact = document.createElement("li");
  contact.classList.add("nav-li");
  contact.id = "contactLi";
  contact.textContent = "CONTACT";

  menuList.appendChild(home);
  menuList.appendChild(projects);
  menuList.appendChild(contact);
  menuContainer.appendChild(menuList);

  mainSection.prepend(menuContainer);
}
