import { alertMessage } from "/js/app/components/messages/alert-message.js";
import {
  userMessage,
  clearUserMessage,
} from "/js/app/components/messages/user-message.js";

export async function submitFormValidation() {
  const formElement = document.querySelector("form");
  formElement.setAttribute("novalidate", "");

  const inputs = [
    { element: document.querySelector("#email"), minLength: 1 },
    { element: document.querySelector("#fname"), minLength: 5 },
    { element: document.querySelector("#subject"), minLength: 10 },
    { element: document.querySelector("#message"), minLength: 20 },
  ];

  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formIsValid = inputs.every(
      (input) => input.element.value.trim().length >= input.minLength
    );

    if (formIsValid) {
      const formData = new FormData(formElement);

      try {
        const response = await fetch("https://formspree.io/f/mvgorgrq", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          alertMessage("Thank you, I'll get back to you soon! 🦀", "info");
        } else {
          userMessage(
            "warning",
            "Couldn't send your inquiry. Please try again."
          );
        }
      } catch (error) {
        userMessage("error", "Well, that was embarrassing.. Please try again.");
        throw error;
      }
    } else {
      userMessage(
        "warning",
        "Please fill out the form correctly and try again 👾"
      );
    }

    setTimeout(() => clearUserMessage(), 4000);

    formElement.reset();
  });
}
