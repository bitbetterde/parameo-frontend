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
    <b> Work area max height:</b> 100cm </p>
    <p>
    <b> Work area max width:</b> 180cm
    </p>
    <h3>Links:</h3>
    <p>
    <a href="https://www.maslowcnc.com/" target="_blank">Project URL</a></p>
    <p>
    <a href="https://gitlab.fabcity.hamburg/hardware/maslowcnc" target="_blank">Documentation URL</a></p>
    <p>
    <a href="https://github.com/makermadecnc" target="_blank">Repository URL</a></p>
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
