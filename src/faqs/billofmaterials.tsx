import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <p>
      A BOM.csv provides a list of needed resources for custom production like materials and tools, complementing product specific assembly necessities. 
    </p>

    <img src="/images/forrest.jpg" alt="" />
    
  </>
);

export default {
  title: "Bill of Materials",
  id: "bom",
  tags: ["Manufacturing"],
  body,
  teaser:
    "Your bill of materials.",
  showOnHomePage: false,
  order: 3
} as IFaqFile;
