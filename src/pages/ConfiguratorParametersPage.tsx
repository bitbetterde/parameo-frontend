import {
  Checkbox,
  ModelViewer,
  ProductPartConfigurator,
  Select,
  TextInput,
  Toggle,
} from "@components";
import { Link } from "wouter";
import type React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as ExclamationIcon } from "@assets/icons/exclamation-triangle.svg";
import useProduct from "@hooks/useProduct.ts";
import sessionService, {
  IConfiguredParameter,
  PartConfiguration,
} from "@hooks/session.service.ts";
import { ISession } from "@interfaces/ISession.ts";
import { IProductPart } from "@interfaces/IProduct.ts";

interface Props {
  productId: number;
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface GenerateFormatsData extends FormInput {
  parts: Array<PartConfiguration>;
}

interface FormInput {
  projectName: string;
  machine: string;
  co2Footprint: boolean;
  billOfMaterials: boolean;
  approximateMaterialPrice: boolean;
  technicalDrawing: boolean;
  localManufacturers: boolean;
}

const ConfiguratorParametersPage: React.FC<Props> = ({
  className,
  productId,
}) => {
  const product = useProduct(productId)?.product;

  const [partsValues, setPartsValues] = useState<PartConfiguration[]>(
    product?.parts.map((part) => ({
      part_id: part.id,
      material_id: part?.materials?.[0]?.id,
      parameters: [],
    }))
  );

  const [session, setSession] = useState<ISession>();

  const { register, watch, formState } = useForm<FormInput>({
    mode: "onBlur",
  });
  const { isValid, isDirty, errors } = formState;
  const machine = watch("machine");

  useEffect(() => {
    setPartsValues(
      product?.parts.map((part) => ({
        part_id: part.id,
        material_id: part?.materials?.[0]?.id,
        parameters: [],
      }))
    );
  }, [product]);

  useEffect(() => {
    if (product?.id) {
      sessionService
        .getSession({ product_id: product.id })
        .then((newSession) => setSession(newSession));
    }
  }, [product?.id]);

  useEffect(() => {
    //TODO need field in endpoint
    updateSession();
  }, [machine, partsValues]);

  const updateSession = () => {
    if (session)
      sessionService
        .updateSession(session?.uuid, {
          session: {},
          parts: partsValues,
        })
        .then((res) => {
          setSession(res);
        });
  };

  return product ? (
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
              {product.parts?.map((part) => (
                <ProductPartConfigurator
                  key={part.id}
                  part={part}
                  onChange={(partValues) => {
                    setPartsValues((prevPartValues) =>
                      prevPartValues?.map((prevPartValue) =>
                        prevPartValue.part_id === part.id
                          ? { ...prevPartValue, ...partValues }
                          : prevPartValue
                      )
                    );
                  }}
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
                <Select
                  {...register("machine")}
                  options={[product.machine]}
                  error={Boolean(errors?.machine)}
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
                    {...register("co2Footprint")}
                    label={"CO2 Footprint"}
                  />
                  <Checkbox
                    {...register("billOfMaterials")}
                    label={"Bill of Materials"}
                  />
                  <Checkbox
                    {...register("approximateMaterialPrice")}
                    label={"Approximate material price"}
                  />
                  <Checkbox
                    {...register("technicalDrawing")}
                    label={"Technical drawing"}
                  />
                  <Checkbox
                    {...register("localManufacturers")}
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
            <button
              disabled={!isValid && !session}
              className="bg-indigo-600 text-white hover:bg-indigo-700 w-full py-3 text-center text-base font-medium rounded-md disabled:bg-gray-200"
              onClick={(e) => {
                e.preventDefault();
                sessionService.regenerateFormats((session as ISession).uuid);
              }}
            >
              Generate Formats
            </button>
          </div>
          <div className="lg:w-[40%] flex flex-col gap-4">
            <div className="flex justify-between pb-2">
              <h2 className="text-base font-semibold text-indigo-600 uppercase">
                Preview
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-900 font-normal">
                  3D- / Sketch-view
                </span>
                <Toggle />
              </div>
            </div>
            <ModelViewer
              modelSrc={
                session?.preview_file_url ?? ""
                //   ??
                // "https://modelviewer.dev/assets/ShopifyModels/Chair.glb"
              }
              modelAlt="A 3D model"
            />
            <button
              disabled={!isValid && !session}
              className="bg-indigo-600 text-white hover:bg-indigo-700 w-full py-3 text-center text-base font-medium rounded-md disabled:bg-gray-200"
              onClick={(e) => {
                e.preventDefault();
                sessionService.regeneratePreview((session as ISession).uuid);
              }}
            >
              Generate Preview
            </button>
          </div>
        </div>
      </div>
    </form>
  ) : null;
};
export default ConfiguratorParametersPage;
