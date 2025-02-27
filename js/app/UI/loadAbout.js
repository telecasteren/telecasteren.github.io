import { pageContent, welcomeContent } from "/js/app/utils/constants.js";
import { welcomeMessage } from "/js/app/landing/welcomeMessage.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { aboutContent } from "/js/app/landing/about/aboutSection.js";

export function loadAbout() {
  const homeLi = document.getElementById("homeLi");
  const projectsLi = document.getElementById("projectsLi");
  const contactLi = document.getElementById("contactLi");
  const aboutLi = document.getElementById("aboutLi");

  pageContent.classList.add("landing-content");
  pageContent.classList.remove("contact-page");

  if (aboutLi.classList.contains("active")) return;

  aboutLi.classList.add("active");
  homeLi.classList.remove("active");
  projectsLi.classList.remove("active");
  contactLi.classList.remove("active");

  pageContent.innerHTML = "";
  welcomeContent.innerHTML = "";

  colorModeToggle();
  welcomeMessage();
  aboutContent();

  const textContainer = document.querySelector(".textContainer");
  textContainer.classList.toggle("hidden");

  if (!textContainer.classList.contains("hidden")) {
    textContainer.scrollIntoView({ behavior: "smooth" });
  }
}
