import type React from "react";

interface Props {
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const ImprintPage: React.FC<Props> = ({
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
        <h2>Information according to § 5 TMG</h2>
        <p>
          regenholz GbR
          <br /> Steinbeker Straße 62
          <br /> 20537 Hamburg
        </p>
        <p>Represented by: Fynn Schmid and René Watral</p>
        <p>
          Sales tax identification number according to §27a sales tax law:
          46/657/02648
        </p>
        <p>Contact via: mail[at]parameo.de</p>

        <h2>Liability for Content</h2>
        <p>
          The contents of our pages have been created with the greatest care.
          However, we cannot accept any liability for the accuracy, completeness
          and topicality of the content. As a service provider, we are
          responsible for our own content on these pages in accordance with § 7
          para.1 TMG (German Telemedia Act) and general laws. According to §§ 8
          to 10 TMG, however, we as a service provider are not obliged to
          monitor transmitted or stored third-party information or to
          investigate circumstances that indicate illegal activity. Obligations
          to remove or block the use of information in accordance with general
          legislation remain unaffected by this. However, liability in this
          respect is only possible from the time of knowledge of a specific
          infringement. As soon as we become aware of such infringements, we
          will remove this content immediately.
        </p>

        <h2>Liability for Links</h2>
        <p>
          Our website contains links to external third-party websites over whose
          content we have no influence.Therefore, we cannot accept any liability
          for this third-party content.The respective provider or operator of
          the pages is always responsible for the content of the linked
          pages.The linked pages were checked for possible legal violations at
          the time of linking.Illegal content was not recognizable at the time
          of linking.However, permanent monitoring of the content of the linked
          pages is not reasonable without concrete evidence of an
          infringement.If we become aware of any legal infringements, we will
          remove such links immediately.
        </p>
      </div>
    </div>
  );
};

export default ImprintPage;
