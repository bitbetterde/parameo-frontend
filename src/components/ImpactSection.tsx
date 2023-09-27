import { Icon, ButtonLink } from "@components";

interface Props {
  className?: string;
  data: Array<{
    title: string;
    description: string;
    detailData: Array<{ subtitle: string; icon: string; value: string }>;
  }>;
  totalEmissions?: number;
}

const ImpactSection: React.FC<Props> = ({
  className,
  data,
  totalEmissions,
}) => {
  return (
    <div
      className={`flex flex-col gap-9 bg-gray-100 rounded-lg p-14 ${
        className || ""
      }`}
    >
      <div>
        <h2 className="text-base font-semibold text-indigo-600 uppercase pb-2">
          Impact Values
        </h2>
        {data &&
          data.map((item, i) => (
            <div className="w-full text-sm font-medium" key={i}>
              <div className="border-b border-gray-400 py-5 w-full">
                <div className="text-gray-500 flex justify-between">
                  <div className="uppercase tracking-[0.35px]">
                    {item.title}
                  </div>
                  <div>~{item.description}</div>
                </div>
              </div>
              <div>
                {item.detailData.map((item, i) => (
                  <ImpactSectionItem
                    key={i}
                    subtitle={item.subtitle}
                    icon={item.icon}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      {totalEmissions && (
        <ButtonLink
          target={`https://translator.ecochain.com/?amount=${totalEmissions}&unit=kg`}
          variant="secondary"
          className="w-full lg:w-auto px-5 py-3 justify-center text-base font-medium"
          newTab
        >
          Translate CO2 into...
        </ButtonLink>
      )}
    </div>
  );
};

export default ImpactSection;

interface ImpactSectionItemProps {
  subtitle: string;
  icon?: string;
  value: string;
  className?: string;
}

export const ImpactSectionItem: React.FC<ImpactSectionItemProps> = ({
  subtitle,
  icon,
  value,
  className,
}) => {
  return (
    <dl
      className={`flex justify-between items-center py-5 text-indigo-600 ${
        className || ""
      }`}
    >
      <dt className="flex items-center gap-2">
        {icon && <Icon className="w-6 text-indigo-600" name={icon} />}
        <div>{subtitle}</div>
      </dt>
      <dd className="font-normal">{value}</dd>
    </dl>
  );
};
