import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <p>
      A BOM is generated in .csv format listing needed ressources for custom production like material & machine run time, complementing product specific assembly necessities. 
    Source links are obligatory accessible and unconditionally adaptive via the admin panel. 
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
