import React, { useEffect, useState } from "react";
import { ImpactSection } from "@components";
import { ISession } from "@interfaces/ISession.ts";
import { useProductStore } from "@stores";
import { CONVERSION_FACTOR_TO_MM } from "@components/ProductPartConfigurator.tsx";
import { ImpactSectionTabId } from "@components/ImpactSection.tsx";

interface Props {
  typedSession: ISession | undefined;
  isRegenerating: boolean;
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

const ImpactSectionDataWrapper: React.FC<Props> = ({
  typedSession,
  isRegenerating,
}) => {
  const [currentTab, setCurrentTab] = useState<ImpactSectionTabId>(
    ImpactSectionTabId.IMPACT
  );

  const product = useProductStore((state) => state.selectedProduct);
  const loadProduct = useProductStore((state) => state.loadProduct);

  useEffect(() => {
    if (typedSession?.product?.id) {
      loadProduct(typedSession.product.id);
    }
  }, [typedSession?.product?.id]);

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

  const specsData =
    typedSession?.configured_parts && product
      ? typedSession.configured_parts.map((configuredPart) => {
          const detailData = [];
          if (configuredPart.selected_material) {
            detailData.push({
              subtitle: configuredPart?.selected_material?.title_en,
              icon: "Square3Stack3DIcon",
              value: "",
            });
          }
          detailData.push(
            ...configuredPart.configured_parameters.map((parameter) => {
              const partPara = product.parts
                .find((p) => p.id === configuredPart.part.id)
                ?.parameters.find((para) => para.id === parameter.parameter_id);
              return {
                subtitle: partPara?.label ?? partPara?.alias ?? "",
                icon: "CubeIcon",
                value: parameter.value / CONVERSION_FACTOR_TO_MM + " mm",
              };
            })
          );
          return {
            title: configuredPart.part.label,
            description: "",
            detailData: detailData,
          };
        })
      : [];

  return (
    <ImpactSection
      data={
        currentTab === ImpactSectionTabId.IMPACT ? impactValuesData : specsData
      }
      totalEmissions={totalEmissions}
      onChange={(tab) => {
        setCurrentTab(tab);
      }}
      showTotalEmissions={currentTab === ImpactSectionTabId.IMPACT}
      showSpinner={currentTab === ImpactSectionTabId.IMPACT}
    />
  );
};

export default ImpactSectionDataWrapper;
