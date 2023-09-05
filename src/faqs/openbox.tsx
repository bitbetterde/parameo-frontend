import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <h2>Flexibly organize, transport and store.</h2>
    <p>
      The "OpenBox" by regenholz was designed as a simple, stable, portable and stackable box for use in the workshop.  As a whole or with simple divider inserts, the box can be used for storage and transport of different things.
    </p>
    <img src="/images/regenholz-parameo_OpenBox_pic-02.webp" alt="" />
    <h2>Specs / Links</h2>
    <ol>
      <li>...</li>
      <li>...</li>
    </ol>
  </>
);

export default {
  title: "OpenBox",
  id: "openbox",
  tags: ["Design","Manufacturing"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 8,
} as IFaqFile;
