export function toggleMenu() {
  const menuList = document.querySelector(".menuList");
  const mobileMenu = document.querySelector(".mobileMenu");

  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "800px";
    menuList.style.padding = "40px 0 40px 0";

    mobileMenu.style.position = "fixed";
  } else {
    menuList.style.maxHeight = "0px";
    menuList.style.padding = "0";

    mobileMenu.style.position = "relative";
  }
}
