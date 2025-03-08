export function hideCursor(rocketCursor) {
  if (!rocketCursor) return;

  const buttonElements = document.querySelectorAll(
    "input, textarea, button, a, .nav-li, .cardsContainer, .glowBorderBtn, #closeAbout,"
  );

  buttonElements.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      rocketCursor.style.display = "none";
    });

    btn.addEventListener("mouseleave", () => {
      rocketCursor.style.display = "block";
    });
  });

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      rocketCursor.style.display = window.innerWidth < 1024 ? "none" : "block";
    }, 100);
  });

  if (window.innerWidth < 1024) {
    rocketCursor.style.display = "none";
  }
}
