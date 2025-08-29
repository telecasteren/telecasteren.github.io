export function alertMessage(text, type = "info", isHtml = false) {
  const alertMessage = document.createElement("div");
  alertMessage.classList.add("alert-message", "alert", `alert-${type}`);
  alertMessage.setAttribute("role", "alert");
  alertMessage.tabIndex = -1;

  const alertContent = document.createElement("div");
  alertContent.classList.add("alert-content");

  const closeAlert = document.createElement("span");
  closeAlert.classList.add("close-alert");
  closeAlert.innerHTML = "&times;";

  const messageContent = document.createElement("div");
  messageContent.classList.add("messageContent");

  if (isHtml) {
    messageContent.innerHTML = text;
  } else {
    messageContent.innerText = text;
  }

  alertContent.appendChild(closeAlert);
  alertContent.appendChild(messageContent);
  alertMessage.appendChild(alertContent);

  const container = document.querySelector(".alert");
  if (container) {
    container.appendChild(alertMessage);
    alertMessage.focus();
  } else {
    console.log("Alert container not found");
  }

  const close = () => {
    alertMessage.style.display = "none";
    alertMessage.removeEventListener("click", onClickOutside);
    closeAlert.removeEventListener("click", onCloseClick);
  };

  const onCloseClick = (event) => {
    if (event.target === closeAlert) {
      close();
    }
  };

  const onClickOutside = (event) => {
    if (event.target === alertMessage) {
      close();
    }
  };

  closeAlert.addEventListener("click", onCloseClick);
  window.addEventListener("click", onClickOutside);

  container.style.display = "block";

  return alertMessage;
}
