import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Saves resources, loves variety!</h2>
    <p>
      The MultiFrame is a wooden picture frame designed for material-saving
      production with a laser cutter. It can be produced optionally with or
      without a plexiglass pane. Several thin layers of wood create an
      insertion: the frame can be filled with changing motifs from above.
    </p>
    <img src="/images/regenholz-parameo-MultiFrame_0521-blank.webp" alt="" />

  </>
);

export default {
  title: "Product: MultiFrame",
  id: "product-multiframe",
  tags: ["Design", "Manufacturing"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 7,
} as IFaqFile;
