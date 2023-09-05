import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <p>
      A BOM.csv is providing a list of needed resources for custom production like materials and tools, complementing product specific assembly necessities. 
    Source links are obligatory accessible and unconditionally adaptable via the admin panel.
    </p>
    <p>
    

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
