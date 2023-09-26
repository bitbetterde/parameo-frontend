import {
  Accordion,
  ButtonLink,
  CardSlider,
  DownloadListItem,
  FeaturedImageGallery,
  Spinner,
  ImpactSection,
  EmailResultHint,
} from "@components";
import { ISession } from "@interfaces/ISession";
import { useMachineStore, useProducerStore, useSessionStore } from "@stores";
import { isISession } from "@stores/session.store";
import { useEffect } from "react";
import { useLocation } from "wouter";
import useNotificationStore from "@stores/notification.store.ts";

interface Props {
  className?: string;
  sessionId?: string;
}

// Don't output 0, null, undefined or NaN values
const getDurationString = (
  hours?: number,
  minutes?: number,
  seconds?: number
) => {
  let formattedHours, formattedMinutes, formattedSeconds;
  if (hours) formattedHours = hours > 0 ? `${hours} h` : ``;
  if (minutes) formattedMinutes = minutes > 0 ? `${minutes} m` : ``;
  if (seconds) formattedSeconds = seconds > 0 ? `${seconds} s` : ``;

  return [formattedHours, formattedMinutes, formattedSeconds]
    .filter(Boolean)
    .join(" ");
};

const ConfiguratorResultPage: React.FC<Props> = ({ className, sessionId }) => {
  const producers = useProducerStore((state) => state.allProducers);
  const fetchProducers = useProducerStore((state) => state.loadAllProducers);
  const session = useSessionStore((state) => state.session);
  const loadSession = useSessionStore((state) => state.loadSession);
  const setNotificationData = useNotificationStore(
    (state) => state.setNotificationData
  );
  const machineStore = useMachineStore();
  const typedSession: ISession | undefined =
    session && isISession(session) ? session : undefined;

  const [, setLocation] = useLocation();

  const buttons = [
    { caption: "Local manufacturing", href: "#" },
    { caption: "Feedback", href: "#" },
    { caption: "Copy link", href: "#" },
  ];

  useEffect(() => {
    fetchProducers();
    machineStore.loadAllMachines();
    if (sessionId && !typedSession) {
      loadSession(sessionId).catch(() => {
        setNotificationData({
          title: "Error!",
          variant: "error",
          text: "Product doesn't exist!",
        });
        setLocation("/");
      });
    }
  }, []);

  const descriptionList = [
    {
      title: "Bill of materials (.csv)",
      filePath: typedSession?.bom_file_url || "",
    },
    {
      title: "Machine Code (.nc) zipped",
      filePath: typedSession?.gcode_files_zip_url || "",
    },
    {
      title: "Part designs (.dxf) zipped",
      filePath: typedSession?.dxf_file_url || "",
    },
  ];

  const materialEmissions = typedSession?.co2_emissions?.find(
    (item) => item.label === "Material"
  );
  const machineEmissions = typedSession?.co2_emissions?.find(
    (item) => item.label === "Machine"
  );

  const totalEmissions = typedSession?.co2_emissions?.reduce(
    (sum, emission) => sum + (emission.value || 0),
    0
  );

  const impactValuesData = [
    {
      title: "Material",
      description: typedSession?.material_needed
        ? `${typedSession?.material_needed
            ?.map((need) => need.cubic_meters)
            .reduce((a, b) => a + b, 0)} m3`
        : "",
      detailData: [
        {
          subtitle: "Monetary",
          icon: "CurrencyEuroIcon",
          value: typedSession?.material_price
            ? new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(typedSession?.material_price)
            : "",
        },
        {
          subtitle: "CO2 Emissions",
          icon: "GlobeAltIcon",
          value: materialEmissions
            ? `${materialEmissions?.value.toFixed(2)} kg`
            : "",
        },
      ],
    },
    {
      title: "Machine",
      description: typedSession?.machine_time
        ? getDurationString(
            typedSession?.machine_time.hours,
            typedSession?.machine_time.minutes
          )
        : "",
      detailData: [
        {
          subtitle: "Electricity",
          icon: "BoltIcon",
          value: typedSession?.machine_kwh
            ? `${typedSession?.machine_kwh} kW`
            : "",
        },
        {
          subtitle: "CO2 Emissions",
          icon: "GlobeAltIcon",
          value: machineEmissions
            ? `${machineEmissions?.value.toFixed(2)} kg`
            : "",
        },
      ],
    },
  ];

  const selectedMachine = machineStore.allMachines.find(
    (machine) => machine.id === typedSession?.machine_id
  );
  return (
    <div className={`bg-white pt-6 md:pt-12 ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pb-10">
          {typedSession?.product.subtitle && (
            <h2 className="text-base font-semibold text-indigo-600 uppercase">
              {typedSession?.product.subtitle}
            </h2>
          )}
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {typedSession?.product.title}
          </h1>
          {typedSession?.product.description && (
            <p className="mt-4 text-[20px] leading-7 text-gray-500">
              {typedSession?.product.description}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 lg:pt-4 pb-12">
          <div className="lg:w-1/3 flex flex-col gap-5">
            {typedSession?.all_files_zip_url && (
              <ButtonLink
                caption="Edit design"
                target={`/configurator/session/${typedSession?.uuid}`}
                className="py-[13px] justify-center text-base w-full"
                newTab
              />
            )}
            <ImpactSection
              data={impactValuesData}
              totalEmissions={totalEmissions}
            />
            {descriptionList && (
              <dl className="divide-y divide-gray-200">
                {descriptionList?.map(
                  (item, i) =>
                    item.filePath && (
                      <div
                        key={i}
                        className="px-4 py-6 flex justify-between items-center gap-12 lg:gap-16 sm:px-0"
                      >
                        <DownloadListItem
                          title={item.title}
                          filePath={item.filePath}
                        />
                      </div>
                    )
                )}
              </dl>
            )}
            {typedSession?.all_files_zip_url && (
              <ButtonLink
                caption="Download all files (.zip)"
                target={typedSession?.all_files_zip_url}
                className="p-[13px] justify-center text-base w-full"
                icon="FolderArrowDownIcon"
                newTab
              />
            )}
            <EmailResultHint sessionId={typedSession?.uuid} />
          </div>
          <div className="lg:w-2/3">
            {typedSession?.product.pictures?.length && (
              <FeaturedImageGallery
                images={typedSession?.product.pictures?.map((image) => ({
                  image: image.image_url,
                }))}
              />
            )}
            {buttons && (
              <div className="flex flex-col lg:flex-row gap-4 justify-start items-center w-full pt-6 lg:pb-12">
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
          </div>
        </div>
        <div className="mx-auto max-w-3xl flex flex-col justify-center items-center gap-12">
          {Boolean(selectedMachine) && (
            <>
              <h2 className="text-base font-semibold text-indigo-600 uppercase">
                Instructions for Manufacturers
              </h2>
              <div className="w-full pb-9">
                <div className="border-b border-gray-200 mx-auto max-w-3xl w-full" />
                {selectedMachine?.production_hints?.map((hint, i) => (
                  <Accordion key={i} title={hint.topic}>
                    {hint.text}
                  </Accordion>
                ))}
              </div>
            </>
          )}
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
              producers?.map((producer) => ({
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
      </div>
    </div>
  );
};

export default ConfiguratorResultPage;
