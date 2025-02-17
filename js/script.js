import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { switchColorMode } from "/js/app/components/colorModes/toggleEvents.js";
import { menu } from "/js/app/components/navigation/menu.js";
import { welcomeMessage } from "/js/app/landing/welcomeMessage.js";

// COLORMODE
colorModeToggle();
switchColorMode();

// GENERAL CONTENT
menu();
welcomeMessage();
