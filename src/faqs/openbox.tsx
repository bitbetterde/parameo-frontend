import { IFaqFile } from "@interfaces/IFaq";

const body = (
  <>
    <h2>Flexibly organize, transport and store.</h2>
    <p>
      The "OpenBox" by regenholz was designed as a simple, stable, portable and stackable box for use in the workshop.  As a whole or with simple divider inserts, the box can be used for storage and transport of different things.
    </p>
    <img src="/images/regenholz-parameo_OpenBox_pic-02.webp" alt="" />
    <h2>Specs</h2>
    <ol>
      <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
      <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
    </ol>
    <p>
      Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies
      tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices
      congue nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula
      elit.
    </p>
  </>
);

export default {
  title: "OpenBox",
  id: "openbox",
  tags: ["Design"]["Manufacturing"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 6,
} as IFaqFile;
