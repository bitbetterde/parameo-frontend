import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ICard } from "@interfaces/ICard";
import { Card } from "@components";

interface Props {
    className?: string;
    cardsData: Array<ICard>;
  }
  
  const CardSlider: React.FC<Props> = ({
    className,
    cardsData,
  }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    });
    return cardsData ? (
      <div className={`mx-auto mt-6 max-w-lg ${className || ""}`}>
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="keen-slider flex h-full overflow-hidden rounded-xl shadow-lg"
          >
            {cardsData.map((card) => (
              <Card data={card} className="keen-slider__slide" />
            ))}
          </div>
          {loaded && instanceRef.current && (
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
                    className={`bg-stone-300 rounded-lg cursor-pointer mx-1.5 p-1.5 ${
                      currentSlide === idx ? "bg-indigo-600" : "bg-stone-300"
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    ) : null;
  };

  export default CardSlider;