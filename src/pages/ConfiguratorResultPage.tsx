import {
  Accordion,
  ButtonLink,
  CardSlider,
  DoughnutChart,
  DownloadListItem,
  FeaturedImageGallery,
  ImageSlider,
  Spinner,
} from "@components";
import { producerService } from "@services";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  sessionId?: string;
  title: string;
  subtitle?: string;
  description?: string;
  chartData?: [number, number, number];
  allFilesUrl?: string;
  dxfFileUrl?: string;
  gcodeFileUrl?: string;
  materialPrice?: number;
  co2Emissions?: { label: string; value: number }[];
  machineTime?: number;
  images?: [{ image_url: string }];
}

const instructionsAccordion = [
  "Milling head choice",
  "Machine hint from the Machine File",
  "Product hint from the Product File",
  "Machine hint from the Machine File",
];

const producerImages = [
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

const ConfiguratorResultPage: React.FC<Props> = ({
  className,
  title,
  subtitle,
  description,
  allFilesUrl,
  dxfFileUrl,
  gcodeFileUrl,
  materialPrice,
  co2Emissions,
  machineTime,
  images,
}) => {
  const [producers, setProducers] = useState<any[]>();

  const chartData = co2Emissions?.length && {
    labels: co2Emissions?.map((emission) => emission.label) || ["Emissions"],
    datasets: [
      {
        data: co2Emissions?.map((emission) => emission.value) || [0],
        backgroundColor: ["#4F46E5", "#059669", "#DB2777"],
        borderWidth: 5,
        borderColor: "#F3F4F6",
      },
    ],
  };

  useEffect(() => {
    producerService.getProducers().then((producers) => {
      setProducers(producers);
    });
  }, []);

  const descriptionList = [
    {
      title: "Material price",
      description: materialPrice ? `${materialPrice?.toLocaleString()} €` : "",
    },
    // {
    //   title: "Emissions",
    //   description: co2Emissions ? `${co2Emissions?.toLocaleString()} kg` : "",
    // },
    {
      title: "Machine runtime",
      description: machineTime ? `${machineTime?.toLocaleString()} h` : "",
    },
    { title: "Machine Code (.nc)", filePath: gcodeFileUrl || "" },
    { title: "3D Model (.dxf)", filePath: dxfFileUrl || "" },
  ];

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
            {chartData && (
              <DoughnutChart
                className="h-60 bg-gray-100 rounded-lg"
                data={chartData}
              />
            )}
            {descriptionList && (
              <dl className="divide-y divide-gray-200">
                {descriptionList?.map(
                  (item, i) =>
                    (item.description || item.filePath) && (
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
                    )
                )}
              </dl>
            )}
            {allFilesUrl && (
              <ButtonLink
                caption="Download all files (.zip)"
                target={allFilesUrl}
                className="py-[13px] text-center text-base w-full"
                newTab
              />
            )}
          </div>
          <div className="lg:w-2/3">
            {images?.length && (
              <FeaturedImageGallery
                images={images?.map((image) => ({ image: image.image_url }))}
              />
            )}
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
        {!producers ? (
          <div className="w-full h-96 flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <CardSlider
            cardsData={
              producers &&
              producers?.map((producer: any) => ({
                title: producer?.name,
                externalHref: producer?.website_url,
                subtitle: producer?.location_name || "City",
                cardImage: producer?.pictures?.[0]?.image_url,
                description:
                  producer?.description || "No description available",
              }))
            }
          />
        )}
        <ImageSlider items={producerImages} />
      </div>
    </div>
  );
};

export default ConfiguratorResultPage;
