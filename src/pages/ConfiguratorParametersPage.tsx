import type React from "react";
import type { IProduct } from "@interfaces/IProduct";
import type { ISession } from "@interfaces/ISession";
import type { IPartConfiguration, IGenerateFormatsResultData } from "@services";
import type { IMachine } from "@services";

import { ReactComponent as ExclamationIcon } from "@assets/icons/exclamation-triangle.svg";
import {
  Checkbox,
  ModelViewer,
  ProductPartConfigurator,
  Select,
  TextInput,
  Toggle,
  Button,
  Spinner,
} from "@components";
import { productService, sessionService, machineService } from "@services";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface Props {
  productId: number;
  className?: string;
  setResultData?: (data: IGenerateFormatsResultData) => void;
  setConfiguredProduct?: (product: IProduct) => void;
}

interface FormInput {
  projectName: string;
  machine: IMachine;
  userInterests: {
    co2Footprint: boolean;
    billOfMaterials: boolean;
    approximateMaterialPrice: boolean;
    technicalDrawing: boolean;
    localManufacturers: boolean;
  };
}

const ConfiguratorParametersPage: React.FC<Props> = ({
  className,
  productId,
  setResultData,
  setConfiguredProduct,
}) => {
  const [product, setProduct] = useState<IProduct>();
  const [partsValues, setPartsValues] = useState<IPartConfiguration[]>([]);
  const [session, setSession] = useState<ISession>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [currentlyGenerating, setCurrentlyGenerating] = useState<
    "preview" | "formats"
  >();
  const [, setLocation] = useLocation();

  const [machines, setMachines] = useState<IMachine[]>([]);

  const { register, watch, control, formState, setValue, getValues } =
    useForm<FormInput>({
      mode: "onBlur",
    });
  const { isValid, isDirty, errors } = formState;
  const machine = watch("machine");

  useEffect(() => {
    productService.getProduct(productId).then((product) => {
      setConfiguredProduct && setConfiguredProduct(product);
      machineService.getMachines().then((machines) => {
        setMachines(
          machines.filter((mach) => mach.type === product?.machine_type)
        );
        setValue("machine", machines[0]);
      });
      setProduct(product);
      setValue("projectName", "My " + product.title, { shouldValidate: true });
      setPartsValues(
        product?.parts.map((part) => ({
          part_id: part.id,
          material_id: part?.materials?.[0]?.id,
          parameters: part.parameters.map((parameter) => ({
            parameter_id: parameter.id,
            value: parameter.default_value,
          })),
        }))
      );
    });
  }, [productId, setValue]);

  const regeneratePreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentlyGenerating("preview");
    e.preventDefault();
    createOrUpdateSession().then((sessionId) => {
      sessionService.regeneratePreview(sessionId).then((preview_url) => {
        if (preview_url) {
          preview_url?.url && setPreviewUrl(preview_url?.url);
          setIs3DPreviewEnabled(true);
        }
        setCurrentlyGenerating(undefined);
      });
    });
  };

  const regenerateFormats = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userInterests = getValues().userInterests;
    const userInterestsArray = Object.entries(userInterests)
      .map(([key, value]) => value && key)
      .filter(Boolean) as string[];

    setCurrentlyGenerating("formats");
    e.preventDefault();
    createOrUpdateSession().then((sessionId) => {
      sessionService
        .regenerateFormats(sessionId, userInterestsArray)
        .then((result) => {
          setResultData && setResultData(result);
          setCurrentlyGenerating(undefined);
          result && setLocation("/configurator/result");
        });
    });
  };

  const createOrUpdateSession = async (): Promise<string> => {
    let sessionId;
    if (!session) {
      sessionId = (
        await sessionService
          .getSession({
            product_id: product?.id ?? 0,
            machine_id: machine?.id ?? 0,
          })
          .then((newSession) => {
            setSession(newSession);
            return newSession;
          })
      ).uuid;
    } else {
      sessionId = session.uuid;
    }
    await sessionService
      .updateSession(sessionId, {
        session: {},
        parts: partsValues,
      })
      .then((res) => {
        setSession(res);
      });

    return sessionId;
  };

  const [is3DPreviewEnabled, setIs3DPreviewEnabled] = useState<boolean>(true);

  return !product ? (
    <div className="w-full h-screen flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <form className={`bg-white pt-6 pb-12 md:py-12 ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pb-10">
          {product.subtitle && (
            <h2 className="text-base font-semibold text-indigo-600 uppercase">
              {product.subtitle}
            </h2>
          )}
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {product.title}
          </h1>
          {product.description && (
            <p className="mt-4 text-[20px] leading-7 text-gray-500">
              {product.description}
            </p>
          )}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-2 lg:pt-7">
          <div className="lg:w-[60%] flex flex-col gap-4">
            <h2 className="text-base font-semibold text-indigo-600 uppercase pb-2">
              Name
            </h2>
            <TextInput
              {...register("projectName", {
                required: "Field required",
              })}
              aria-invalid={errors.projectName ? "true" : "false"}
              error={Boolean(errors?.projectName)}
              placeholder="Name project"
            />
            {errors.projectName && (
              <div className="flex items-center gap-2.5">
                <ExclamationIcon className="text-red-400" />
                <span className="text-red-500 text-sm">
                  {errors.projectName.message}
                </span>
              </div>
            )}
            <h2 className="text-base font-semibold text-indigo-600 uppercase pt-16 pb-2">
              Configure
            </h2>
            <div className="w-full">
              <div className="border-b border-gray-200 mx-auto max-w-7xl w-full" />
              {product.parts?.map((part, index) => (
                <ProductPartConfigurator
                  key={part.id}
                  part={part}
                  onChange={(partValues) => {
                    setPartsValues((prevPartValues) =>
                      prevPartValues?.map((prevPartValue) =>
                        prevPartValue.part_id === part.id
                          ? partValues
                          : prevPartValue
                      )
                    );
                  }}
                  isOpen={index === 0}
                />
              ))}
            </div>
            <h2 className="text-base font-semibold text-indigo-600 uppercase pt-16 pb-2">
              Generate
            </h2>
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-16">
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-semibold leading-8 pb-2">
                  Machine
                </h3>
                <div className="flex justify-between text-sm font-normal pb-6">
                  <p>Choose machine</p>
                  <Link href="#" className="text-indigo-600 font-medium">
                    Info
                  </Link>
                </div>
                <Controller
                  name={"machine"}
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select
                      value={value}
                      onChange={(val) => {
                        onChange(val);
                        onBlur();
                      }}
                      options={machines.map((machine) => ({
                        label: machine.title_en,
                        value: machine,
                      }))}
                      error={Boolean(errors?.machine)}
                    />
                  )}
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-semibold leading-8 pb-2">Output</h3>
                <div className="flex justify-between text-sm font-normal pb-6">
                  <p>What formats do you need?</p>
                  <Link href="#" className="text-indigo-600 font-medium">
                    Info
                  </Link>
                </div>

                <div className="flex flex-col gap-4">
                  <Checkbox
                    {...register("userInterests.co2Footprint")}
                    label={"CO2 Footprint"}
                  />
                  <Checkbox
                    {...register("userInterests.billOfMaterials")}
                    label={"Bill of Materials"}
                  />
                  <Checkbox
                    {...register("userInterests.approximateMaterialPrice")}
                    label={"Approximate material price"}
                  />
                  <Checkbox
                    {...register("userInterests.technicalDrawing")}
                    label={"Technical drawing"}
                  />
                  <Checkbox
                    {...register("userInterests.localManufacturers")}
                    label={"Local manufacturers"}
                  />
                </div>
              </div>
            </div>
            {!isValid && isDirty && (
              <div className="bg-red-50 p-4 text-red-500 flex items-center gap-5 rounded-md text-base">
                <ExclamationIcon className="text-red-400" />
                <span>Please follow tooltips to continue</span>
              </div>
            )}
            <Button
              disabled={!isValid || Boolean(currentlyGenerating)}
              variant={"primary"}
              className="w-full py-3 flex items-center justify-center"
              onClick={regenerateFormats}
            >
              {currentlyGenerating === "formats" ? (
                <Spinner className={"!w-[1.5rem] !h-[1.5rem]"} />
              ) : (
                <>Generate Formats</>
              )}
            </Button>
          </div>
          <div className="lg:w-[40%] flex flex-col gap-4">
            <div className="flex justify-between pb-2">
              <h2 className="text-base font-semibold text-indigo-600 uppercase">
                Preview
              </h2>
              {product?.preview_file_2d && (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-900 font-normal">
                    Sketch/3D view
                  </span>
                  <Toggle
                    checked={is3DPreviewEnabled}
                    onChange={() => {
                      setIs3DPreviewEnabled((prevValue) => !prevValue);
                    }}
                  />
                </div>
              )}
            </div>
            {is3DPreviewEnabled ? (
              <ModelViewer
                modelSrc={
                  previewUrl ??
                  product?.preview_file_3d ??
                  "https://modelviewer.dev/assets/ShopifyModels/Chair.glb"
                }
                modelAlt="A 3D model"
              />
            ) : (
              <img
                src={product?.preview_file_2d}
                alt="2D Preview"
                className={`h-[540px] object-cover rounded-md`}
              />
            )}
            <Button
              disabled={!isValid || Boolean(currentlyGenerating)}
              variant={"primary"}
              className="w-full py-3 flex items-center justify-center"
              onClick={regeneratePreview}
            >
              {currentlyGenerating === "preview" ? (
                <Spinner className={"!w-[1.5rem] !h-[1.5rem]"} />
              ) : (
                <>Generate Preview</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ConfiguratorParametersPage;
