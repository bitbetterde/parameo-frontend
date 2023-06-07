import { useState, useRef, useEffect } from "react";
import { HeroSection, ImageSlider, Tabs, Accordion } from "@components";
import rawFaqs from "@faqs";
import { IFaqFile } from "@interfaces/IFaq";

interface Props {
  itemFromPath?: string;
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

const FaqPage: React.FC<Props> = ({ itemFromPath }) => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const openAccordionRef = useRef<HTMLDetailsElement>(null);

  const filterFaqs = (rawFaqs: IFaqFile[], activeTab: string) => {
    if (activeTab && activeTab !== "All") {
      return rawFaqs.filter((faq) => faq.tags.includes(activeTab));
    } else {
      return rawFaqs;
    }
  };

  const filteredFaqs = filterFaqs(rawFaqs, activeTab);

  const selectTags = (clickedTab: string) => {
    if (clickedTab === activeTab) {
      setActiveTab("All");
    } else {
      setActiveTab(clickedTab);
    }
  };

  const uniqueTags = [
    "All",
    ...new Set(rawFaqs.flatMap((tag) => tag.tags).sort()),
  ];

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
      <Tabs tabs={uniqueTags} activeTab={activeTab} onClickTab={selectTags} />
      <div className="border-b-2 border-gray-200 mx-auto max-w-7xl lg:w-[768px]" />
      {filteredFaqs.map((faq) => (
        <Accordion
          ref={itemFromPath === faq.id ? openAccordionRef : undefined}
          key={faq.id}
          title={faq.title}
          href={"hello"}
          children={faq.body}
          open={itemFromPath === faq.id}
        />
      ))}
      <ImageSlider items={images} />
    </>
  );
};

export default FaqPage;
