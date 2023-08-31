import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <h3>Description:</h3>
    <p>
      The Maslow CNC is a large, affordable and space-saving open-source CNC milling machine that mills useful things out of wood and other sheet materials. Since 2017, craftspeople and makers around the world have been working with the Maslow CNC. The growing community shares designs, data and experiences.
    </p>
    <img src="/images/forrest.jpg" alt="" />
    <h3>Specs</h3>
    <p>
    <b> Work area max height:</b> 100cm<br>
    <b> Work area max width:</b> 180cm
    </p>
    <h3>Links:</h3>
    <p>
      <b>Project URL:</b> https://www.maslowcnc.com/ <br>
      <b>Documentation URL:</b> https://gitlab.fabcity.hamburg/hardware/maslowcnc <br>
      <b>Repository URL:</b> https://github.com/makermadecnc <br>
    </p>
  </>
);

export default {
  title: "Maslow CNC",
  id: "maslowcnc",
  tags: ["Machinery"],
  body,
  teaser:
    " The Maslow CNC is a large, affordable and space-saving open-source CNC milling machine.",
  showOnHomePage: true,
  order: 3,
} as IFaqFile;
