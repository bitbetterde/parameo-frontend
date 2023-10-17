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
        <p>
        <p>
        <h2>Everything you need to get up and running</h2>
        </p>
          Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{" "}
          sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
          vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit. Faucibus commodo massa
          rhoncus, volutpat. Dignissim sed eget risus enim.{" "}
          <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
        </p>
      </div>
    </div>
  );
};

export default ImprintPage;
