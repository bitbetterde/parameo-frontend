import { Card, CardSlider } from "@components";
import { ICard } from "@interfaces/ICard";

interface Props {
  className?: string;
  title: string;
  description?: string;
  cardsData?: Array<ICard>;
  subtitle?: string;
}

const CardsGrid: React.FC<Props> = ({
  className,
  title,
  description,
  cardsData,
  subtitle,
}) => {
  return cardsData ? (
    <div
      className={`relative mx-auto max-w-7xl px-6 py-16 lg:px-[39px] lg:py-12 ${
        className || ""
      }`}
    >
      <div className="relative mx-auto max-w-7xl pb-8 lg:pb-6">
        <div className="text-center">
          {subtitle && (
            <h3 className="text-base font-semibold text-indigo-600 uppercase">
              {subtitle}
            </h3>
          )}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 font-normal sm:mt-4">
              {description}
            </p>
          )}
        </div>
      </div>
      <CardSlider cardsData={cardsData} className="md:hidden" />
      <div className="hidden md:block">
        <div
          className={`mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 ${
            className || ""
          }`}
        >
          {cardsData?.map((card) => <Card key={card.title} data={card} />)}
        </div>
      </div>
    </div>
  ) : null;
};

export default CardsGrid;
