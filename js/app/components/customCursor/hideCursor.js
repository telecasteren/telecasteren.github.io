export function hideCursor(cursorRocket) {
  document
    .querySelectorAll(
      "input, textarea, button, a, .nav-li, .glowBorderBtn, #closeAbout"
    )
    .forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        cursorRocket.style.display = "none";
      });

      btn.addEventListener("mouseleave", () => {
        cursorRocket.style.display = "block";
      });
    });
}
