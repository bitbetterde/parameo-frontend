import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

type Props = {
  className?: string;
  items: Array<{ image: string; imageAlt?: string }>;
};

const ImageSlider: React.FC<Props> = ({ className = "", items }) => {
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
  return (
    <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24 ${className || ""}`}>
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="keen-slider flex h-[574px] overflow-hidden rounded-xl"
        >
          {items.map((item, index) => (
            <img
              key={index}
              src={item.image}
              className="keen-slider__slide object-cover"
              alt={item.imageAlt}
            />
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
                    currentSlide === idx ? "!bg-indigo-600" : ""
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
