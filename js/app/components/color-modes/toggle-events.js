import { setLanguage } from "/js/app/utils/translation/translator.js";
import { displayCustomCursor } from "/js/app/components/custom-cursor/cursor.js";

export function defaultColorMode() {
  const storedColorMode = window.localStorage.getItem("colorMode");
  const initialColorMode = storedColorMode || "dark";
  const toggleSwitch = document.querySelector(".toggleSwitch");

  ["light", "dark"].forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(initialColorMode);

  if (!storedColorMode) {
    window.localStorage.setItem("colorMode", initialColorMode);
    setLanguage(localStorage.getItem("lang") || "no");
  }

  displayCustomCursor(initialColorMode);

  if (toggleSwitch) {
    toggleSwitch.setAttribute(
      "data-i18n",
      initialColorMode === "dark" ? "dark" : "light"
    );
  }
  setLanguage(localStorage.getItem("lang") || "no");
}

export function switchColorMode() {
  const toggleSwitch = document.querySelector(".toggleSwitch");
  const colorModes = ["light", "dark"];

  const currentColor = colorModes.find((mode) =>
    document.body.classList.contains(mode)
  );

  const nextColor = currentColor === "dark" ? "light" : "dark";

  colorModes.forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(nextColor);

  colorModes.forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(nextColor);

  window.localStorage.setItem("colorMode", nextColor);
  displayCustomCursor(nextColor);

  if (toggleSwitch) {
    toggleSwitch.setAttribute(
      "data-i18n",
      nextColor === "dark" ? "dark" : "light"
    );
  }
  setLanguage(localStorage.getItem("lang") || "no");
}
document.addEventListener("DOMContentLoaded", switchColorMode);
