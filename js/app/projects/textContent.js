import { portfolioContent } from "/js/app/utils/constants.js";

export function projectText() {
  const textContainer = document.createElement("div");
  textContainer.id = "project-textContainer";

  const title = document.createElement("h1");
  title.id = "featuredTitle";
  title.innerText = "Featured projects";

  const text = document.createElement("p");
  text.id = "featuredText";
  text.setAttribute("data-i18n", "featuredText");
  // text.innerHTML = `I've put together some of my projects. <span>Hover over the images to get a sneak peak!</span>`;

  const link = document.createElement("p");
  link.id = "seeMoreText";
  link.setAttribute("data-i18n", "seeMoreText");
  // link.innerHTML = `You can find more on <a class="featuredLink" href="https://github.com/telecasteren?tab=repositories" target="_blank">GitHub</a>.`;

  textContainer.appendChild(title);
  textContainer.appendChild(text);
  textContainer.appendChild(link);

  portfolioContent.appendChild(textContainer);
}
