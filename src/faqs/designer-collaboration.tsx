import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>What is parametric design?</h2>
    <p>
      Parametric design is like playing with building blocks that can change shape and size. Instead of having just one way to build something, you can use special rules to make things that can adjust and adapt. This is useful in making buildings, machines, and other things because you can quickly try out different versions to see what works best or give it the dimensions you need/want.
    </p>
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
