import { learnMoreTexts } from "/js/app/landing/about/learnMore/learnMoreText.js";

export function learnMoreSection() {
  const aboutText = document.querySelector(".textContainer");

  const section = document.createElement("section");
  section.className = "learnMoreSection";

  const learnMoreTextContainer = document.createElement("section");
  learnMoreTextContainer.classList.add("learnMoreTextContainer");

  const learnMoreTitle = document.createElement("h4");
  learnMoreTitle.id = "aboutTitle";
  learnMoreTitle.classList.add("aboutTitle", "learnMoreTitle");
  learnMoreTitle.innerText = "More about me";

  learnMoreTexts.forEach((textContent) => {
    const textElement = document.createElement("p");
    textElement.id = "aboutText";
    textElement.className = textContent.className;
    textElement.innerHTML = textContent.content;
    learnMoreTextContainer.appendChild(textElement);
  });

  learnMoreTextContainer.prepend(learnMoreTitle);
  section.appendChild(learnMoreTextContainer);
  aboutText.appendChild(section);
}
