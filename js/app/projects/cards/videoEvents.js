export function playVideo() {
  const projectCards = document.querySelectorAll(".cardsContainer");

  projectCards.forEach((card) => {
    const video = card.querySelector(".project-recording");
    const cardImg = card.querySelector("#project-img");

    if (!video) return;

    card.addEventListener("mouseenter", () => {
      cardImg.style.display = "none";
      video.style.display = "block";
      video.currentTime = 0;
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.style.display = "none";
      cardImg.style.display = "block";
    });
  });
}
