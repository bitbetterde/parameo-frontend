import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
      A BOM.csv provides a list of needed resources based on configured product
      dimensions for custom production like materials and tools, complementing
      product specific assembly necessities.
    </p>
  </>
);

export default {
  title: "Bill of Materials",
  id: "bom",
  tags: ["Manufacturing"],
  body,
  teaser: "Your bill of materials.",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
