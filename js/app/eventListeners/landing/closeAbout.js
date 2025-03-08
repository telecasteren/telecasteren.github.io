export function closeAboutBtn() {
  const closeAbout = document.getElementById("closeAbout");
  if (!closeAbout) return;

  closeAbout.addEventListener("click", () => {
    const textContainer = document.querySelector(".textContainer");
    if (!textContainer) return;

    const isHidden = textContainer.classList.toggle("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      if (isHidden) {
        window.location.hash = "#home";
        history.pushState(null, null, "#home");

        closeAbout.style.display = "none";
      } else {
        window.location.hash = "#about";
        history.pushState(null, null, "#about");

        closeAbout.style.display = "flex";
      }
    }, 300);
  });
}
