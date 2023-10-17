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
    <h2>Legal Notice</h2>
    <p>
      [Company Name] [Address] [Phone Number] [Email Address]
    </p>
    <p>Represented by: [Name of Person in Charge]</p>
    <p>Responsible for Content: [Name of Person in Charge]</p>
    <p>VAT ID: [VAT Number, if applicable]</p>
    <p>Regulatory Authority: [Name of relevant regulatory authority, if applicable]</p>
    <p>Online Dispute Resolution: [Link to the Online Dispute Resolution platform, if applicable]</p>
    <p>This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV.</p>

    <h2>Liability for Content</h2>
    <p>
      The contents of our website have been created with the greatest possible care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG (Telemediengesetz - German Telemedia Act), we as service providers are liable for our content on these pages by general laws. However, according to Sections 8 to 10 of the TMG, we service providers are not obliged to monitor external information transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, a liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.
    </p>

    <h2>Liability for Links</h2>
    <p>
      Our website contains links to external websites, over whose contents we have no control. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the websites is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking. However, permanent monitoring of the contents of the linked pages is not reasonable without specific indications of a violation. Upon notification of violations, we will remove such links immediately.
    </p>

    <h2>Copyright</h2>
    <p>
      The contents and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution, and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. In so far as the contents on this site were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.
    </p>
  </div>
</div>
  );
};

export default ImprintPage;
