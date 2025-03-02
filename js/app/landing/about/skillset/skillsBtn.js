import { skillsetSection } from "/js/app/landing/about/skillset/skillsetSection.js";

export function skillsBtn() {
  const aboutText = document.querySelector(".textContainer");

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";

  const skillsButton = document.createElement("div");
  skillsButton.classList.add("skillsButton", "glowBorderBtn");
  skillsButton.innerText = "Skillset";

  const aboutLi = document.getElementById("aboutLi");
  if (aboutLi && aboutLi.classList.contains("active")) {
    buttonContainer.appendChild(skillsButton);
    aboutText.appendChild(buttonContainer);
  }

  skillsButton.addEventListener("click", () => {
    skillsetSection();

    if (skillsetSection) {
      buttonContainer.classList.add("hidden");
    } else {
      buttonContainer.classList.remove("hidden");
    }

    setTimeout(() => {
      const skillsetTitle = document.getElementById("skillSetTitle");
      if (skillsetTitle) {
        skillsetTitle.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  });
}
