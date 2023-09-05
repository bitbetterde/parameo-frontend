import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Origin</h2>
    <p>
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
      Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec
      est. Odio penatibus risus viverra tellus varius sit neque erat velit.
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
      Mattis mauris semper sed amet vitae sed turpis id.
    </p>
    <img src="/images/forrest.jpg" alt="" />
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
  title: "Designer collaboration",
  id: "designer-collaboration",
  tags: ["Design"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 6,
} as IFaqFile;
