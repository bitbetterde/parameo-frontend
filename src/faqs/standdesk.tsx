import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <h2>From a sitting position to a standing workstation</h2>
    <p>
      A simple wooden desk attachment that can be assembled from at least three parts. The plug-in connections work without screws, one or more shelves can be flexibly sized and varied in height. The StandDesk turns any desk, kitchen table, workbench or mobile home into a pleasant working place in a standing position. In individual parts, the StandDesk is flat transportable and almost indestructible.
    </p>
    <img src="/images/regenholz-parameo_StandDesk_0149.webp" alt="" />
    <h2>Specs</h2>
    <ol>
      <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
      <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
    </ol>
    <p>
      Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies
      tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices
      congue nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula
      elit.
    </p>
  </>
);

export default {
  title: "StandDesk",
  id: "standdesk",
  tags: ["Design"]["Manufacturing"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 9,
} as IFaqFile;
