import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <h2>Description</h2>
    <p>
      The Maslow CNC is a large, affordable and space-saving open-source CNC milling machine that mills useful things out of wood and other sheet materials. Since 2017, craftspeople and makers around the world have been working with the Maslow CNC. The growing community shares designs, data and experiences.
    </p>
    <img src="/images/forrest.jpg" alt="" />
    <h2>Specs</h2>
    <b> Work area max height:</b> 100cm
    <b> Work area max width:</b> 180cm
    <h2>Links</h2>
    <p>
      Project URL: https://www.maslowcnc.com/
      Documentation URL: https://gitlab.fabcity.hamburg/hardware/maslowcnc
      Repository URL: https://github.com/makermadecnc
    </p>
  </>
);

export default {
  title: "Maslow CNC",
  id: "maslowcnc",
  tags: ["Machinery", "Manufacturing"],
  body,
  teaser:
    " The Maslow CNC is a large, affordable and space-saving open-source CNC milling machine",
  showOnHomePage: true,
  order: 3,
} as IFaqFile;
