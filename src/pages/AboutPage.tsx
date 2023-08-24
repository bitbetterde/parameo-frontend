import { ContactForm } from "@components";
import type React from "react";

interface Props {
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const AboutPage: React.FC<Props> = ({
  className,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={`mx-auto max-w-3xl ${className || ""}`}>
      {subtitle && (
        <h2 className="pt-20 text-base font-semibold text-indigo-600 uppercase text-center">
          {subtitle}
        </h2>
      )}
      <h1 className="pt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
        {title}
      </h1>
      {description && (
        <p className="pt-8 text-[20px] leading-8 text-gray-500">
          {description}
        </p>
      )}
      <div className="pt-6 max-w-none prose prose-h2:text-[30px] prose-h2:leading-10 prose-lg prose-p:leading-8 prose-a:text-indigo-600 text-gray-500">
        <p>
          The project is initiated and designed by <a href="https://regenholz.de/">regenholz</a> and funded by <a href="https://www.ifbhh.de/presse/meldung/updatehamburg-2022-1-5-millionen-euro-fuer-soziale-innovationen">'UpdateHamburg 2022'</a> of the Hamburg Authority for Economy and Innovation (BWI). The innovation core of the tool is the combination of:
        </p>
        <ul>
          <li>Machine code generator: laser cutter and CNC router Production data from parametric product designs.</li>
          <li>Networking of consumers and local producers: 'build or buy' option after configuration with local production capabilities</li>
          <li>Emission and cost transparency: Material price calculation and emission calculator for the ratio of material, machine and transport.</li>
          <li>Freely accessible system: The developed tool is based on open source software and generates machine code for open source hardware.</li>
        </ul>
        <p>
          The project proposal states:
        <blockquote>
          “The Build Assistant Tool is a freely accessible online tool for generating parametric designs and production data for CNC machines and laser     cutters. The online tool is used, for example, to design objects such as tables, shelves, lampshades, etc. according to individual dimensions. The special feature: The additional, automated calculation and provision of the machine code and material requirements enables the local production of one-offs and small series of individual designs for end users and local production facilities. On the one hand, the Build Assistant Tool acts as a digital assistant for the user during design and generates the respective machine code for production on common CNC machines from the design. Through data-based design and production, CO2 emissions and material costs are calculated automatically in addition to the machine code and material requirements. The Build Assistant Tool opens up new opportunities in local value creation for Hamburg citizens, open workshops and production companies.”
        </blockquote>
        </p>
        <h2>Development Toolstack</h2>
        <p> <strong>Backend</strong>
          <li>Python</li>
          <li>SQL Database + shareable JSON files for material and machine knowledgebase</li>
          <li>Django REST API</li>
          <li>Headless (patched) FreeCAD automation</li>
          <li>Machine runtime estimation</li>
          <li>Nesting algorithms</li>
          <li>Headless Blender</li>
          <li>Admin dashboard</li>
          <li>Wireguard VPN layer for administration</li>
          <li>Order modules: Email & Shopify integration</li>
        </p>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit.
        </p>
        <img src="/images/forrest.jpg" alt="Image of a forrest" />
        <figcaption>
          Sagittis scelerisque nulla cursus in enim consectetur quam.
        </figcaption>
        <h2>Everything you need to get up and running</h2>
        <p>
          Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
          Amet, massa quam varius orci dapibus volutpat cras. In amet eu
          ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
          viverra ridiculus non molestie. Gravida quis fringilla amet eget dui
          tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
          ac. Cras fermentum convallis quam.
        </p>
        <p>
          Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{" "}
          sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
          vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit. Faucibus commodo massa
          rhoncus, volutpat. Dignissim sed eget risus enim.{" "}
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default AboutPage;
