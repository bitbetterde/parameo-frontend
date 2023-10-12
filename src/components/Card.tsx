import { PhotoIcon } from "@heroicons/react/20/solid";
import type { ICard } from "@interfaces";
import React from "react";
import { Link } from "wouter";
import { Button } from "@components";

interface Props {
  className?: string;
  data: ICard;
}

const Card: React.FC<Props> = ({ className, data }) => {
  return (
    <div
      key={data?.title}
      className={`flex flex-col overflow-hidden rounded-lg ${className || ""}`}
    >
      <div className="flex-shrink-0">
        <ConditionalLinkWrapper
          isExternal={Boolean(data?.externalHref)}
          href={data?.externalHref || data?.href}
        >
          {data?.cardImage ? (
            <img
              className={`h-48 w-full object-cover ${
                data?.externalHref || data?.href ? "cursor-pointer" : ""
              }`}
              src={data?.cardImage}
              alt={data?.cardImageAlt}
            />
          ) : (
            <PhotoIcon className="h-48 w-full text-gray-50 bg-gray-300 p-6" />
          )}
        </ConditionalLinkWrapper>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600 pb-2 uppercase">
            {data?.subtitle}
          </p>
          <ConditionalLinkWrapper
            isExternal={Boolean(data?.externalHref)}
            href={data?.externalHref || data.href}
          >
            <p
              className={`text-xl font-semibold text-gray-900 ${
                data?.externalHref || data?.href
                  ? "cursor-pointer hover:underline"
                  : ""
              }`}
            >
              {data?.title}
            </p>
          </ConditionalLinkWrapper>
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
                <ConditionalLinkWrapper
                  isExternal={true}
                  href={data?.author?.href}
                >
                  <p
                    className={`text-sm font-medium text-gray-900 ${
                      data?.author?.href ? "hover:underline" : ""
                    }`}
                  >
                    {data?.author?.name}
                  </p>
                </ConditionalLinkWrapper>
              )}
              {data?.licence && (
                <div className="flex space-x-1 text-sm text-gray-500">
                  <span aria-hidden="true">{data?.licence}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {data.onButtonClick && data.buttonCaption && (
          <div className="mt-6 flex items-center justify-center">
            <Button
              icon={data.buttonIcon}
              variant={"secondary"}
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                data.onButtonClick && data.onButtonClick();
              }}
            >
              {data.buttonCaption}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

interface ConditionalLinkWrapperProps {
  href?: string;
  isExternal?: boolean;
  children: React.ReactElement;
}

const ConditionalLinkWrapper: React.FC<ConditionalLinkWrapperProps> = ({
  href,
  isExternal,
  children,
}) => {
  if (!href) {
    return <>{children}</>;
  } else {
    if (isExternal) {
      return (
        <a href={href} target={"_blank"} rel={"noreferrer"}>
          {children}
        </a>
      );
    } else {
      return <Link href={href}>{children}</Link>;
    }
  }
};

export default Card;
