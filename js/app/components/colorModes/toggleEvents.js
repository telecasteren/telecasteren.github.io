import { displayCustomCursor } from "/js/app/components/customCursor/cursor.js";

export function defaultColorMode() {
  const storedColorMode = window.localStorage.getItem("colorMode");
  const initialColorMode = storedColorMode || "dark";
  const toggleSwitch = document.querySelector(".toggleSwitch");

  ["light", "dark"].forEach((mode) => document.body.classList.remove(mode));
  document.body.classList.add(initialColorMode);

  if (!storedColorMode) {
    window.localStorage.setItem("colorMode", initialColorMode);
  }

  displayCustomCursor(initialColorMode);

  if (toggleSwitch) {
    toggleSwitch.innerText =
      initialColorMode === "dark" ? "Turn the light on" : "Turn the light off";
  }
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
    toggleSwitch.innerText =
      nextColor === "dark" ? "Turn the light on" : "Turn the light off";
  }
}
document.addEventListener("DOMContentLoaded", switchColorMode);
