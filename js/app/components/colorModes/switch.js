import { switchColorMode } from "/js/app/components/colorModes/toggleEvents.js";
import { mainSection } from "/js/app/utils/constants.js";
import { updateSwitchMargin } from "/js/app/eventListeners/updateSwitchMargin.js";

export function colorModeToggle() {
  const toggleContainer = document.createElement("div");
  toggleContainer.className = "toggleContainer";

  const toggleSwitch = document.createElement("div");
  toggleSwitch.className = "toggleSwitch";
  toggleSwitch.innerText = "DarkMode/LightMode";

  mainSection.prepend(toggleSwitch);

  if (mainSection) {
    toggleSwitch.addEventListener("click", () => {
      switchColorMode();
    });
  }

  if (toggleSwitch) {
    window.addEventListener("hashchange", updateSwitchMargin);
    window.addEventListener("load", updateSwitchMargin);
  }
}
