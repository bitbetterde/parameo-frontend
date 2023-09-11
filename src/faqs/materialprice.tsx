import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
      The material impact is valued in kg/m3 co2 emissions ecologically and in
      €/m3 sheet pricing monetary. References are accessible and manually
      adaptable via the admin panel, logged by a timestamp. Indicators are
      visualized on individual result page.
    </p>
  </>
);

export default {
  title: "Material Pricing",
  id: "material",
  tags: ["Manufacturing"],
  body,
  teaser: "Your bill of materials.",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
