import React, { useState } from "react";

interface Props {
  className?: string;
  images: Array<{ image: string; imageAlt?: string }>;
}

const FeaturedImageGallery: React.FC<Props> = ({ className, images }) => {
  const [featuredImage, setFeaturedImage] = useState(images[0].image);

  const handleImageClick = (image: string) => {
    setFeaturedImage(image);
  };
  return (
    <div className={`grid gap-4 ${className || ""}`}>
      <div>
        <img
          className="h-[347px] md:h-[530px] w-full rounded-lg object-cover"
          src={featuredImage}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((item, index) => (
          <div key={index} onClick={() => handleImageClick(item.image)}>
            <img
              className="rounded-lg object-cover aspect-square"
              src={item.image}
              alt={item.imageAlt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedImageGallery;
