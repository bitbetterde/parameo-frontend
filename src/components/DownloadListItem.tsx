import type React from "react";

interface Props {
  title: string;
  description?: string;
  filePath?: string;
}

const ListItem: React.FC<Props> = ({ title, description, filePath }) => {
  return description || filePath ? (
    <>
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      {filePath ? (
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
