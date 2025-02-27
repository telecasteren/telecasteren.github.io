export function closeAboutBtn() {
  const closeAbout = document.getElementById("closeAbout");

  closeAbout.addEventListener("click", () => {
    const textContainer = document.querySelector(".textContainer");
    const isHidden = textContainer.classList.toggle("hidden");

    if (isHidden) {
      window.location.hash = "#home";
      history.pushState(null, null, "#home");

      window.scrollTo({ top: 0, behavior: "smooth" });
      closeAbout.style.display = "none";
    } else {
      window.location.hash = "#about";
      history.pushState(null, null, "#about");

      closeAbout.style.display = "flex";
    }
  });
}
