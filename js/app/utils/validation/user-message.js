export function userMessage(
  message,
  { className = "errorWrapper", container = null } = {}
) {
  if (message === null) {
    throw new Error("Error message is missing:", message);
  }

  const wrapper = document.createElement("div");
  wrapper.className = className;
  wrapper.textContent = String(message);
  wrapper.setAttribute("role", "alert");

  if (container?.appendChild) {
    container.appendChild(wrapper);
  }

  return wrapper;
}
