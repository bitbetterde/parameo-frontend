import { Select } from "@components";
import type React from "react";

interface Props {
  className?: string;
  tabs: Array<{ label: string; length: number }>;
  activeTab: string;
  onClickTab: (tab: string) => void;
}

const Tabs: React.FC<Props> = ({ className, tabs, activeTab, onClickTab }) => {
  return (
    <>
      <div className="sm:hidden px-6 pt-2.5">
        <Select
          options={tabs?.map((tab) => tab.label)}
          value={activeTab}
          onChange={(e) => onClickTab(e.currentTarget.value)}
          name="tabs"
          label="Select an option"
        />
      </div>
      <div className="hidden sm:block">
        <nav
          className={`mx-auto max-w-7xl flex justify-center space-x-4 pt-4 p-6 ${
            className || ""
          }`}
          aria-label="Tabs"
        >
          {tabs?.map((tab) => (
            <button
              key={tab.label}
              className={`${
                activeTab === tab.label
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }
          rounded-md px-3 py-2 text-sm font-medium
        `}
              onClick={() => onClickTab(tab.label)}
            >
              {tab.label} ({tab.length})
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Tabs;
