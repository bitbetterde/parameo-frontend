import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>How to contribute a 3D modell design to parameo?</h2>
    <ol>
      <li>follow FreeCAD Spreadsheet template</li>
      <li>use FreeCAD to model parametric designs</li>
      <li>test your parametric model on different sizes</li>
      <li>specify minimum and maximum sizes</li>
      <li>write a short construction manual</li>
      <li>write a BOM</li>
    </ol>
    <p>
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
      Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec
      est. Odio penatibus risus viverra tellus varius sit neque erat velit.
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
      Mattis mauris semper sed amet vitae sed turpis id.
    </p>
    <img src="/images/forrest.jpg" alt="" />
    <h2>Specs</h2>
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
