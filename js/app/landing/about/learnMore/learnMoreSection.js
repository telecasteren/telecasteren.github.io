import { skillSet } from "/js/app/landing/about/learnMore/skills/skillset.js";
import { skillRanges } from "/js/app/landing/about/learnMore/skills/skillRanges.js";

export function learnMoreSection() {
  const aboutText = document.querySelector(".textContainer");

  const section = document.createElement("section");
  section.className = "learnMoreSection";

  const learnMoreTextContainer = document.createElement("section");
  learnMoreTextContainer.classList.add("learnMoreTextContainer");

  const learnMoreTitle = document.createElement("h4");
  learnMoreTitle.id = "skillSetTitle";
  learnMoreTitle.classList.add("aboutTitle", "learnMoreTitle");
  learnMoreTitle.innerText = "Skillset";

  const skillContainer = document.createElement("div");
  skillContainer.className = "skillContainer";

  skillSet.forEach((skill, index) => {
    const skillSection = document.createElement("div");
    skillSection.className = skill.className;
    skillSection.classList.add("learnMoreText");

    const title = document.createElement("p");
    title.innerHTML = skill.content;
    skillSection.appendChild(title);

    if (skill.bullets) {
      skill.bullets.forEach((bullet) => {
        const wrapper = document.createElement("div");
        wrapper.className = "skill-wrapper";

        const label = document.createElement("label");
        label.className = "skill-label";
        label.textContent = bullet;
        label.setAttribute("for", `range-${index}-${bullet}`);

        const rangeInput = document.createElement("input");
        rangeInput.type = "range";
        rangeInput.setAttribute("disabled", "");
        rangeInput.className = "rangeInput";
        rangeInput.id = `range-${index}-${bullet}`;
        rangeInput.min = 0;
        rangeInput.max = 100;
        rangeInput.value = 50;

        wrapper.appendChild(label);
        wrapper.appendChild(rangeInput);
        skillSection.appendChild(wrapper);
      });
    }

    skillContainer.appendChild(skillSection);
  });

  learnMoreTextContainer.appendChild(skillContainer);
  learnMoreTextContainer.prepend(learnMoreTitle);
  section.appendChild(learnMoreTextContainer);
  aboutText.appendChild(section);

  // Skill range values updated here
  skillRanges();
}
