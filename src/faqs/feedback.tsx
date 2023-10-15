import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>We are happy about your feedback – please use our user feedback form:</p>
    <p>
      <a href="https://forms.gle/Dqtny9GH5sgbXrkU7" target="_blank">
        Feedback form
      </a>
    </p>
  </>
);

export default {
  title: "Feedback",
  id: "feedback",
  tags: ["Design", "Manufacturing"],
  body,
  teaser:
    "Who are you? How much you know about parametric design? What did you achieve with parameo? Do you currently have any tool that does what parameo does? We'd be glad to get your feedback to improve this tool.",
  showOnHomePage: true,
  order: 3,
} as IFaqFile;
