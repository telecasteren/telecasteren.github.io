import { portfolioContent } from "/js/app/utils/constants.js";

export function projectText() {
  const textContainer = document.createElement("div");
  textContainer.id = "project-textContainer";

  const title = document.createElement("h1");
  title.id = "featuredTitle";
  title.innerText = "Featured projects";

  const text = document.createElement("p");
  text.id = "featuredText";
  text.innerText = `I've put together three of my bigger website projects. Hover over the images to get a sneak peak!
    These were all developed during my front-end studies at Noroff School of Technology and Digital Media.`;

  textContainer.appendChild(title);
  textContainer.appendChild(text);

  portfolioContent.appendChild(textContainer);
}
