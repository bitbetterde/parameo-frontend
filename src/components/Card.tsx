import type { ICard } from "@interfaces/ICard";

interface Props {
  className?: string;
  data: ICard;
}

const Card: React.FC<Props> = ({ className, data }) => {
  return (
    <>
      <div
        key={data.title}
        className={`flex flex-col overflow-hidden rounded-lg shadow-lg ${
          className || ""
        }`}
      >
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={data.cardImage}
            alt={data.cardImageAlt}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href={data.category.href} className="hover:underline">
                {data.category.name}
              </a>
            </p>
            <a href={data.href} className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                {data.title}
              </p>
              <p className="mt-3 text-base font-normal text-gray-500">
                {data.description}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={data.author.href}>
                <span className="sr-only">{data.author.name}</span>
                {data.author.authorImage ? (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={data.author.authorImage}
                    alt={data.author.authorImageAlt}
                  />
                ) : (
                  <div className="bg-gray-400 h-10 w-10 rounded-full" />
                )}
              </a>
            </div>
            <div className="ml-3">
              {data.author.name && (
                <p className="text-sm font-medium text-gray-900">
                  <a href={data.author.href} className="hover:underline">
                    {data.author.name}
                  </a>
                </p>
              )}
              {data.licence && (
                <div className="flex space-x-1 text-sm text-gray-500">
                  <span aria-hidden="true">{data.licence}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
