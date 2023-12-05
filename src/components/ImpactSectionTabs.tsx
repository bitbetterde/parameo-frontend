import React, { useState } from "react";

interface Props {
  tabs: Array<{ id: number; headline: React.ReactElement }>;
  onChange: (id: number) => void;
}

const ImpactSectionTabs: React.FC<Props> = ({ tabs, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <nav className="isolate flex" aria-label="Tabs">
      {tabs.map((tab) => (
        <div
          className={`${
            selectedTab === tab.id
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          } group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center hover:bg-gray-50 focus:z-10`}
          aria-current="page"
          onClick={() => {
            setSelectedTab(tab.id);
            onChange(tab.id);
          }}
          key={tab.id}
        >
          <span className={"flex gap-2 text-base font-medium leading-6"}>
            {tab.headline}
          </span>

          <span
            aria-hidden="true"
            className={`${
              selectedTab === tab.id ? "bg-indigo-500" : "bg-transparent"
            } absolute inset-x-0 bottom-0 h-0.5`}
          ></span>
        </div>
      ))}
    </nav>
  );
};

export default ImpactSectionTabs;
