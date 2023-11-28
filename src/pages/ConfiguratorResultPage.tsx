import {
  Accordion,
  ButtonLink,
  CardSlider,
  DownloadListItem,
  FeaturedImageGallery,
  Spinner,
  EmailResultHint,
  Button,
  ModelViewer,
} from "@components";
import { ISession } from "@interfaces/ISession";
import { useMachineStore, useProducerStore, useSessionStore } from "@stores";
import { isISession } from "@stores/session.store";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useNotificationStore from "@stores/notification.store.ts";
import ApproveOrderModal from "@components/ApproveOrderModal.tsx";
import { ICard } from "@interfaces";
import { IProducer } from "@services/producer.service.ts";
import orderService from "@services/order.service.ts";
import CubeTransparentIcon from "@heroicons/react/24/solid/CubeTransparentIcon";
import Square2StackIcon from "@heroicons/react/24/outline/Square2StackIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import ExclamationTriangleSolidIcon from "@heroicons/react/24/solid/ExclamationTriangleIcon";
import ImpactSectionDataWrapper from "@components/ImpactSectionDataWrapper";

interface Props {
  className?: string;
  sessionId?: string;
}

const ConfiguratorResultPage: React.FC<Props> = ({ className, sessionId }) => {
  const getProducersForMachine = useProducerStore(
    (state) => state.getProducersForMachine
  );
  const fetchProducers = useProducerStore((state) => state.loadAllProducers);
  const session = useSessionStore((state) => state.session);
  const loadSession = useSessionStore((state) => state.loadSession);
  const regeneratePreview = useSessionStore(
    (state) => state.regeneratePreviewWithExistingData
  );
  const isRegenerating = useSessionStore((state) => state.isRegenerating);
  const previewFile = useSessionStore((state) => state.previewFile);
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
      loadSession(sessionId, true).catch(() => {
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

  useEffect(() => {
    if (typedSession?.uuid && !isRegenerating) {
      regeneratePreview();
    }
  }, [typedSession?.uuid, isRegenerating]);

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
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[564px_1fr] lg:gap-24 lg:gap-y-8 lg:pt-4 pb-12">
            <div
              className={
                "col-span-8 lg:row-span-1 lg:order-2 h-96 lg:h-full flex flex-col"
              }
            >
              <h3 className={"text-base leading-6 font-medium flex gap-2 py-4"}>
                <CubeTransparentIcon className={"h-6 w-6"} />
                Your Design
              </h3>
              {previewFile?.url ? (
                <ModelViewer
                  modelSrc={previewFile?.url}
                  modelAlt="A 3D model"
                  className={"flex-1"}
                />
              ) : (
                <div className={"flex justify-center items-center h-full"}>
                  <Spinner />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5 lg:col-span-4 lg:row-span-2 lg:order-1">
              <ImpactSectionDataWrapper
                isRegenerating={isRegenerating}
                typedSession={typedSession}
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
              <div className="rounded-md bg-yellow-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleSolidIcon
                      className={"h-5 w-5 text-yellow-400"}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-yellow-700">
                      <p>Please note additional manufacturing instructions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <ButtonLink
                disabled={isRegenerating || session?.state === "LOCKED"}
                target={`/configurator/session/${session?.uuid}`}
                className="py-[13px] justify-center text-base w-full"
                icon="ArrowPathIcon"
              >
                Edit design
              </ButtonLink>
              <ButtonLink
                nativeLink={true}
                target={"#manufacturing"}
                variant="secondary"
                className="py-[13px] justify-center text-base w-full"
                icon="HomeIcon"
                iconVariant="solid"
              >
                Local manufacturing
              </ButtonLink>
              <ButtonLink
                key={"feedback"}
                target={"https://forms.gle/KDoZBCmJRBaCakXx8"}
                variant="secondary"
                className="py-[13px] justify-center text-base w-full"
                icon="PencilSquareIcon"
                iconVariant="solid"
                newTab
              >
                Feedback
              </ButtonLink>
              <Button
                key={"copylink"}
                variant="secondary"
                className="py-[13px] justify-center text-base w-full"
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
              <EmailResultHint sessionId={session?.uuid} />
            </div>
            <div className="col-span-8 lg:row-span-1 lg:order-3 pt-6 lg:pt-0">
              <h3 className={"text-base leading-6 font-medium flex gap-2 mb-4"}>
                <Square2StackIcon className={"h-6 w-6"} />
                Design Examples
              </h3>
              {session?.product.pictures?.length && (
                <FeaturedImageGallery
                  images={session?.product.pictures?.map((image) => ({
                    image: image.image_url,
                  }))}
                />
              )}
              <div className={"mt-8"}>
                {Boolean(selectedMachine) && (
                  <>
                    <h3 className="text-base leading-6 font-medium flex gap-2 mb-6">
                      <ExclamationTriangleIcon className={"h-6 w-6"} />
                      Instructions for Manufacturers
                    </h3>
                    <div className="w-full pb-9">
                      <div className="border-b-2 border-gray-200 mx-auto max-w-3xl w-full" />
                      {selectedMachine?.production_hints?.map((hint, i) => (
                        <Accordion key={i} title={hint.topic}>
                          {hint.text}
                        </Accordion>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <h2
            className="text-base font-semibold text-indigo-600 uppercase pt-7 text-center"
            id="manufacturing"
          >
            Local Manufacturing
          </h2>
          {!getProducersForMachine(typedSession?.product.machine_type) ? (
            <div className="w-full h-96 flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <CardSlider
              cardsData={
                getProducersForMachine(typedSession?.product.machine_type) &&
                getProducersForMachine(typedSession?.product.machine_type).map(
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
                    buttonDisabled: isRegenerating || !typedSession,
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
