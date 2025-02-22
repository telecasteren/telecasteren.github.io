import { userMessage } from "/js/app/utils/validation/userMessage.js";
import { portfolioContent, pageContent } from "/js/app/utils/constants.js";
import { cardsHtml } from "/js/app/projects/cards/cardsHtml.js";
import { projectText } from "/js/app/projects/textContent.js";

export function renderProjects(projects) {
  pageContent.classList.remove("landing-content");
  pageContent.classList.add("projects-content");

  try {
    const container = document.createElement("div");
    container.className = "projectsContainer";

    projectText();

    projects.forEach((project) => {
      const cards = cardsHtml(project);
      container.appendChild(cards);
    });

    portfolioContent.appendChild(container);
    pageContent.appendChild(portfolioContent);
  } catch (error) {
    const errorMessage = userMessage("Oops! Couldn't load the projects");
    portfolioContent.appendChild(errorMessage);
    throw error;
  }
}
