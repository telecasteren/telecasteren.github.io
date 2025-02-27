import { aboutTexts } from "/js/app/landing/about/aboutText.js";
import { closeAboutBtn } from "/js/app/eventListeners/closeAbout.js";

export function aboutContent() {
  const landingContent = document.querySelector(".page-content");

  const section = document.createElement("section");
  section.className = "aboutSection";

  const textContainer = document.createElement("section");
  textContainer.classList.add("textContainer", "hidden");

  const aboutTitle = document.createElement("h4");
  aboutTitle.id = "aboutTitle";
  aboutTitle.className = "aboutBtn";
  aboutTitle.innerText = "Get to know me";

  const closeAbout = document.createElement("div");
  closeAbout.id = "closeAbout";
  closeAbout.innerHTML = `<p>UP TOP</p><i class="fa-solid fa-arrow-up"></i>`;

  aboutTexts.forEach((textContent) => {
    const textElement = document.createElement("p");
    textElement.id = "aboutText";
    textElement.className = textContent.className;
    textElement.innerHTML = textContent.content;
    textContainer.appendChild(textElement);
  });

  textContainer.prepend(aboutTitle);
  section.appendChild(textContainer);
  section.appendChild(closeAbout);
  landingContent.appendChild(section);

  closeAboutBtn();
}
