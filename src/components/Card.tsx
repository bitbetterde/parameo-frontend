import { PhotoIcon } from "@heroicons/react/20/solid";
import type { ICard } from "@interfaces";
import React from "react";
import { Link } from "wouter";

interface Props {
  className?: string;
  data: ICard;
}

const Card: React.FC<Props> = ({ className, data }) => {
  const content = (
    <div
      key={data?.title}
      className={`flex flex-col overflow-hidden rounded-lg ${
        data?.href || data?.externalHref ? "cursor-pointer" : ""
      } ${className || ""}`}
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
          <p className="text-sm font-medium text-indigo-600 hover:underline pb-2 uppercase">
            {data?.subtitle}
          </p>
          <p className="text-xl font-semibold text-gray-900">{data?.title}</p>
          <p className="mt-3 text-base font-normal text-gray-500">
            {data?.description}
          </p>
        </div>
        {data?.author && (
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <Link href={data?.author?.href}>
                <span className="sr-only">{data?.author?.name}</span>
                {data?.author?.authorImage ? (
                  <img
                    className="h-10 w-10 rounded-full object-contain"
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
  );

  if (data?.externalHref) {
    return (
      <a href={data?.externalHref} target={"_blank"} rel={"noreferrer"}>
        {content}
      </a>
    );
  } else if (data?.href) {
    return <Link href={data?.href}>{content}</Link>;
  } else {
    return <>{content}</>;
  }
};

export default Card;
