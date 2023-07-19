import {
  TextInput,
  Toggle,
  Accordion,
  Checkbox,
  Select,
  RangeSlider,
  ButtonLink,
  ModelViewer,
} from "@components";
import { Link } from "wouter";

interface Props {
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const parameters = [
  { title: "Global Setting", icon: "CubeIcon" },
  { title: "Backstand", icon: "AdjustmentsVerticalIcon" },
  { title: "Table top", icon: "AdjustmentsVerticalIcon" },
  { title: "Table bottom", icon: "AdjustmentsVerticalIcon" },
];
const machineOptiions = ["Maslow CNC", "Fabulaser"];
const checkboxOptions = [
  {
    name: "CO2 Footprint",
    label: "CO2 Footprint",
  },
  {
    name: "Bill of materials",
    label: "Bill of materials",
  },
  {
    name: "Approximate material price",
    label: "Approximate material price",
  },
  {
    name: "Technical drawing",
    label: "Technical drawing",
  },
  {
    name: "Local manufacturers",
    label: "Local manufacturers",
  },
];
const materials = ["Multiplex, 2400 x 2000", "Multiplex, 1800 x 1400"];

const ConfiguratorParametersPage: React.FC<Props> = ({
  className,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={`bg-white pt-6 pb-12 md:py-12 ${className || ""}`}>
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
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-2 lg:pt-7">
          <div className="lg:w-[60%] flex flex-col gap-4">
            <h2 className="text-base font-semibold text-indigo-600 uppercase pb-2">
              Name
            </h2>
            <TextInput name="name" placeholder="Name project" />
            <h2 className="text-base font-semibold text-indigo-600 uppercase pt-16 pb-2">
              Configure
            </h2>
            <div className="w-full">
              <div className="border-b border-gray-200 mx-auto max-w-7xl w-full" />
              {parameters?.map((parameter, i) => (
                <Accordion
                  key={i}
                  title={parameter.title}
                  icon={parameter.icon}
                />
              ))}
              <Accordion title="Example" icon="ArrowDownIcon" isProse={false}>
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-16">
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-xl font-semibold leading-8 pb-2">
                      Materials
                    </h3>
                    <div className="flex justify-between text-sm font-normal pb-6">
                      <p>Choose material specs</p>
                      <Link href="#" className="text-indigo-600 font-medium">
                        Info
                      </Link>
                    </div>
                    <Select name="parameters" options={materials} />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-xl font-semibold leading-8 pb-2">
                      Dimensions
                    </h3>
                    <div className="flex justify-between text-sm font-normal pb-6">
                      <p>Adjust dimensions</p>
                      <Link href="#" className="text-indigo-600 font-medium">
                        Info
                      </Link>
                    </div>
                    <RangeSlider
                      label="Length"
                      rangeMin={0}
                      rangeMax={800}
                      id={"default-slider"}
                    />
                    <RangeSlider
                      label="Width"
                      rangeMin={0}
                      rangeMax={560}
                      id={"default-slider"}
                      read-only={280}
                    />
                    <RangeSlider
                      label="Height"
                      rangeMin={0}
                      rangeMax={560}
                      id={"default-slider"}
                      read-only={280}
                    />
                  </div>
                </div>
              </Accordion>
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
                <Select name="parameters" options={machineOptiions} />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-semibold leading-8 pb-2">Output</h3>
                <div className="flex justify-between text-sm font-normal pb-6">
                  <p>What formats do you need?</p>
                  <Link href="#" className="text-indigo-600 font-medium">
                    Info
                  </Link>
                </div>
                {checkboxOptions?.map((option, i) => (
                  <div className="pb-4" key={i}>
                    <Checkbox name={option.name} label={option.label} checked />
                  </div>
                ))}
              </div>
            </div>
            <ButtonLink
              target="/configurator/result"
              variant="primary"
              caption="Generate Formats"
              className="w-full py-3 text-center text-base font-medium"
            />
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
              modelSrc="https://modelviewer.dev/assets/ShopifyModels/Chair.glb"
              modelAlt="A 3D model"
            />
            <ButtonLink
              target="#"
              variant="primary"
              caption="Generate Preview"
              className="w-full py-3 text-center text-base font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorParametersPage;
