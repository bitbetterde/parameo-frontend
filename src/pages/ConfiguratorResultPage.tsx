import {
  Accordion,
  ButtonLink,
  CardSlider,
  ImageSlider,
  FeaturedImageGallery,
  DownloadListItem,
} from "@components";

interface Props {
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const instructionsAccordion = [
  "Milling head choice",
  "Machine hint from the Machine File",
  "Product hint from the Product File",
  "Machine hint from the Machine File",
];

const cards = [
  {
    title: "regenholz",
    href: "#",
    subtitle: "Hamburg",
    description:
      "regenholz GbR Steinbeker Straße 62 20537 Hamburg Germany https://regenholz.de/",
    cardImage: "/images/hamburg.png",
  },
  {
    title: "FAB LAB BCN",
    href: "#",
    subtitle: "Barcelona",
    description:
      "Fab Lab Barcelona Pujades 102 Barcelona Spain https://fablabbcn.org/",
    cardImage: "/images/barcelona.png",
  },
  {
    title: "You?",
    href: "#",
    subtitle: "City",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    cardImage: "/images/manufacturer.png",
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

const buttons = [
  { caption: "Edit design", href: "#" },
  { caption: "Local manufacturing", href: "#" },
  { caption: "Feedback", href: "#" },
  { caption: "Copy link", href: "#" },
];

const descriptionList = [
  { title: "Material price", description: "min. €360,00" },
  { title: "Emissions", description: "approx. 1.000 xyz" },
  { title: "Machine runtime", description: "min. 6.5 hrs" },
  { title: "Bill of materials (.csv)", filePath: "#" },
  { title: "Machine code (.nc)", filePath: "#" },
  { title: "Nested parts (.svg)", filePath: "#" },
];

const ConfiguratorResultPage: React.FC<Props> = ({
  className,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={`bg-white pt-6 md:pt-12 ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pb-10">
          {subtitle && (
            <h2 className="text-base font-semibold text-indigo-600 uppercase">
              {subtitle}
            </h2>
          )}
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-[20px] leading-7 text-gray-500">
              {description}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 lg:pt-4 pb-12">
          <div className="lg:w-1/3 flex flex-col gap-10">
            <div className="bg-gray-100 h-60 w-full rounded-lg" />
            {descriptionList && (
              <dl className="divide-y divide-gray-200">
                {descriptionList?.map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-6 grid grid-cols-2 gap-12 lg:gap-16 sm:px-0"
                  >
                    <DownloadListItem
                      title={item.title}
                      description={item.description}
                      filePath={item.filePath}
                    />
                  </div>
                ))}
              </dl>
            )}
            <ButtonLink
              caption="Download all files"
              target="#"
              className="py-[13px] text-center text-base w-full"
            />
          </div>
          <div className="lg:w-2/3">
            <FeaturedImageGallery images={images} />
          </div>
        </div>
        <div className="mx-auto max-w-3xl flex flex-col justify-center items-center gap-12">
          {buttons && (
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center w-full pt-4 lg:pb-12">
              {buttons?.map((button, i) => (
                <ButtonLink
                  key={i}
                  caption={button.caption}
                  target={button.href}
                  variant="secondary"
                  className="w-full lg:w-auto px-5 py-3 text-center text-base font-medium"
                />
              ))}
            </div>
          )}
          <h2 className="text-base font-semibold text-indigo-600 uppercase">
            Instructions for Manufacturers
          </h2>
          <div className="w-full pb-9">
            <div className="border-b border-gray-200 mx-auto max-w-3xl w-full" />
            {instructionsAccordion?.map((instruction, i) => (
              <Accordion key={i} title={instruction} />
            ))}
          </div>
        </div>
        <h2 className="text-base font-semibold text-indigo-600 uppercase pt-7 text-center">
          Local Manufacturing
        </h2>
        <CardSlider
          cardsData={
            cards &&
            cards?.map((card: any) => ({
              title: card.title,
              href: "#",
              subtitle: card.subtitle,
              description: card.description,
              cardImage: card.cardImage,
            }))
          }
        />
        <ImageSlider items={images} />
      </div>
    </div>
  );
};

export default ConfiguratorResultPage;
