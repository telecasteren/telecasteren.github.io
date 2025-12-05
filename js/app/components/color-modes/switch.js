import { switchColorMode } from "/js/app/components/color-modes/toggle-events.js";
import { pageContent } from "/js/app/utils/constants.js";

export function colorModeToggle() {
  const storedColorMode = window.localStorage.getItem("colorMode");

  const toggleContainer = document.createElement("div");
  toggleContainer.className = "toggleContainer";

  const toggleSwitch = document.createElement("div");
  toggleSwitch.classList.add("toggleSwitch", "glowBorderBtn");
  toggleSwitch.id = "colorModeToggle";
  toggleSwitch.setAttribute(
    "data-i18n",
    storedColorMode === "dark" ? "dark" : "light"
  );

  pageContent.prepend(toggleSwitch);

  const projectsLi = document.getElementById("projectsLi");
  if (projectsLi && projectsLi.classList.contains("active")) {
    toggleSwitch.classList.add("projectsSwitch");
  }

  if (pageContent) {
    toggleSwitch.addEventListener("click", () => {
      switchColorMode();
      setLanguage(localStorage.getItem("lang") || "no");
    });
  }
}
