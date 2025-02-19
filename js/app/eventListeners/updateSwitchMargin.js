export function updateSwitchMargin() {
  const toggleSwitch = document.querySelector(".toggleSwitch");
  if (window.location.hash === "#home") {
    toggleSwitch.style.margin = "0 0 20px 165px";
  } else if (window.location.hash === "#projects") {
    toggleSwitch.style.margin = "0 0 20px 80px";
  } else {
    toggleSwitch.style.margin = "0 0 20px 80px";
  }
}
