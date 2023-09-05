import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
      Developed with the aim to lower the boundaries of accessing laser cutting
      technology, Fabulaser Mini represents an ideal compromise between
      performance and cost. The optimized 40W CO2 laser has a cutting area of
      600x400mm, a compact machine size of 870x810x380mm and weight under 60kg.
    </p>
    <p>
      <b> Work area max height:</b> 40cm{" "}
    </p>
    <p>
      <b> Work area max width:</b> 60cm{" "}
    </p>
    <p>
      <a href="https://www.inmachines.net/Fabulasermini" target="_blank">
        Project URL
      </a>
    </p>
    <p>
      <a href="http://fabulaser.net/" target="_blank">
        Documentation URL
      </a>
    </p>
    <p>
      <a href="https://github.com/fab-machines/Fabulaser-Mini" target="_blank">
        Repository URL
      </a>
    </p>

    <img src="/images/faq-fabulasermini.webp" alt="fabulaser mini open source lasercutter" />
  </>
);

export default {
  title: "Fabulaser MINI",
  id: "fabulaser",
  tags: ["Machinery"],
  body,
  teaser:
    "The Fabulaser MINI is an open-source 40W C02 laser cutter representing an ideal compromise between performance and cost.",
  showOnHomePage: true,
  order: 2,
} as IFaqFile;
