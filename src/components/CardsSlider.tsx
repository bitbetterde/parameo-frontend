import { Card } from "@components";
import { ICard } from "@interfaces/ICard";

interface Props {
  className?: string;
  title: string;
  description?: string;
  cardsData: Array<ICard>;
}

const CardsSlider: React.FC<Props> = ({
  className,
  title,
  description,
  cardsData,
}) => {
  return (
    <div
      className={`relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-[39px] lg:py-24 ${
        className || ""
      }`}
    >
      <div className="relative mx-auto max-w-7xl lg:pb-6">
        <div className="text-center">
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
      <div
        className={`mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 ${
          className || ""
        }`}
      >
        {cardsData.map((card) => (
          <Card data={card} />
        ))}
      </div>
    </div>
  );
};

export default CardsSlider;
