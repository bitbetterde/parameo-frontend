import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <h2>Sit less, move more!</h2>
    <p>
      A simple wooden desk attachment that can be assembled from at least three parts. The plug-in connections work without screws, one or more shelves can be flexibly sized and varied in height. The StandDesk turns any desk, kitchen table, workbench or mobile home into a pleasant working place in a standing position. In individual parts, the StandDesk is flat transportable and almost indestructible.
    </p>
    <img src="/images/regenholz-parameo_StandDesk_0149.webp" alt="" />
    <h2>Specs / Links</h2>
    <ol>
      <li>...</li>
      <li>...</li>
    </ol>
  </>
);

export default {
  title: "StandDesk",
  id: "standdesk",
  tags: ["Design","Manufacturing"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 9,
} as IFaqFile;
