import { skillSet } from "/resources/skills/skillset.js";
import { skillRanges } from "/resources/skills/skill-ranges.js";

export function skillsetSection() {
  const aboutText = document.querySelector(".experienceContainer");

  const section = document.createElement("section");
  section.className = "skillsetSection";

  const skillsetTextContainer = document.createElement("section");
  skillsetTextContainer.classList.add("skillsetTextContainer");

  const skillSetTitle = document.createElement("h4");
  skillSetTitle.id = "skillSetTitle";
  skillSetTitle.classList.add("aboutTitle");
  skillSetTitle.innerText = "Skillset";

  const skillContainer = document.createElement("div");
  skillContainer.className = "skillContainer";

  skillSet.forEach((skill, index) => {
    const skillSection = document.createElement("div");
    skillSection.className = skill.className;

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

  skillsetTextContainer.appendChild(skillContainer);
  skillsetTextContainer.prepend(skillSetTitle);
  section.appendChild(skillsetTextContainer);
  aboutText.appendChild(section);

  // Skill range values updated here
  skillRanges();
}
