interface Props {
  className?: string;
  tabs: Array<string>;
  activeTab: string;
  onClickTab: (tab: string) => void;
}

const Tabs: React.FC<Props> = ({ className, tabs, activeTab, onClickTab }) => {
  return (
    <nav
      className={`mx-auto max-w-7xl flex justify-center space-x-4 pt-4 pb-6 ${
        className || ""
      }`}
      aria-label="Tabs"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${
            activeTab === tab
              ? "bg-indigo-100 text-indigo-700"
              : "text-gray-500 hover:text-gray-700"
          }
          rounded-md px-3 py-2 text-sm font-medium
        `}
          onClick={() => onClickTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
