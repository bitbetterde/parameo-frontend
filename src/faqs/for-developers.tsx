import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Toolstack</h2>

     <strong>Backend</strong>
      <ul>
            <li>Python</li>
            <li>
              SQL Database + shareable JSON files for material and machine
              knowledgebase
            </li>
            <li>Django REST API</li>
            <li>Headless (patched) FreeCAD automation</li>
            <li>Headless Blender</li>
            <li>Admin dashboard</li>
            <li>Wireguard VPN layer</li>
            <li>Order modules: Email and Shopify handover</li>
            <li>Dynamic impact valuation</li>
          </ul>
          <strong>Frontend</strong>
          <ul>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Tailwind UI</li>
          </ul>

    <h2>Are you ready to be part of something remarkable?</h2>
    <p>
      <b> Join the Revolution: </b> <br />
      Open source is the future of technology. Be at the forefront of the
      movement, shaping the way software is developed and shared.
    </p>
    <p>
      <b> Give Back: </b> <br />
      Open source is about giving back to the community. Your contribution helps
      others, fostering a culture of mutual support and innovation.
    </p>
    <p>
      <b> Make Your Mark: </b> <br />
      Your code, your ideas, your expertise – they all count. By contributing,
      you leave a lasting imprint on a project that could reshape industries or
      improve lives.
    </p>
    <p>
      Your passion, creativity, and commitment can drive this project to new
      heights. <br /> Join us on <a href="https://gitlab.regenholz.de/bat">GitLab</a> and let's build something amazing
      together.
    </p>
    <p>
      <b> Embrace the open-source spirit and be a part of our journey!</b>
    </p>
  </>
);

export default {
  title: "For developers",
  id: "for-developers",
  tags: ["Code"],
  body,
  teaser:
    "Your code, your ideas, your expertise – they all count. By contributing, you leave a lasting imprint on a project that could reshape industries or improve lives.",
  showOnHomePage: true,
  order: 3,
} as IFaqFile;
