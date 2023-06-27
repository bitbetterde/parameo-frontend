import type { ICard } from "@interfaces/ICard";
import { Link } from "wouter";
import { PhotoIcon } from "@heroicons/react/20/solid";

interface Props {
  className?: string;
  data: ICard;
}

const Card: React.FC<Props> = ({ className, data }) => {
  return (
    <>
      <div
        key={data?.title}
        className={`flex flex-col overflow-hidden rounded-lg ${
          className || ""
        }`}
      >
        <div className="flex-shrink-0">
          {data?.cardImage ? (
            <img
              className="h-48 w-full object-cover"
              src={data?.cardImage}
              alt={data?.cardImageAlt}
            />
          ) : (
            <PhotoIcon className="h-48 w-full text-gray-50 bg-gray-300 p-6" />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600 hover:underline">
              {data?.subtitle}
            </p>
            {data?.externalHref ? (
              <a
                href={data?.externalHref}
                className="mt-2 block"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-xl font-semibold text-gray-900">
                  {data?.title}
                </p>
                <p className="mt-3 text-base font-normal text-gray-500">
                  {data?.description}
                </p>
              </a>
            ) : (
              <Link href={data?.href} className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {data?.title}
                </p>
                <p className="mt-3 text-base font-normal text-gray-500">
                  {data?.description}
                </p>
              </Link>
            )}
          </div>
          {data?.author && (
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <Link href={data?.author?.href}>
                  <span className="sr-only">{data?.author?.name}</span>
                  {data?.author?.authorImage ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={data?.author?.authorImage}
                      alt={data?.author?.authorImageAlt}
                    />
                  ) : (
                    <PhotoIcon className="h-10 w-10 rounded-full text-gray-50 bg-gray-300 p-2" />
                  )}
                </Link>
              </div>
              <div className="ml-3">
                {data?.author?.name && (
                  <p className="text-sm font-medium text-gray-900">
                    <Link href={data?.author?.href} className="hover:underline">
                      {data?.author?.name}
                    </Link>
                  </p>
                )}
                {data?.licence && (
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <span aria-hidden="true">{data?.licence}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
