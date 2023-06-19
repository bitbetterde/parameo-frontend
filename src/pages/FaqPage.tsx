import { useState, useRef, useEffect } from "react";
import { HeroSection, ImageSlider, Tabs, Accordion } from "@components";
import rawFaqs from "@faqs";
import { groupBy } from "lodash-es";

interface Props {
  itemFromPath?: string;
  subtitle?: string;
  title?: string;
  onClickLinkIcon?: (id?: string) => void;
}

const images = [
  { image: "/images/forrest.jpg", imageAlt: "Forrest photo" },
  {
    image: "https://picsum.photos/800/500?random=2",
    imageAlt: "Photo from Picsum",
  },
  {
    image: "https://picsum.photos/1200/300?random=3",
    imageAlt: "Photo from Picsum",
  },
  {
    image: "https://picsum.photos/600/500?random=4",
    imageAlt: "Photo from Picsum",
  },
  {
    image: "https://picsum.photos/800/1200?random=5",
    imageAlt: "Photo from Picsum",
  },
];

const FaqPage: React.FC<Props> = ({
  itemFromPath,
  subtitle,
  title,
  onClickLinkIcon,
}) => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const openAccordionRef = useRef<HTMLDetailsElement>(null);

  const deduplicatedByTags = rawFaqs?.flatMap((faq) => [
    ...faq.tags.map((tag) => ({ ...faq, tags: tag })),
    { ...faq, tags: "All" },
  ]);

  const groupedByTags = groupBy(deduplicatedByTags, (faq) => faq.tags);

  const selectTags = (clickedTab: string) => {
    if (clickedTab === activeTab) {
      setActiveTab("All");
    } else {
      setActiveTab(clickedTab);
    }
  };
  const uniqueTags = Object.entries(groupedByTags)
    ?.map((tag) => ({ label: tag[0], length: tag[1].length }))
    .sort((a, b) => a.label.localeCompare(b.label));

  useEffect(() => {
    if (itemFromPath) {
      openAccordionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [itemFromPath]);

  return (
    <>
      <HeroSection
        title="From bits to atoms – learn more about parameo"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        heroImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
        heroImageAlt="People working on laptops"
      />
      <div className="mx-auto max-w-2xl text-center p-6 md:pb-10 md:pt-[44px]">
        {subtitle && (
          <h2 className="text-base font-semibold text-indigo-600 uppercase">
            {subtitle}
          </h2>
        )}
        {title && (
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
        )}
      </div>
      <Tabs tabs={uniqueTags} activeTab={activeTab} onClickTab={selectTags} />
      <div className="border-b-2 border-gray-200 mx-auto max-w-7xl hidden lg:w-[768px]" />
      <div className="pb-10 mx-auto lg:w-[768px]">
        {activeTab &&
          groupedByTags &&
          groupedByTags[activeTab]?.map((faq) => (
            <Accordion
              id={faq.id}
              ref={itemFromPath === faq.id ? openAccordionRef : undefined}
              key={faq.id}
              title={faq.title}
              onClickLinkIcon={onClickLinkIcon}
              children={faq.body}
              open={itemFromPath === faq.id}
            />
          ))}
      </div>
      <ImageSlider items={images} />
    </>
  );
};

export default FaqPage;
