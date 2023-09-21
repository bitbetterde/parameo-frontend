import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
      We are happy about your feedback – please use our user feedback form:
    </p>
    <p>
      <a href="https://www.parameo.de/contact" target="_blank">
        Feedback form
      </a>
    </p>

    <img src="/images/faq-addmoremachines.webp" alt="cnc machines" />
  </>
);

export default {
  title: "Feedback",
  id: "feedback",
  tags: [""],
  body,
  teaser:
    "User feedback",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
