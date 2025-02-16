import { portfolioContent } from "/js/app/utils/constants.js";

export function projectText() {
  const textContainer = document.createElement("div");
  textContainer.id = "project-textContainer";

  const title = document.createElement("h1");
  title.id = "featuredTitle";
  title.innerText = "Featured projects";

  const text = document.createElement("p");
  text.id = "featuredText";
  text.innerText =
    "PUT IN NICE TEXT HERE - These projects were designed and built during my front-end studies.";

  textContainer.appendChild(title);
  textContainer.appendChild(text);

  portfolioContent.appendChild(textContainer);
}
