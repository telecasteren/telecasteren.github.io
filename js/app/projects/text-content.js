import { portfolioContent } from "/js/app/utils/constants.js";

export function projectText() {
  const textContainer = document.createElement("div");
  textContainer.id = "project-textContainer";

  const title = document.createElement("h1");
  title.id = "featuredTitle";
  title.setAttribute("data-i18n", "featuredTitle");

  const text = document.createElement("p");
  text.id = "featuredText";
  text.setAttribute("data-i18n", "featuredText");

  const link = document.createElement("p");
  link.id = "seeMoreText";
  link.setAttribute("data-i18n", "seeMoreText");

  textContainer.appendChild(title);
  textContainer.appendChild(text);
  textContainer.appendChild(link);

  portfolioContent.appendChild(textContainer);
}
