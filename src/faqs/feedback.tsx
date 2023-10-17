import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>We are happy about your feedback – please use our <a href="https://forms.gle/Dqtny9GH5sgbXrkU7" target="_blank">feedback form</a>
    </p>
  </>
);

export default {
  title: "Feedback",
  id: "feedback",
  tags: ["Design", "Manufacturing"],
  body,
  teaser:
    "How much do you know about parametric design? What did you achieve with parameo? We'd be glad to get your feedback to improve this tool.",
  showOnHomePage: true,
  order: 3,
} as IFaqFile;
