import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Bill of materials</h2>
    <p>
      A BOM.csv provides a list of needed resources based on configured product
      dimensions for custom production like materials and tools, complementing
      product specific assembly necessities.
    </p>
    <h2>Material pricing</h2>
    <p>
      The material impact is valued in kg/m3 co2 emissions ecologically and in
      €/m3 sheet pricing monetary. References are accessible and manually
      adaptable via the admin panel, logged by a timestamp. Indicators are
      visualized on individual result page.
    </p>
    <h2>Material database</h2>
    <p>
      The offerd materials are tested in manufacturing for each spectific cnc-machine. For the integration of additional materials, both the maximum working area (and corresponding availability of plate material) and the power of the cnc milling machine used are relevant. only in this way can a correct calculation of the parts and machine paths be calculated. to add additional materials to the database, please contact:
    </p>
  </>
);

export default {
  title: "Materials",
  id: "bom",
  tags: ["Manufacturing"],
  body,
  teaser: "Your bill of materials.",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
