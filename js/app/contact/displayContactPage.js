import { mainSection, pageContent } from "/js/app/utils/constants.js";
import { contactForm } from "/js/app/contact/contactForm.js";
import { contactPaths } from "/resources/contactInfo/contactInfo.js";

export function displayContactPage() {
  pageContent.classList.add("contact-page");

  const contactPageContainer = document.createElement("div");

  const title = document.createElement("h1");
  title.id = "contactTitle";
  title.innerText = "Contact";

  const subTitle = document.createElement("p");
  subTitle.id = "contactSubTitle";
  subTitle.innerText = `Find me at the locations listed below,
  or send me an email with the form and I'll be in touch.`;

  const list = document.createElement("ul");
  list.id = "contactList";

  // const contactPaths = ["Github", "LinkedIn", "telecasternilsen.netlify"];

  contactPaths.forEach((path) => {
    const listElement = document.createElement("li");
    listElement.id = "contact-li";
    listElement.innerHTML = path;
    list.appendChild(listElement);
  });

  contactPageContainer.appendChild(title);
  contactPageContainer.appendChild(subTitle);
  contactPageContainer.appendChild(list);
  pageContent.appendChild(contactPageContainer);
  mainSection.appendChild(pageContent);

  contactForm();
}
