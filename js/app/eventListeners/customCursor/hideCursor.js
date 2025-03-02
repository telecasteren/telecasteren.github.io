export function hideCursor(rocketCursor) {
  document
    .querySelectorAll(
      "input, textarea, button, a, .nav-li, .glowBorderBtn, #closeAbout"
    )
    .forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        rocketCursor.style.display = "none";
      });

      btn.addEventListener("mouseleave", () => {
        rocketCursor.style.display = "block";
      });
    });
}
