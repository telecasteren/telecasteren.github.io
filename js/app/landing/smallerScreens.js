// function smallerScreens() {
//   const existingImage = document.getElementById("landingImage");
//   if (existingImage) existingImage.parentElement.remove();

//   if (window.innerWidth < 778) {
//     welcomeContent.prepend(container);
//   } else {
//     welcomeContent.appendChild(container);
//   }
// }

// if (!window.hasLandingImageListener) {
//   window.addEventListener("resize", smallerScreens);
//   window.hasLandingImageListener = true;
// }

// if (document.readyState === "loading") {
//   window.addEventListener("DOMContentLoaded", smallerScreens);
// } else {
//   smallerScreens();
// }

// FROM OTHER PROJECT:
export function swapElementPositions() {
  const container = document.querySelector(".container");
  if (!container) return;

  const blogImg = container.querySelector(".blogImg");
  const textContainer = container.querySelector(".textContainer");

  const alterButton = document.createElement("h2");
  alterButton.textContent = "Want to alter this view? ↔️";
  alterButton.classList.add("alterButton");

  function screenSizeCheck() {
    if (window.innerWidth < 1024) {
      alterButton.style.display = "none";
    } else {
      alterButton.style.display = "block";

      if (!document.querySelector(".alterButton")) {
        container.prepend(alterButton);
      }
    }
  }
  screenSizeCheck();
  window.addEventListener("resize", screenSizeCheck);

  alterButton.addEventListener("click", () => {
    const postContent = document.querySelector(".postContent");

    if (postContent) {
      postContent.classList.toggle("alteredVersion");
      const areElementsAltered =
        postContent.classList.contains("alteredVersion");

      alterButton.textContent = areElementsAltered
        ? "Want to alter this view? ↕️"
        : "Want to alter this view? ↔️";

      if (areElementsAltered) {
        blogImg.classList.add("blogImgAltered");

        container.appendChild(textContainer);
        container.appendChild(blogImg);
      } else {
        blogImg.classList.remove("blogImgAltered");

        container.appendChild(blogImg);
        container.appendChild(textContainer);
      }
    }
  });

  container.prepend(alterButton);
}
