import { hideCursor } from "/js/app/components/customCursor/hideCursor.js";

const cursorRocket = document.createElement("div");
cursorRocket.classList.add("rocketCursor");

cursorRocket.innerHTML = `
  <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Body -->
    <path d="M50 10 L75 40 L50 90 L25 40 Z" stroke="black" stroke-width="4" fill="none"/>
    
    <!-- Window -->
    <circle cx="50" cy="35" r="7" stroke="black" stroke-width="4" fill="none"/>
    
    <!-- Fins -->
    <path d="M25 50 L10 80" stroke="black" stroke-width="4" fill="none"/>
    <path d="M75 50 L90 80" stroke="black" stroke-width="4" fill="none"/>
    
    <!-- Flames -->
    <path d="M50 90 Q40 105, 50 120 Q60 105, 50 90" stroke="orange" stroke-width="4" fill="none"/>
  </svg>
`;
document.body.appendChild(cursorRocket);

export const moveCursor = document.addEventListener("mousemove", (e) => {
  cursorRocket.style.left = `${e.clientX}px`;
  cursorRocket.style.top = `${e.clientY}px`;

  hideCursor(cursorRocket);
});
