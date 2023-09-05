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
        <h2>Project background</h2>
        <p>
          The project is initiated by
          <a target="_blank" href="https://regenholz.de/">
            regenholz
          </a>{" "}
          and funded by{" "}
          <a
            target="_blank"
            href="https://www.ifbhh.de/presse/meldung/updatehamburg-2022-1-5-millionen-euro-fuer-soziale-innovationen"
          >
            'UpdateHamburg 2022'
          </a>{" "}
          of the Hamburg Authority for Economy and Innovation (BWI). The
          innovation core of the tool is the combination of:
        </p>
        <ul>
          <li>
            <strong>Machine code generator</strong> – Laser cutter and CNC
            router Production data from parametric product designs.
          </li>
          <li>
            <strong>Networking of consumers and local producers</strong> –
            'Build or buy' option after configuration with local production
            capabilities
          </li>
          <li>
            <strong>Emission and cost transparency</strong> – Material price
            calculation and emission calculator for the ratio of material,
            machine and transport.
          </li>
          <li>
            <strong>Freely accessible system</strong> – The developed tool is
            based on open source software and generates machine code for open
            source hardware.
          </li>
        </ul>
        <figure>
          <img
            src="/images/proj-maslow-title.jpg"
            alt="Image of a man with a laptop infront of a Maslow CNC router"
          />
          <figcaption>Maslow CNC router at regenholz</figcaption>
        </figure>
        <p>
          <h2>Motivation</h2>
          <blockquote>
            “As a small company the effort for the custom design of the products
            and the creation of milling / laser files before production, is
            usually too high for consumers with average purchasing power.
            Economical production is a major challenge, especially for one-off
            items. Another development that we are experiencing is that more and
            more people are becoming interested in building their own
            furnishings. The DIY sector is booming, and almost everything can
            now be learned via free video tutorials and knowledge platforms. But
            getting started with digital machine manufacturing in the craft
            sector is difficult or impossible for most private individuals. In
            addition to learning the hardware and control software, basic
            knowledge of operational safety, materials science and - most
            importantly - design and/or CAD software skills are required to turn
            one's idea into a milling/laser file. The learning of manual
            know-how, the handling of digital tools and the direct contact of
            citizens to local production sites are especially in demand now. We
            address these challenges with "parameo". The configurator offers the
            design of 3D models according to individual dimensions and
            requirements. The self-configured model file can be downloaded,
            further processed in CAD programs (e.g. Free-CAD) or go directly
            into production as finished machine code (milling/printing/laser
            file). Consumers thus have the choice of either having access to a
            production facility themselves, using a local Fab Lab / Makerspace,
            or contacting a nearby artisanal business for local production. The
            automatic creation of a machine code from individual designs saves
            time, enables more economical production and offers citizens and
            craftspeople / manufacturers an immediate benefit and entry into the
            world of digital manufacturing. In addition, the workflow can be
            used to evaluate practical experience with data-based collaboration
            between consumers, designers, craftspeople and manufacturers in the
            Hamburg metropolitan region. Last but not least: The way any product
            is manufactured has an impact on climate change. With parameo, we
            want to contribute to making production as climate-friendly and
            resource-conserving as possible. In the first step, the configurator
            is used to calculate emissions for the production. The long-term
            goal is to establish the recyclability of products ("from cradle to
            cradle") and to win citizens over to increased local value creation
            and sustainable production through personal participation in the
            manufacturing process.”
          </blockquote>
        </p>
        <h2>Development toolstack</h2>
        <p>
          <strong>Backend</strong>
          <ul>
            <li>Python</li>
            <li>
              SQL Database + shareable JSON files for material and machine
              knowledgebase
            </li>
            <li>Django REST API</li>
            <li>Headless (patched) FreeCAD automation</li>
            <li>Machine runtime estimation</li>
            <li>Nesting algorithms</li>
            <li>Headless Blender</li>
            <li>Admin dashboard</li>
            <li>Wireguard VPN layer for administration</li>
            <li>Order modules: Email & Shopify integration</li>
          </ul>
          <strong>Frontend</strong>
          <ul>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Tailwind UI</li>
          </ul>
        </p>

        <h2>Project scope</h2>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit.
          <img
            src="/images/parameo-project-scope-01.png"
            alt="Project Scope Slide"
          />
          <strong>Our partners</strong>
          <ul>
            <li>
              <a target="_blank" href="https://bitbetter.de/">
                bitbetter
              </a>
              , Software Development
            </li>
            <li>
              <a target="_blank" href="https://www.inmachines.net/">
                INMACHINES
              </a>
              , Open Source Hardware
            </li>
          </ul>
        </p>
        <h2>Get involved</h2>
        <p>
          Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{" "}
          sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
          vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit. Faucibus commodo massa
          rhoncus, volutpat. Dignissim sed eget risus enim.{" "}
          <ul>
            <li>
              <a href="/faq/designer-collaboration">FAQ for Designers</a>
            </li>
            <li>
              <a href="/faq/maufacturer-collaboration">FAQ for Manufacturers</a>
            </li>
            <li>
              <a href="/faq/developer-collaboration">FAQ for Developers</a>
            </li>
          </ul>
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default AboutPage;
