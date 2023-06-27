import {
  FeatureSection,
  AvatarSection,
  HeroSection,
  CardSlider,
  ImageSlider,
  FaqSection,
  Spinner,
} from "@components";
import rawFaqs from "@faqs";
import useMachines from "@hooks/useMachines";
import useProducts from "@hooks/useProducts";

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
    name: "Aware consumers & makers",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    imageAlt: "",
  },
  {
    name: "Distributed designers",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    imageAlt: "",
  },
  {
    name: "Local manufacturers",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    imageAlt: "",
  },
];

const features = [
  {
    name: "CO2 footprint",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "GlobeAltIcon",
  },
  {
    name: "Material price",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "BoltIcon",
  },
  {
    name: "Bill of materials",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: "ScaleIcon",
  },
  {
    name: "DYI or BUY",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: "ChatBubbleBottomCenterTextIcon",
  },
];

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

const HomePage = () => {
  const visibleFaqItems = rawFaqs
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .filter((faq) => faq.showOnHomePage);

  const { machines, isLoading } = useMachines();
  const { products } = useProducts();

  return (
    <>
      <HeroSection
        title="Customize, calculate and manufacture with ease"
        subtitle="parameo is an open tool for customizing parametric product designs, calculating costs and emissions and generating individual production data for CNC machines."
        heroImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
        heroImageAlt="People working on laptops"
        buttons={heroButtons}
      />
      <FeatureSection
        title="Leave the math to parameo"
        subtitle="automagic Features"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        features={features}
      />
      <AvatarSection people={people} title="Connecting" />
      {isLoading ? (
        <div className="w-full h-32 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="Customize designs"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
          cardsData={
            products &&
            products?.map((product: any) => ({
              title: product?.title,
              href: "/configurator/parameters",
              subtitle: product?.machine,
              description: product?.description || "No description available",
              licence: "licence type",
              cardImage: product?.pictures[0]?.image_url,
              author: {
                name: "Producer",
                href: "#",
                authorImage: "",
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
      {isLoading ? (
        <div className="w-full h-32 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="Featured machinery"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
          cardsData={
            machines &&
            machines?.map((machine: any) => ({
              title: machine?.title_en,
              href: "#",
              subtitle: machine.type,
              description:
                machine?.description_en || "No description available",
              licence: "OSH - License type",
              cardImage: machine?.pictures[0]?.image_url,
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
