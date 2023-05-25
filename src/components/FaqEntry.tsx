import type { IFaq } from "@interfaces/IFaq";

interface Props {
  className?: string;
  data: IFaq;
}

const FaqEntry: React.FC<Props> = ({ className, data }) => {
  return (
    <div className={className}>
      <p className="text-sm text-gray-500 font-normal">{data.category}</p>
      <a href={data.href} className="mt-2 block">
        <p className="text-xl font-semibold text-gray-900">{data.title}</p>
        <p className="mt-3 text-base text-gray-500">{data.teaser}</p>
      </a>
      <div className="mt-3">
        <a
          href={data.href}
          className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
        >
          {data.callToAction}
        </a>
      </div>
    </div>
  );
};

export default FaqEntry;
