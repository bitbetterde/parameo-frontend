import type { IFaqFile } from "@interfaces/IFaq";
import { Link } from "wouter";
import { FAQ_ENTRY_READ_MORE } from "@translations/en.json";

interface Props {
  className?: string;
  data: IFaqFile;
}

const FaqEntry: React.FC<Props> = ({ className, data }) => {
  return (
    <div className={className}>
      <p className="text-sm text-gray-500 font-normal">
        {data.tags.join(", ")}
      </p>
      <div className="mt-2 block">
        <p className="text-xl font-semibold text-gray-900">{data.title}</p>
        <p className="mt-3 text-base text-gray-500">{data.teaser}</p>
      </div>
      <div className="mt-3">
        <Link
          href={"/faq/" + data.id}
          className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
        >
          {FAQ_ENTRY_READ_MORE}
        </Link>
      </div>
    </div>
  );
};

export default FaqEntry;
