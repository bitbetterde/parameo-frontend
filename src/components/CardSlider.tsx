import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Card } from "@components";
import { ICard } from "@interfaces/ICard";
import { useWindowSize } from "usehooks-ts";

interface Props {
  className?: string;
  title?: string;
  description?: string;
  cardsData?: Array<ICard>;
  subtitle?: string;
}

const BREAKPOINT_TABLET = 640;
const BREAKPOINT_DESKTOP = 1024;

const CardSlider: React.FC<Props> = ({
  className,
  title,
  description,
  cardsData,
  subtitle,
}) => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      [`(min-width:${BREAKPOINT_TABLET}px)`]: {
        slides: { perView: 2, spacing: 0 },
      },
      [`(min-width:${BREAKPOINT_DESKTOP}px)`]: {
        slides: { perView: 3, spacing: 0 },
      },
    },
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    drag: false,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const totalCardsAvailable = cardsData?.length || 0;

  const { width } = useWindowSize();
  const isMobileViewport = width && width < BREAKPOINT_TABLET;
  const isDesktopViewport = width && width > BREAKPOINT_DESKTOP;

  useEffect(() => {
    instanceRef?.current?.update();
  }, [cardsData]);

  return cardsData ? (
    <div
      className={`relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-12 ${
        className || ""
      }`}
    >
      {title && (
        <div className="relative mx-auto max-w-7xl pb-8 lg:pb-12">
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
      )}
      <div
        ref={ref}
        className="overflow-hidden flex relative w-[calc(100%+32px)] rounded-lg pb-6 -mx-4"
      >
        {cardsData?.map((card) => (
          <div className="keen-slider__slide px-4" key={card.title}>
            <Card data={card} className="shadow-lg h-full" />
          </div>
        ))}
      </div>

      {isMobileViewport && loaded && instanceRef.current && (
        <div className="flex justify-center items-center py-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`rounded-lg cursor-pointer mx-1.5 p-1.5 ${
                  currentSlide === idx ? "bg-indigo-600" : "bg-stone-300"
                }`}
              />
            );
          })}
        </div>
      )}
      {!isMobileViewport && loaded && instanceRef.current && (
        <>
          <nav
            className="flex items-center justify-between bg-white p-6"
            aria-label="Pagination"
          >
            <p className="text-sm text-gray-400 font-normal">
              Showing <span className="font-medium"> {currentSlide + 1} </span>{" "}
              to
              <span className="font-medium">
                {" "}
                {currentSlide + (isDesktopViewport ? 3 : 2)}
              </span>{" "}
              of
              <span className="font-medium"> {totalCardsAvailable} </span>{" "}
              results
            </p>
            <div className="flex flex-1 justify-end">
              <PaginationButton
                caption="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef?.current?.prev();
                }}
                disabled={currentSlide === 0}
              />
              <PaginationButton
                caption="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
                className="ml-3"
                disabled={
                  currentSlide ===
                  (cardsData?.length || 0) - (isDesktopViewport ? 3 : 2)
                }
              />
            </div>
          </nav>
        </>
      )}
    </div>
  ) : null;
};

interface PaginationButtonProps {
  caption: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled: boolean;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  caption,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 focus-visible:outline-offset-0 disabled:bg-gray-300 ${
        className || ""
      }`}
      disabled={disabled}
    >
      {caption}
    </button>
  );
};

export default CardSlider;
