import { hideCursor } from "/js/app/event-listeners/custom-cursor/hide-cursor.js";

export const moveCursor = document.addEventListener("mousemove", (e) => {
  const rocketCursor = document.querySelector(".rocketCursor");
  rocketCursor.style.left = `${e.clientX}px`;
  rocketCursor.style.top = `${e.clientY}px`;

  hideCursor(rocketCursor);
});
