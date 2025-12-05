import { skillsBtn } from "/js/app/landing/about/skillset/skills-btn.js";
import { closeAboutBtn } from "/js/app/event-listeners/landing/close-about.js";

export function aboutContent() {
  const landingContent = document.querySelector(".page-content");

  const section = document.createElement("section");
  section.className = "aboutSection";

  const textContainer = document.createElement("section");
  textContainer.classList.add("textContainer");

  const aboutTitle = document.createElement("h4");
  aboutTitle.id = "aboutTitle";
  aboutTitle.classList.add("aboutTitle", "hidden-scroll");
  aboutTitle.setAttribute("data-i18n", "aboutTitle");

  const playfulText = document.createElement("p");
  playfulText.id = "playfulText";
  playfulText.setAttribute("data-i18n", "playfulText");

  const simpleText = document.createElement("p");
  simpleText.id = "simpleText";
  simpleText.setAttribute("data-i18n", "simpleText");

  const efficientText = document.createElement("p");
  efficientText.id = "efficientText";
  efficientText.setAttribute("data-i18n", "efficientText");

  textContainer.appendChild(playfulText);
  textContainer.appendChild(simpleText);
  textContainer.appendChild(efficientText);

  const experienceContainer = document.createElement("section");
  experienceContainer.classList.add("experienceContainer", "hidden-scroll");

  const experienceTitle = document.createElement("h4");
  experienceTitle.id = "experienceTitle";
  experienceTitle.className = "aboutTitle";
  experienceTitle.setAttribute("data-i18n", "experienceTitle");

  const experience1 = document.createElement("p");
  experience1.id = "experience1";
  experience1.setAttribute("data-i18n", "experience1");

  const experience2 = document.createElement("p");
  experience2.id = "experience2";
  experience2.setAttribute("data-i18n", "experience2");

  const experience3 = document.createElement("p");
  experience3.id = "experience3";
  experience3.setAttribute("data-i18n", "experience3");

  experienceContainer.appendChild(experience1);
  experienceContainer.appendChild(experience2);
  experienceContainer.appendChild(experience3);

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
