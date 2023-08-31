import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <p>
      We are constantly expanding our machine library and are happy about every additional machine that can create products via parameo. To add another open-source CNC machine, please contact us directly via the contact form. Together we will integrate and document the process. Happy to connect.
    </p>
    <p>
    <a href="https://www.parameo.de/contact" target="_self">Connect Here</a></p>

    <img src="/images/forrest.jpg" alt="" />
    
  </>
);

export default {
  title: "Add More Machines",
  id: "moremachines",
  tags: ["Machinery"],
  body,
  teaser:
    "To add another open-source CNC machine, please contact us directly via the contact form. Happy to connect.",
  showOnHomePage: false,
  order: 3
} as IFaqFile;
