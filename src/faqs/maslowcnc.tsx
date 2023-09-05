import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
      The Maslow CNC is a large, affordable and space-saving open-source CNC
      milling machine that mills useful things out of wood and other sheet
      materials. Since 2017, craftspeople and makers around the world have been
      working with the Maslow CNC. The growing community shares designs, data
      and experiences.
    </p>
    <p>
      <b> Work area max height:</b> 100cm{" "}
    </p>
    <p>
      <b> Work area max width:</b> 180cm
    </p>
    <p>
      <a href="https://www.maslowcnc.com/" target="_blank">
        Project URL
      </a>
    </p>
    <p>
      <a
        href="https://gitlab.fabcity.hamburg/hardware/maslowcnc"
        target="_blank"
      >
        Documentation URL
      </a>
    </p>
    <p>
      <a href="https://github.com/makermadecnc" target="_blank">
        Repository URL
      </a>
    </p>

    <img
      src="https://gitlab.fabcity.hamburg/hardware/interfacer-osh-build-workshops/maslow-cnc-bau/-/raw/main/res/assets/media/img/maslow-cnc-assembly-titelimg.jpg"
      alt="maslow cnc sketch"
    />
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
  order: 1,
} as IFaqFile;
