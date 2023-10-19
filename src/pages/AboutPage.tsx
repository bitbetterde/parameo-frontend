import { ContactForm, ContentHeader, HeroSection } from "@components";
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
    <>
      <HeroSection
        title="parameo"
        subtitle="project background"
        heroImage="/images/parameo-hero-img_faq.jpg"
        heroImageAlt="cnc mill in action"
      />
      <div className={`mx-auto max-w-3xl px-6 py-0 ${className || ""}`}>
        <ContentHeader title={title} subtitle={subtitle} teaser={description} />
        <div className="pt-6 max-w-none prose prose-h2:text-[30px] prose-h2:leading-10 prose-lg prose-p:leading-8 prose-a:text-indigo-600 text-gray-500">
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

          <h2>Motivation</h2>
          <blockquote>
            “For customers with average purchasing power, small companies
            efforts to create custom design and machine code are usually too
            high. Economical production is a major challenge, especially for
            one-off items. Also more and more people are interested in building
            their own furniture. The DIY sector is booming and nowadays almost
            everything can be learned via free video tutorials and open
            knowledge platforms. But getting started with digital machine
            manufacturing in the craft sector is difficult or impossible for
            most private individuals. In addition to learning the hardware and
            control software, basic knowledge of operational safety, materials
            science and - most importantly - design and/or CAD software skills
            are required to turn one's idea into production data. The learning
            of manual know-how, the handling of digital tools and the direct
            contact of citizens to local production sites are especially in
            demand now. We address these challenges with "parameo". The
            configurator offers the design of 3D models according to individual
            dimensions and requirements. The self-configured model file can be
            downloaded, further processed in CAD programs (e.g. Free-CAD) or go
            directly into production as finished machine code
            (milling/printing/laser file). Consumers thus have the choice of
            either having access to a production facility themselves, using a
            local Fab Lab / Makerspace, or contacting a nearby artisanal
            business for local production. The automatic creation of a machine
            code from individual designs saves time, enables more economical
            production and offers citizens and craftspeople / manufacturers an
            immediate benefit and entry into the world of digital manufacturing
            and local making. In addition, the workflow can be used to evaluate
            practical experience with data-based collaboration between
            consumers, designers, craftspeople and manufacturers in the Hamburg
            metropolitan region. Last but not least: The way any product is
            manufactured has an impact on climate change. With parameo, we want
            to contribute to raise impact awareness. In the first step, the
            configurator shows production impact indicators. The long-term goal
            is to establish the circularity of products ("from cradle to
            cradle") and to win citizens over to increased local value creation
            and sustainable production through personal participation in the
            manufacturing process.”
          </blockquote>

          <h2>Timeline</h2>

          <img src="/images/parameo-projectscope.png" alt="Project Timeline" />

          <ul>
            <li>
              <a href="/faq/for-developers">FAQ for Developers</a>
            </li>
            <li>
              <a href="/faq/for-designers">FAQ for Designers</a>
            </li>
            <li>
              <a href="/faq/for-manufacturers">FAQ for Manufacturers</a>
            </li>
            <li>
              <a href="/faq/for-makers">FAQ for Makers</a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default AboutPage;
