import {
  AvatarSection,
  CardSlider,
  FaqSection,
  FeatureSection,
  HeroSection,
  ImageSlider,
  Spinner,
} from "@components";
import rawFaqs from "@faqs";
import type { IMachine } from "@services/machine.service";
import type React from "react";
import { useEffect } from "react";
import { useMachineStore, useProductStore } from "@stores";

const heroButtons = [
  {
    caption: "Try it!",
    target: "/configurator/products",
    variant: "white" as const,
  },
  { caption: "FAQ", target: "/faq", variant: "transparent" as const },
];

const people = [
  {
    name: "Makers",
    image: "/images/parameo-portrait-illustration_user.png",
    imageAlt: "",
    href: "/faq/maker-collaboration",
    hoverImage: "images/parameo-user-learnmore.png",
  },
  {
    name: "Designers",
    image: "images/parameo-portrait-illustration_designer.png",
    imageAlt: "",
    href: "/faq/designer-collaboration",
    hoverImage: "images/parameo-designer-learnmore.png",
  },
  {
    name: "Manufacturers",
    image: "images/parameo-portrait-illustration_manufacturer.png",
    imageAlt: "",
    href: "/faq/manufacturer-collaboration",
    hoverImage: "images/parameo-manufacturer-learnmore.png",
  },
];

const features = [
  {
    name: "Impact valuation",
    description:
      "parameo calculates the individual impact value indicated by material data and machine runtime.",
    icon: "ScaleIcon",
  },
  {
    name: "G-code generation",
    description:
      "G-code is a programming language for CNC (Computer Numerical Control) machines. parameo provides the uniquely configured .nc-data file.",
    icon: "ArrowPathIcon",
  },
  {
    name: "Bill of materials",
    description:
      "parameo provides a 'bom.csv' with a list of needed materials based on the individually configured product dimensions.",
    icon: "TableCellsIcon",
  },
  {
    name: "DIY or BUY",
    description:
      "parameo provides material and manufacturing data for self-production as well as contacts to local manufacturers.",
    icon: "BuildingStorefrontIcon",
  },
];

const images = [
  {
    image: "/images/regenholz-parameo-MultiFrame_0521-art.webp",
    imageAlt: "regenholz MultiFrame",
  },
  {
    image: "/images/regenholz-parameo_OpenBox_pic-02.webp",
    imageAlt: "regenholz OpenBox",
  },
  {
    image: "/images/regenholz-parameo_StandDesk_0149.webp",
    imageAlt: "regenholz StandDesk",
  },
  {
    image: "/images/regenholz-parameo-MultiFrame_1262.webp",
    imageAlt: "regenholz MultiFrame",
  },
  {
    image: "/images/regenholz-parameo_OpenBox_pic-01.webp",
    imageAlt: "regenholz OpenBox",
  },
  {
    image: "/images/regenholz-parameo_StandDesk_unsplash-hZcmnLfJfv0.webp",
    imageAlt: "regenholz StandDesk",
  },
  {
    image: "/images/regenholz-parameo-MultiFrame_1269.webp",
    imageAlt: "regenholz StandDesk",
  },
];

const HomePage: React.FC = () => {
  const visibleFaqItems = rawFaqs
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .filter((faq) => faq.showOnHomePage);

  const products = useProductStore((state) => state.allProducts);
  const loadAllProducts = useProductStore((state) => state.loadAllProducts);
  const machines = useMachineStore((state) => state.allMachines);
  const loadAllMachines = useMachineStore((state) => state.loadAllMachines);

  useEffect(() => {
    loadAllProducts();
    loadAllMachines();
  }, []);

  return (
    <>
      <HeroSection
        title="Customize, calculate and manufacture with ease"
        subtitle="parameo is an open tool for customizing parametric product designs, calculating impact values and generating individual production data for CNC machines."
        heroImage="/images/parameo-hero-img_home-bw.jpg"
        heroImageAlt="wood plate goods"
        buttons={heroButtons}
      />
      <FeatureSection
        title="Leave the math to parameo"
        subtitle=""
        description="The tool offers a machine code generator, a 'build or buy' option to support local production, impact valuation and an over all freely accessible system using open source software for open source hardware."
        features={features}
      />
      <AvatarSection people={people} title="A tool for you:" />
      {!products ? (
        <div className="w-full h-32 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="parameo products"
          description="Adjust the dimensions according to your needs. <br/> Then build it yourself or buy it."
          cardsData={
            products &&
            products?.map((product) => ({
              title: product?.title,
              href: `/configurator/product/${product?.id}`,
              subtitle: product?.machine_type,
              description: product?.description || "No description available",
              licence: product?.subtitle || "licence type",
              cardImage: product?.pictures?.[0]?.image_url,
              author: {
                name: product?.designer_name,
                href: "#",
                authorImage: product?.designer_image_file,
              },
            }))
          }
        />
      )}

      <ImageSlider items={images} />
      <FaqSection
        title="Learn more and get involved – it's open source"
        data={visibleFaqItems}
      />
      {!machines ? (
        <div className="w-full h-32 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="Featured machinery"
          description="The tool is based on open source software and primarily targets open source hardware."
          cardsData={
            machines &&
            machines?.map((machine: IMachine) => ({
              title: machine?.title_en,
              href: "#",
              subtitle: machine.type,
              description:
                machine?.description_en || "No description available",
              licence: "OSH - License type",
              cardImage: machine?.pictures?.[0]?.image_url,
              author: {
                name: machine?.manufacturer,
                href: "#",
                authorImage: "",
              },
            }))
          }
        />
      )}
    </>
  );
};

export default HomePage;
