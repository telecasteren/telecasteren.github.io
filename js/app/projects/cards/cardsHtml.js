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

  const p = document.createElement("div");
  p.id = "project-desc";
  p.textContent = project.description;

  const urlDiv = document.createElement("div");
  urlDiv.className = "urlDiv";

  const goToLiveProject = document.createElement("a");
  goToLiveProject.id = "project-livesite";
  goToLiveProject.href = project.proj_url;
  goToLiveProject.target = "_blank";
  goToLiveProject.innerHTML = `${project.title} Live`;

  const goToGitRepo = document.createElement("a");
  goToGitRepo.id = "project-repo";
  goToGitRepo.href = project.git_repo;
  goToGitRepo.target = "_blank";
  goToGitRepo.innerHTML = `Github repository`;

  titleContainer.appendChild(h4);
  titleContainer.appendChild(p);

  if (project.proj_url) {
    urlDiv.appendChild(goToLiveProject);
    urlDiv.appendChild(goToGitRepo);
  } else {
    urlDiv.appendChild(goToGitRepo);
  }

  titleContainer.appendChild(urlDiv);
  container.appendChild(titleContainer);

  if (project.proj_video) {
    card.appendChild(recording);
    card.appendChild(videoContainer);
  }

  card.appendChild(img);
  card.appendChild(container);

  cardsContainer.appendChild(card);
  return cardsContainer;
}
