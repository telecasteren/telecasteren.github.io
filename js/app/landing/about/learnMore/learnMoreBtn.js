import { learnMoreSection } from "/js/app/landing/about/learnMore/learnMoreSection.js";

export function learnMoreBtn() {
  const aboutText = document.querySelector(".textContainer");

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";

  const learnMoreBtn = document.createElement("div");
  learnMoreBtn.classList.add("learnMoreBtn", "glowBorderBtn");
  learnMoreBtn.innerText = "Learn more";

  const aboutLi = document.getElementById("aboutLi");
  if (aboutLi && aboutLi.classList.contains("active")) {
    buttonContainer.appendChild(learnMoreBtn);
    aboutText.appendChild(buttonContainer);
  }

  learnMoreBtn.addEventListener("click", () => {
    learnMoreSection();

    if (learnMoreSection) {
      buttonContainer.classList.add("hidden");
    } else {
      buttonContainer.classList.remove("hidden");
    }
  });
}
