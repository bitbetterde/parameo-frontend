import {
  Accordion,
  ButtonLink,
  CardSlider,
  DownloadListItem,
  FeaturedImageGallery,
  Spinner,
  ImpactSection,
  EmailResultHint,
  Button,
} from "@components";
import { ISession } from "@interfaces/ISession";
import { useMachineStore, useProducerStore, useSessionStore } from "@stores";
import { isISession } from "@stores/session.store";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useNotificationStore from "@stores/notification.store.ts";
import ApproveOrderModal from "@components/ApproveOrderModal.tsx";
import { ICard } from "@interfaces";
import { IProducer } from "@services/producer.service.ts";
import orderService from "@services/order.service.ts";

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
  const isRegenerating = useSessionStore((state) => state.isRegenerating);
  const setNotificationData = useNotificationStore(
    (state) => state.setNotificationData
  );
  const machineStore = useMachineStore();
  const typedSession: ISession | undefined =
    session && isISession(session) ? session : undefined;
  const [, setLocation] = useLocation();
  const [producerForOrderModal, setProducerForOrderModal] = useState<
    IProducer | undefined
  >(undefined);
  const updateMail = useSessionStore((state) => state.updateMailSession);
  const lockSession = useSessionStore((state) => state.lockSession);

  useEffect(() => {
    fetchProducers();
    machineStore.loadAllMachines();
    if (sessionId && !session) {
      loadSession(sessionId).catch(() => {
        setNotificationData({
          title: "Error!",
          variant: "error",
          text: "Session doesn't exist!",
        });
        setLocation("/");
      });
    }
  }, []);

  useEffect(() => {
    if (session && session.state === "LOCKED") {
      setNotificationData({
        title: "Session is locked",
        variant: "info",
        text: "This session is locked, you can not edit the product. Probably because you sent this product off to a producer already.",
      });
    }
  }, [session?.uuid]);

  const confirmOrder = async (mail: string) => {
    if (session?.state !== "LOCKED") {
      await updateMail(mail);
    }

    const orderResult = await orderService.sendOrder({
      session_id: session?.uuid,
      producer_id: producerForOrderModal?.id,
    });

    lockSession();
    setProducerForOrderModal(undefined);
    setNotificationData({
      title: "Order request sent successfully",
      variant: "success",
      text: "Your order request has been sent to the manufacturer.",
    });

    if (orderResult.checkout_url) {
      window.location.assign(orderResult.checkout_url);
    }
  };

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
      filePath: typedSession?.dxf_zip_file_url || "",
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

  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  const material_need_overall = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 3,
    minimumFractionDigits: 3,
  }).format(
    typedSession?.material_needed
      ?.map((need) => need.cubic_meters)
      .reduce((a, b) => a + b, 0) ?? 0
  );
  const impactValuesData = [
    {
      title: "Material",
      description:
        typedSession?.material_needed && !isRegenerating
          ? //magic round up, because no material need is confusing for the user
            `${
              material_need_overall === "0.000"
                ? "0.001"
                : material_need_overall
            } m³`
          : "",
      detailData: [
        {
          subtitle: "Monetary",
          icon: "CurrencyEuroIcon",
          value:
            typedSession?.material_price && !isRegenerating
              ? `${numberFormat.format(typedSession?.material_price)} €`
              : "",
        },
        {
          subtitle: "CO2 Emissions",
          icon: "GlobeAltIcon",
          value:
            materialEmissions && !isRegenerating
              ? `${numberFormat.format(materialEmissions?.value)} kg`
              : "",
        },
      ],
    },
    {
      title: "Machine",
      description:
        typedSession?.machine_time && !isRegenerating
          ? getDurationString(
              typedSession?.machine_time.hours,
              typedSession?.machine_time.minutes
            )
          : "",
      detailData: [
        {
          subtitle: "Electricity",
          icon: "BoltIcon",
          value:
            typedSession?.machine_kwh && !isRegenerating
              ? `${numberFormat.format(typedSession?.machine_kwh)} kWh`
              : "",
        },
        {
          subtitle: "CO2 Emissions",
          icon: "GlobeAltIcon",
          value:
            machineEmissions && !isRegenerating
              ? `${numberFormat.format(machineEmissions?.value)} kg`
              : "",
        },
      ],
    },
  ];

  const selectedMachine = machineStore.allMachines.find(
    (machine) => machine.id === typedSession?.machine_id
  );
  return (
    <>
      {producerForOrderModal && (
        <ApproveOrderModal
          manufacturer={producerForOrderModal.name}
          onReject={() => {
            setProducerForOrderModal(undefined);
          }}
          onConfirm={confirmOrder}
          defaultMail={typedSession?.user_email_address}
        />
      )}
      <div className={`bg-white pt-6 md:pt-12 ${className || ""}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center pb-10">
            {session?.product?.subtitle && (
              <h2 className="text-base font-semibold text-indigo-600 uppercase">
                {session?.product?.subtitle}
              </h2>
            )}
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {session?.product?.title}
            </h1>
            {session?.product?.description && (
              <p className="mt-4 text-[20px] leading-7 text-gray-500">
                {session?.product?.description}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 lg:pt-4 pb-12">
            <div className="lg:w-1/3 flex flex-col gap-5">
              <ButtonLink
                disabled={isRegenerating || session?.state === "LOCKED"}
                target={`/configurator/session/${session?.uuid}`}
                className="py-[13px] justify-center text-base w-full"
                icon="ArrowPathIcon"
              >
                Edit design
              </ButtonLink>
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
                            spinner={isRegenerating}
                          />
                        </div>
                      )
                  )}
                </dl>
              )}
              <ButtonLink
                target={typedSession?.all_files_zip_url ?? ""}
                disabled={isRegenerating}
                className="p-[13px] justify-center text-base w-full"
                icon="FolderArrowDownIcon"
                newTab
              >
                Download all files (.zip)
              </ButtonLink>
              <EmailResultHint sessionId={session?.uuid} />
            </div>
            <div className="lg:w-2/3">
              {session?.product.pictures?.length && (
                <FeaturedImageGallery
                  images={session?.product.pictures?.map((image) => ({
                    image: image.image_url,
                  }))}
                />
              )}

              <div className="flex flex-col lg:flex-row gap-4 justify-start items-center w-full pt-6 lg:pb-12">
                <ButtonLink
                  nativeLink={true}
                  key={"localmanufacturing"}
                  target={"#manufacturing"}
                  variant="secondary"
                  className="w-full lg:w-auto px-5 py-3 text-center text-base font-medium"
                  icon="HomeIcon"
                  iconVariant="solid"
                >
                  Local manufacturing
                </ButtonLink>
                <ButtonLink
                  key={"feedback"}
                  target={"https://forms.gle/KDoZBCmJRBaCakXx8"}
                  variant="secondary"
                  className="w-full lg:w-auto px-5 py-3 text-center text-base font-medium"
                  icon="PencilSquareIcon"
                  iconVariant="solid"
                  newTab
                >
                  Feedback
                </ButtonLink>
                <Button
                  key={"copylink"}
                  variant="secondary"
                  className="w-full lg:w-auto px-5 py-3 text-center text-base font-medium"
                  icon="LinkIcon"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setNotificationData({
                      title: "Link copied to clipboard",
                      variant: "success",
                    });
                  }}
                >
                  Copy link
                </Button>
              </div>
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
          <h2
            className="text-base font-semibold text-indigo-600 uppercase pt-7 text-center"
            id="manufacturing"
          >
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
                producers?.map(
                  (producer): ICard => ({
                    title: producer?.name,
                    externalHref: producer?.website_url,
                    subtitle: producer?.location_name || "City",
                    cardImages: producer?.pictures,
                    description:
                      producer?.description || "No description available",
                    onButtonClick: () => {
                      setProducerForOrderModal(producer);
                    },
                    buttonCaption:
                      producer.order_type === "SHOPIFY" ? "Order" : "Request",
                    buttonIcon: "ShoppingCartIcon",
                  })
                )
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ConfiguratorResultPage;
