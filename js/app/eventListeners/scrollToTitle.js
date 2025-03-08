export function scrollToTitle(elementId) {
  const pageTitle = document.getElementById(elementId);
  if (pageTitle) {
    pageTitle.scrollIntoView({ pageTitle, behavior: "smooth" });
  }
}
