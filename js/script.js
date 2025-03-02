import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { switchColorMode } from "/js/app/components/colorModes/toggleEvents.js";
import { menu } from "/js/app/components/navigation/menu.js";
import { welcomeMessage } from "/js/app/landing/welcomeMessage.js";
import { renderContent } from "/js/app/UI/renderContent.js";
import { moveCursor } from "/js/app/eventListeners/customCursor/customCursorEvents.js";

// COLORMODE
colorModeToggle();
switchColorMode();

// GENERAL CONTENT
menu();
welcomeMessage();
renderContent();

// CUSTOM CURSOR
window.addEventListener("mousemove", moveCursor);
