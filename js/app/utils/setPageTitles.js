export async function setPageTitles() {
  const path = window.location.hash;

  const pageTitles = {
    "#about": "About | Tele Caster Nilsen",
    "#projects": "Projects | Tele Caster Nilsen",
    "#contact": "Contact | Tele Caster Nilsen",
  };

  document.title = pageTitles[path] || "Tele Caster Nilsen | Portfolio";
}
