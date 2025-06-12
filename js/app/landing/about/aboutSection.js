import { aboutTexts } from "/js/app/landing/about/aboutText.js";
import { experience } from "/js/app/landing/about/experience.js";
import { skillsBtn } from "/js/app/landing/about/skillset/skillsBtn.js";
import { closeAboutBtn } from "/js/app/eventListeners/landing/closeAbout.js";

export function aboutContent() {
  const landingContent = document.querySelector(".page-content");

  const section = document.createElement("section");
  section.className = "aboutSection";

  const textContainer = document.createElement("section");
  textContainer.classList.add("textContainer", "hidden");

  const aboutTitle = document.createElement("h4");
  aboutTitle.id = "aboutTitle";
  aboutTitle.className = "aboutTitle";
  aboutTitle.innerText = "About me";

  aboutTexts.forEach((textContent) => {
    const textElement = document.createElement("p");
    textElement.id = "aboutText";
    textElement.className = textContent.className;
    textElement.innerHTML = textContent.content;
    textContainer.appendChild(textElement);
  });

  const experienceContainer = document.createElement("section");
  experienceContainer.classList.add("experienceContainer", "hidden");

  const experienceTitle = document.createElement("h4");
  experienceTitle.id = "experienceTitle";
  experienceTitle.className = "aboutTitle";
  experienceTitle.innerText = "Experience";

  experience.forEach((text) => {
    const textElement = document.createElement("p");
    textElement.id = "aboutText";
    textElement.className = text.className;
    textElement.innerHTML = text.content;
    experienceContainer.appendChild(textElement);
  });

  const closeAbout = document.createElement("div");
  closeAbout.id = "closeAbout";
  closeAbout.innerHTML = `<p>UP TOP</p><i class="fa-solid fa-arrow-up"></i>`;

  textContainer.prepend(aboutTitle);
  experienceContainer.prepend(experienceTitle);
  section.appendChild(textContainer);
  section.appendChild(experienceContainer);
  section.appendChild(closeAbout);
  landingContent.appendChild(section);

  if (experienceContainer) skillsBtn();
  closeAboutBtn();
}
