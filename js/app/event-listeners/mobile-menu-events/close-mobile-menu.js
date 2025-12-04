export function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobileMenu");
  const menuList = document.querySelector(".menuList");
  if (!menuList) return;

  menuList.style.maxHeight = "0px";
  menuList.style.padding = "0";
  mobileMenu.style.position = "relative";
}
