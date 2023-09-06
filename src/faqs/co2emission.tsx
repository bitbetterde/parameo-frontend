import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    The product life cycle assesment is based on ISO 14000 Environmental
    Managementstandards, EN 15804 European Standard for Environmental Product
    Declarations (EDP) in the construction industry and PAS 2050 GHG Protocol -
    Carbon Footprinting. Your environmental footprint is indicated by raw material
    and manufacturing emissions.
    raw material emission factors in kg CO2 / m3 resource
    machine energy emission factor g CO2 / kWh machine 
    <p>Sources: - Data: PROBAS (Umwelt Bundesamt) - KNOWHOW: ECOCHAIN ...</p>
    
  </>
);

export default {
  title: "CO2 Emission",
  id: "co2",
  tags: ["Manufacturing"],
  body,
  teaser: "Your environmental footprint",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
