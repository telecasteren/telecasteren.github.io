import { toggleMenu } from "/js/app/eventListeners/mobileMenuEvents/toggleMenu.js";

export function mobileMenuEvents() {
  const mobileMenu = document.querySelector(".mobileMenu");

  mobileMenu.addEventListener("click", () => {
    toggleMenu();
  });
}
