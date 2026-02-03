import { colorModeToggle } from "/js/app/components/color-modes/switch.js";
import {
  switchColorMode,
  defaultColorMode,
} from "/js/app/components/color-modes/toggle-events.js";
import { menu } from "/js/app/components/navigation/menu.js";
import { welcomeMessage } from "/js/app/landing/welcome-message.js";
import { renderContent } from "/js/app/UI/render-content.js";
import { setPageTitles } from "/js/app/utils/set-page-titles.js";

// COLORMODE
colorModeToggle();
defaultColorMode();
switchColorMode();

// GENERAL CONTENT
menu();
welcomeMessage();
renderContent();

// URL PATH ON HASHCHANGE
setPageTitles();
window.addEventListener("hashchange", setPageTitles);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".menuContainer");
  if (!container) return;

  const alreadyRan = sessionStorage.getItem("animateTopBorder");
  if (!alreadyRan) {
    container.classList.add("animate-once");
    sessionStorage.setItem("animateTopBorder", "1");
  }
});
