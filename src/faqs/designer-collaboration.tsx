import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>How to contribute a 3D modell design to parameo?</h2>
    <p>
      To offer adding new product designs to parameo we provide a collection of conventions which were set in order to agree on e.g. certain formats of FreeCAD project file structures etc. <a target="_blank" href="https://gitlab.regenholz.de/bat/bat-dev/-/blob/develop/documentation/CONVENTIONS.md?ref_type=heads"> Find the conventions here.</a> there is also a standardized workflow for designers:
    </p>
    <ol>
      <li>follow FreeCAD Spreadsheet template</li>
      <li>use FreeCAD to model parametric designs</li>
      <li>test your parametric model on different sizes</li>
      <li>specify minimum and maximum sizes</li>
      <li>write a short construction manual</li>
      <li>write a BOM</li>
    </ol>
    <img src="/images/regenholz-parameo_faq-design.gif" alt="FreeCAD Spreadsheet" />
    
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
