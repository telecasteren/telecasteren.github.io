export async function setPageTitles() {
  const path = window.location.hash;

  const pageTitles = {
    "#about": "Tele Caster Nilsen | About",
    "#projects": "Tele Caster Nilsen | Projects",
    "#contact": "Tele Caster Nilsen | Contact",
  };

  document.title = pageTitles[path] || "Tele Caster Nilsen | Portfolio";
}
