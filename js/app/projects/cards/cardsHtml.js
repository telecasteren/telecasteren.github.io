export function cardsHtml(project) {
  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cardsContainer";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.id = "project-img";
  img.src = project.img_src;
  img.alt = project.img_alt;

  const videoContainer = document.createElement("div");
  videoContainer.className = "video-container";

  const recording = document.createElement("video");
  recording.classList = "project-recording";
  recording.muted = true;
  recording.loop = true;
  recording.setAttribute("playsinline", "");
  recording.setAttribute("autoplay", "");
  recording.src = project.proj_video;
  videoContainer.appendChild(recording);

  const container = document.createElement("div");
  container.className = "container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "titleContainer";

  const h4 = document.createElement("h4");
  const boldText = document.createElement("b");
  boldText.textContent = project.title;
  h4.appendChild(boldText);

  const p = document.createElement("p");
  p.id = "project-desc";
  p.innerHTML = `${project.description}<br><br>
<b><a href="${project.proj_url}" target="_blank">Go to ${project.title}</a></b>`;

  titleContainer.appendChild(h4);
  titleContainer.appendChild(p);

  container.appendChild(titleContainer);
  card.appendChild(recording);
  card.appendChild(videoContainer);
  card.appendChild(img);
  card.appendChild(container);

  cardsContainer.appendChild(card);
  return cardsContainer;
}
