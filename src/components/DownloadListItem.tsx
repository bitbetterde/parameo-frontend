import type React from "react";
import { Spinner } from "@components";

interface Props {
  title: string;
  description?: string;
  filePath?: string;
  spinner?: boolean;
}

const ListItem: React.FC<Props> = ({
  title,
  description,
  filePath,
  spinner,
}) => {
  return description || filePath ? (
    <>
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      {spinner ? (
        <dd className="mt-1 text-sm font-normal text-gray-900">
          <Spinner className={"h-4"} />
        </dd>
      ) : filePath ? (
        <dd className="mt-1 text-sm font-normal text-indigo-600">
          <a href={filePath} target="_blank">
            Download
          </a>
        </dd>
      ) : (
        <dd className="mt-1 text-sm font-normal text-gray-900">
          {description}
        </dd>
      )}
    </>
  ) : null;
};

export default ListItem;
