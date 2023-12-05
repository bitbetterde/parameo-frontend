import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Local demands meet local manufacturers</h2>
    <p>
      We aim to match individual production demands with local manufacturers to
      avoid transportation around the world.
      <br /> Our approach is to connect the production data, created by the
      customers themselves, with the nearest manufacturers to meet the demand at
      the closest level possible.
    </p>
    <p>
      Therefore we want to involve more manufacturers from different regions,
      integrate their cnc machines and production capacities here, to{" "}
      <b>enable lean production and local making</b>.
    </p>
    <p>
      <b>Feel free to hit us up via the contact form to join our journey!</b>
    </p>
  </>
);

export default {
  title: "For manufacturers",
  id: "for-manufacturers",
  tags: ["Manufacturing"],
  body,
  teaser: "Local Making in the making",
  showOnHomePage: false,
  order: 4,
} as IFaqFile;
