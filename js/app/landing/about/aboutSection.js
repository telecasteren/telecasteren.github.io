import { aboutTexts } from "/js/app/landing/about/aboutText.js";
import { experience } from "/js/app/landing/about/experience.js";
import { skillsBtn } from "/js/app/landing/about/skillset/skillsBtn.js";
import { closeAboutBtn } from "/js/app/eventListeners/landing/closeAbout.js";

export function aboutContent() {
  const landingContent = document.querySelector(".page-content");

  const section = document.createElement("section");
  section.className = "aboutSection";

  const textContainer = document.createElement("section");
  textContainer.classList.add("textContainer", "scroll-to-el");

  const aboutTitle = document.createElement("h4");
  aboutTitle.id = "aboutTitle";
  aboutTitle.classList.add("aboutTitle", "hidden-scroll");
  aboutTitle.innerText = "About me";

  aboutTexts.forEach((textContent) => {
    const textElement = document.createElement("p");
    textElement.id = "aboutText";
    textElement.className = textContent.className;
    textElement.classList.add("hidden-scroll");
    textElement.innerHTML = textContent.content;
    textContainer.appendChild(textElement);
  });

  const experienceContainer = document.createElement("section");
  experienceContainer.classList.add("experienceContainer", "hidden-scroll");

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

  // const observer = new IntersectionObserver((entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setTimeout(() => {
  //         entry.target.classList.remove("hidden-scroll");
  //         entry.target.classList.add("view-on-scroll");
  //       }, 400);
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // });

  // section.querySelectorAll(".hidden-scroll").forEach((el, i) => {
  //   observer.observe(el);
  //   el.style.transitionDelay = `${i * 200}ms`;
  // });

  if (experienceContainer) skillsBtn();
  closeAboutBtn();
}
