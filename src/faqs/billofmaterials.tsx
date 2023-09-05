import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <p>
      A BOM is generated in .csv format listing needed ressources for custom production by material choice & machine run time complementing  product specific assembly necessities. 
      The Input of values like raw material price in €/m3 must be updated manually atm via the admin panel logged by a timestamp.  
    Source links are accessible and unconditionally adaptive via the admin panel. 
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
