import { alertMessage } from "/js/app/utils/validation/alertMessage.js";

export async function submitFormValidation() {
  const formElement = document.querySelector("form");
  formElement.setAttribute("novalidate", "");

  const inputs = [
    { element: document.querySelector("#email"), minLength: 1 },
    { element: document.querySelector("#fname"), minLength: 5 },
    { element: document.querySelector("#subject"), minLength: 15 },
    { element: document.querySelector("#message"), minLength: 25 },
  ];

  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formIsValid = inputs.every(
      (input) => input.element.value.trim().length >= input.minLength
    );

    if (formIsValid) {
      // alertMessage(
      //   `Thanks for your message!
      //   I'll get back to you soon 🦀`,
      //   "info"
      // );
      const formData = new FormData(formElement);

      try {
        const response = await fetch("https://formspree.io/f/mvgorgrq", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          alertMessage("Thank you, I'll get back to you soon!", "info");
        } else {
          alertMessage(
            "Couldn't send your inquiry. Please try again.",
            "warning"
          );
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alertMessage("Ooops.. Try again later!", "error");
      }
    } else {
      alertMessage(
        "Please fill out the form correctly and try again 👾",
        "warning"
      );
    }

    formElement.reset();
  });
}
