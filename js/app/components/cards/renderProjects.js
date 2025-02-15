import { userMessage } from "/js/app/utils/userMessage.js";
import { portfolioContent, pageContent } from "/js/app/utils/constants.js";
import { cardsHtml } from "/js/app/components/cards/cardsHtml.js";

export function renderProjects(projects) {
  try {
    const container = document.createElement("div");
    container.className = "projectsContainer";

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
