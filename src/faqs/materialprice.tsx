import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <p>
   The material impact is valued in kg/m3 co2 emissions ecologically and in €/m3 sheets monetary. Source links are obligatory accessible and manually adaptable via the admin panel, logged by a timestamp.
    </p>

    <img src="/images/forrest.jpg" alt="" />
    
  </>
);

export default {
  title: "Material Pricing",
  id: "material",
  tags: ["Manufacturing"],
  body,
  teaser:
    "Your bill of materials.",
  showOnHomePage: false,
  order: 3
} as IFaqFile;
