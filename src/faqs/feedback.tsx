import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
      We are happy about your feedback – please use our user feedback form:
    </p>
    <p>
      <a href="https://forms.gle/Dqtny9GH5sgbXrkU7" target="_blank">
        Feedback form</a>
    </p>
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
