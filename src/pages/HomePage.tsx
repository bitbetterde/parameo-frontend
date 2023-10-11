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
    children: "Try it!",
    target: "/configurator/products",
    variant: "white" as const,
  },
  { children: "FAQ", target: "/faq", variant: "transparent" as const },
];

const people = [
  {
    name: "Makers",
    image: "/images/parameo-portrait-illustration_user.png",
    imageAlt: "",
    href: "/faq/for-makers",
    hoverImage: "images/parameo-user-learnmore.png",
  },
  {
    name: "Designers",
    image: "images/parameo-portrait-illustration_designer.png",
    imageAlt: "",
    href: "/faq/for-designers",
    hoverImage: "images/parameo-designer-learnmore.png",
  },
  {
    name: "Manufacturers",
    image: "images/parameo-portrait-illustration_manufacturer.png",
    imageAlt: "",
    href: "/faq/for-manufacturers",
    hoverImage: "images/parameo-manufacturer-learnmore.png",
  },
];

const features = [
  {
    name: "Impact valuation",
    description:
      "parameo calculates impact indicators for individual production awareness based on material and machine data.",
    icon: "ScaleIcon",
  },
  {
    name: "G-code generation",
    description:
      "parameo provides the maschine code (.nc format) to manufacture custom-made products based on individual configuration.",
    icon: "ArrowPathIcon",
  },
  {
    name: "Parametric configuration",
    description:
      "parameo is an over all freely accessible system using open source software to build open parametric products primarily with open source machines.",
    icon: "TableCellsIcon",
  },
  {
    name: "DIY or BUY",
    description:
      "parameo provides material and manufacturing data for self-production as well as contacts to request local manufacturers.",
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
        title="Parametric Build Assistant"
        subtitle="parameo is an open tool for customizing parametric product designs, calculating impact values and generating individual production data for CNC machines."
        heroImage="/images/parameo-hero-img_home-bw.jpg"
        heroImageAlt="wood plate goods"
        buttons={heroButtons}
      />
      <FeatureSection
        title="parameo in a nutshell"
        subtitle=""
        description="arising core features"
        features={features}
      />
      <AvatarSection people={people} title="A tool for" />
      {!products ? (
        <div className="w-full h-32 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="Individual products for individual needs"
          description="customize and build with ease"
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
          description=" "
          cardsData={
            machines &&
            machines?.map((machine: IMachine) => ({
              title: machine?.title_en,
              href: "#",
              subtitle: machine.type,
              description:
                machine?.description_en || "No description available",
              licence: machine.manufacturer_subtitle,
              cardImage: machine?.pictures?.[0]?.image_url,
              author: {
                name: machine?.manufacturer,
                href: "#",
                authorImage: machine.manufacturer_image_file,
              },
            }))
          }
        />
      )}
    </>
  );
};

export default HomePage;
