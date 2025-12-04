import { toggleMenu } from "/js/app/event-listeners/mobile-menu-events/toggle-menu.js";

export function mobileMenuEvents() {
  const mobileMenu = document.querySelector(".mobileMenu");

  mobileMenu.addEventListener("click", () => {
    toggleMenu();
  });
}
