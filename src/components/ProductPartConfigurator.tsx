import { Accordion, Select, RangeSlider } from "@components";
import { Link } from "wouter";
import type { IProductPart, IProductPartMaterial } from "@interfaces/IProduct";
import { useEffect, useState } from "react";
import type React from "react";
import {
  IConfiguredParameter,
  PartConfiguration,
} from "@services/session.service.ts";

interface Props {
  part: IProductPart;
  onChange: (a: PartConfiguration) => void;
  isOpen: boolean;
}

const ProductPartConfigurator: React.FC<Props> = ({
  part,
  onChange,
  isOpen,
}) => {
  const [material, setMaterial] = useState<IProductPartMaterial>(
    part?.materials?.[0]
  );
  const [parametersValues, setParametersValues] = useState<
    IConfiguredParameter[]
  >(
    part.parameters.map((parameter) => ({
      parameter_id: parameter.id,
      value: parameter.default_value,
    }))
  );

  useEffect(() => {
    onChange({
      part_id: part.id,
      material_id: material.id,
      parameters: parametersValues,
    });
  }, [material, parametersValues]);

  return (
    <>
      <Accordion
        key={part.id}
        title={part.label}
        icon={"AdjustmentsVerticalIcon"}
        isOpen={isOpen}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold leading-8 pb-2">Materials</h3>
            <div className="flex justify-between items-center text-sm font-normal pb-6">
              <p>Choose material specs</p>
              <Link href="#" className="text-indigo-600 font-medium">
                Info
              </Link>
            </div>
            <Select
              onChange={(val) => {
                setMaterial(val);
              }}
              name="material"
              value={material}
              options={part.materials.map((material) => ({
                label: material.title_en,
                value: material,
              }))}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold leading-8 pb-2">Dimensions</h3>
            <div className="flex justify-between items-center text-sm font-normal pb-6">
              <p>Adjust dimensions</p>
              <Link href="#" className="text-indigo-600 font-medium">
                Info
              </Link>
            </div>
            {part.parameters.map((parameter) => (
              <RangeSlider
                key={parameter.id}
                className="pb-4"
                label={parameter.label ?? parameter.alias}
                rangeMin={parameter.minimum}
                rangeMax={parameter.maximum}
                onChange={(event) => {
                  const currentValue = event.currentTarget.value;
                  setParametersValues((prevParametersValues) =>
                    prevParametersValues.map((prevParameterValue) =>
                      prevParameterValue.parameter_id === parameter.id
                        ? {
                            ...prevParameterValue,
                            value: parseInt(currentValue),
                          }
                        : prevParameterValue
                    )
                  );
                }}
                id={"parameter " + parameter.id}
                value={
                  parametersValues.find(
                    (parameterValue) =>
                      parameterValue.parameter_id === parameter.id
                  )?.value
                }
              />
            ))}
          </div>
        </div>
      </Accordion>
    </>
  );
};

export default ProductPartConfigurator;
