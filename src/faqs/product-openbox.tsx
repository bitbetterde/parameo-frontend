import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Flexibly organize, transport and store.</h2>
    <p>
      The "OpenBox" by regenholz was designed as a simple, stable, portable and
      stackable box for use in workshops and offices. As a whole or with simple divider
      inserts, the box can be used for storage and transport of tools and things.
    </p>
    <img src="/images/regenholz-parameo_OpenBox_pic-02.webp" alt="" />
    <h2>Configuration hint</h2>
    <p>
    There is a norm for storage boxes in Europe which may help you configure your OpenBox dimensions. All containers in the Euronorm format are derived from the basic dimension 600 x 400 mm and are perfectly combinable with each other.
    </p>
  </>
);

export default {
  title: "Product: OpenBox",
  id: "product-openbox",
  tags: ["Design", "Manufacturing"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 8,
} as IFaqFile;
