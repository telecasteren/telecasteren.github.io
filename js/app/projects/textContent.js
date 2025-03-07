import { portfolioContent } from "/js/app/utils/constants.js";

export function projectText() {
  const textContainer = document.createElement("div");
  textContainer.id = "project-textContainer";

  const title = document.createElement("h1");
  title.id = "featuredTitle";
  title.innerText = "Featured projects";

  const text = document.createElement("p");
  text.id = "featuredText";
  text.innerHTML = `I've put together three of my bigger website projects. <span>Hover over the images to get a sneak peak!</span><br/>
  These were all developed during my front-end studies at Noroff School of Technology and Digital Media.`;

  textContainer.appendChild(title);
  textContainer.appendChild(text);

  portfolioContent.appendChild(textContainer);
}
