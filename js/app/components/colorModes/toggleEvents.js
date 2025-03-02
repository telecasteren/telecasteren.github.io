import { displayCustomCursor } from "/js/app/components/customCursor/cursor.js";

export function switchColorMode() {
  const colorModes = ["light", "dark"];

  const systemDefault = window.matchMedia("prefers-color-scheme: dark").matches
    ? "dark"
    : "light";

  const storedColorMode = window.localStorage.getItem("colorMode");
  const initialColorMode = storedColorMode || systemDefault;

  colorModes.forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(initialColorMode);

  if (!storedColorMode) {
    window.localStorage.setItem("colorMode", initialColorMode);
  }

  const currentColor = colorModes.find((mode) =>
    document.body.classList.contains(mode)
  );
  const currentIndex = colorModes.indexOf(currentColor);
  const nextIndex = (currentIndex + 1) % colorModes.length;
  const nextColor = colorModes[nextIndex];

  colorModes.forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(nextColor);

  window.localStorage.setItem("colorMode", nextColor);
  displayCustomCursor(nextColor);
}
document.addEventListener("DOMContentLoaded", switchColorMode);
