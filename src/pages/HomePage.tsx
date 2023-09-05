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
import { useEffect, useState } from "react";
import { IProduct } from "@interfaces/IProduct.ts";
import productService from "../services/product.service.ts";
import machineService, { IMachine } from "../services/machine.service.ts";

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
    name: "Users & Makers",
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
    name: "CO2 footprint",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "globe" as const,
  },
  {
    name: "Material price",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "lightning" as const,
  },
  {
    name: "Bill of materials",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: "scale" as const,
  },
  {
    name: "DYI or BUY",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: "annotation" as const,
  },
];

const images = [
  {
    image: "/images/regenholz-parameo-MultiFrame_0521-art.webp",
    imageAlt: "parameo production",
  },
  {
    image: "/images/pregenholz-parameo_OpenBox_pic-02.webp",
    imageAlt: "parameo production",
  },
  {
    image: "/images/regenholz-parameo_StandDesk_0149.webp",
    imageAlt: "parameo production",
  },
  {
    image: "/images/regenholz-parameo-MultiFrame_1262.webp",
    imageAlt: "parameo production",
  },
  {
    image: "/images/regenholz-parameo_OpenBox_pic-01.webp",
    imageAlt: "parameo production",
  },
  {
    image: "/images/regenholz-parameo_StandDesk_unsplash-hZcmnLfJfv0.webp",
    imageAlt: "parameo production",
  },
];

const HomePage = () => {
  const visibleFaqItems = rawFaqs
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .filter((faq) => faq.showOnHomePage);

  const [products, setProducts] = useState<IProduct[]>();
  const [machines, setMachines] = useState<any>();

  useEffect(() => {
    productService.getProducts().then((products) => {
      setProducts(products);
    });
    machineService.getMachines().then((machines) => {
      setMachines(machines);
    });
  }, []);

  return (
    <>
      <HeroSection
        title="Customize, calculate and manufacture with ease"
        subtitle="parameo is an open tool for customizing parametric product designs, calculating costs and emissions and generating individual production data for CNC machines."
        heroImage="/images/parameo-hero-img_home-bw.jpg"
        heroImageAlt="wood plate goods"
        buttons={heroButtons}
      />
      <FeatureSection
        title="Leave the math to parameo"
        subtitle="automagic Features"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        features={features}
      />
      <AvatarSection people={people} title="Connecting" />
      {!products ? (
        <div className="w-full h-32 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="Customize designs"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
          cardsData={
            products &&
            products?.map((product) => ({
              title: product?.title,
              href: `/configurator/${product?.id}/parameters`,
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
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
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
