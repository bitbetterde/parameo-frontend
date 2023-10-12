import React, { useRef, useState } from "react";
import { Icon } from ".";

interface Props {
  images: Array<{ src: string; alt?: string; className?: string }>;
  commonImageClasses?: string;
  className?: string;
}

const CrossFadeImageSlider: React.FC<Props> = ({
  images,
  className,
  commonImageClasses = "",
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>();

  const commonImageBaseClasses =
    "absolute top-0 left-0 transition-opacity duration-1000 " +
    commonImageClasses;

  const clearNextTimeout = () => {
    clearTimeout(timerRef.current);
  };

  const nextTimeout = () => {
    clearNextTimeout();
    setActiveImageIndex((oldIndex) => (oldIndex + 1) % images.length);

    timerRef.current = setTimeout(() => {
      nextTimeout();
    }, 2000);
  };

  return (
    <div
      className={`relative group ${className || ""}`}
      onMouseEnter={() => {
        nextTimeout();
      }}
      onMouseLeave={() => {
        clearNextTimeout();
      }}
    >
      <Icon
        name="Square2StackIcon"
        variant="outline"
        className="absolute right-0 top-0 w-6 h-6 m-2 group-hover:text-gray-200 drop-shadow-lg text-white z-10"
      />
      {images?.map((image, i) => {
        const isActive = i === activeImageIndex;

        return (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            className={`${commonImageBaseClasses} ${
              isActive ? "opacity-100" : "opacity-0"
            } ${image.className || ""}`}
          />
        );
      })}
    </div>
  );
};

export default CrossFadeImageSlider;
