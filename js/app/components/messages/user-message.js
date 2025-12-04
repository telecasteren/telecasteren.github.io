export function clearUserMessage() {
  const existingAlert = document.querySelector(".user-message");
  if (existingAlert) existingAlert.remove();
}

export function userMessage(type, message) {
  clearUserMessage();

  const alertTypes = {
    info: {
      text: "um-text-info",
      bg: "um-bg-info",
      darkText: "um-dark-text-info",
    },
    error: {
      text: "um-text-error",
      bg: "um-bg-error",
      darkText: "um-dark-text-error",
    },
    success: {
      text: "um-text-success",
      bg: "um-bg-success",
      darkText: "um-dark-text-success",
    },
    warning: {
      text: "um-text-warning",
      bg: "um-bg-warning",
      darkText: "um-dark-text-warning",
    },
    alert: {
      text: "um-text-alert",
      bg: "um-bg-alert",
      darkText: "um-dark-text-alert",
    },
  };

  const { text, bg, darkText } = alertTypes[type] || alertTypes.alert;

  const div = document.createElement("div");
  div.setAttribute("role", "alert");
  div.className = `user-message-base ${text} ${bg} ${darkText}`;

  const span = document.createElement("span");
  span.className = "user-message-title";
  span.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}! `;

  div.appendChild(span);
  div.appendChild(document.createTextNode(message));
  document.body.prepend(div);

  function closeAlert(event) {
    if (!div.contains(event.target)) {
      div.remove();
      document.removeEventListener("click", closeAlert);
    }
  }

  setTimeout(() => {
    document.addEventListener("click", closeAlert);
  }, 500);
}
