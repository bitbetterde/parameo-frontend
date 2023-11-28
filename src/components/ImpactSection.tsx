import { Icon, ButtonLink, Spinner } from "@components";
import ChartPieIcon from "@heroicons/react/24/outline/ChartPieIcon";
import AdjustmentsVerticalIcon from "@heroicons/react/24/solid/AdjustmentsVerticalIcon";
import ImpactSectionTabs from "@components/ImpactSectionTabs.tsx";
import React from "react";

interface Props {
  className?: string;
  data: Array<{
    title: string;
    description: string;
    detailData: Array<{ subtitle: string; icon: string; value: string }>;
  }>;
  totalEmissions?: number;
  onChange: (tab: ImpactSectionTabId) => void;
  showTotalEmissions: boolean;
  showSpinner: boolean;
}

export enum ImpactSectionTabId {
  IMPACT,
  SPECS,
}

const ImpactSection: React.FC<Props> = ({
  className,
  data,
  totalEmissions,
  onChange,
  showTotalEmissions,
  showSpinner,
}) => {
  return (
    <>
      <div
        className={`flex flex-col bg-gray-100 rounded-lg ${className || ""}`}
      >
        <ImpactSectionTabs
          tabs={[
            {
              id: 1,
              headline: (
                <>
                  <ChartPieIcon className={"h-6 w-6"} /> Your impact
                </>
              ),
            },
            {
              id: 2,
              headline: (
                <>
                  <AdjustmentsVerticalIcon className={"h-6 w-6"} /> Your specs
                </>
              ),
            },
          ]}
          onChange={(id) =>
            onChange(
              id === 1 ? ImpactSectionTabId.IMPACT : ImpactSectionTabId.SPECS
            )
          }
        />
        <div className={"p-14 flex flex-col gap-9"}>
          <div>
            {data &&
              data.map((item, i) => (
                <div className="w-full text-sm font-medium" key={i}>
                  <div className="border-b border-gray-400 py-5 w-full">
                    <div className="text-gray-500 flex justify-between">
                      <div className="uppercase tracking-[0.35px]">
                        {item.title}
                      </div>
                      {(item.description || showSpinner) && (
                        <div>
                          {item.description ? (
                            `~${item.description}`
                          ) : (
                            <Spinner className={"h-4"} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {item.detailData.map((item, i) => (
                      <ImpactSectionItem
                        key={i}
                        subtitle={item.subtitle}
                        icon={item.icon}
                        value={item.value}
                        showSpinner={showSpinner}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
          {showTotalEmissions && (
            <ButtonLink
              disabled={!totalEmissions}
              target={`https://translator.ecochain.com/?amount=${totalEmissions}&unit=kg`}
              variant="secondary"
              className="w-full lg:w-auto px-5 py-3 justify-center text-base font-medium"
              newTab
            >
              Translate CO2 into...
            </ButtonLink>
          )}
        </div>
      </div>
    </>
  );
};

export default ImpactSection;

interface ImpactSectionItemProps {
  subtitle: string;
  icon?: string;
  value: string;
  className?: string;
  showSpinner: boolean;
}

export const ImpactSectionItem: React.FC<ImpactSectionItemProps> = ({
  subtitle,
  icon,
  value,
  className,
  showSpinner,
}) => {
  return (
    <dl
      className={`flex justify-between items-center py-5 text-gray-900 ${
        className || ""
      }`}
    >
      <dt className="flex items-center gap-2">
        {icon && (
          <Icon className="w-6 h-6 shrink-0 text-gray-900" name={icon} />
        )}
        <div>{subtitle}</div>
      </dt>
      {(value || showSpinner) && (
        <dd className="font-normal">
          {value ? value : <Spinner className={"h-4"} />}
        </dd>
      )}
    </dl>
  );
};
