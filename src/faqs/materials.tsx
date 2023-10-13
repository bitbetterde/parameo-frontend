import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Material database</h2>
    <p>
      Material dimensions may differ by availability and location-dependent merchants. <b>Please adapt sheet size for minimal offcuts.</b> Also the pricing may differ by market development and location-dependend sources. </p>
      <p>
To integrate additional materials, both the maximum working area and the power of the cnc machine are significant and should be adjusted via the admin panel to ensure correct calculations of product parts and machine paths. </p>
<p>
The offered materials are tested for manufacturing with featured CNC machinery. Provided options for materials and their sources are independent suggestions and are <b>easy to change via the admin panel.</b> 
    </p>
    
    <h2>Material pricing</h2>
    <p>
      The material impact is valued in kg/m3 co2 emissions ecologically and in
      €/m3 sheet pricing monetary. Indicators are visualized on individual result page. References are accessible, manually
      adaptable via the admin panel and logged by a timestamp. 
    </p>

  </>
);

export default {
  title: "Materials",
  id: "materials",
  tags: ["Manufacturing"],
  body,
  teaser: "Material database",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
