import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
  Your individual product life cycle assesment is based on ISO 14000 Environmental Managementstandards, EN 15804 European Standard for Environmental Product Declarations (EDP) in the construction industry and PAS 2050 GHG Protocol - Carbon Footprinting.
  1. material consumption 
  2. manufacturing energy
  3. finish
    <p>
   Sources:
   - Data: PROBAS (Umwelt Bundesamt)
   - KNOWHOW: ECOCHAIN 

   ... 
   
    </p>

    <img src="/images/forrest.jpg" alt="" />
    
  </>
);

export default {
  title: "co2emission",
  id: "co2",
  tags: ["Manufacturing"],
  body,
  teaser:
    "Your environmental footprint",
  showOnHomePage: false,
  order: 3
} as IFaqFile;
