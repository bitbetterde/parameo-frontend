import { CardSlider, HeroSection, ImageSlider, Spinner } from "@components";

import { useProductStore } from "@stores";
import { useEffect } from "react";

const images = [
  {
    image: "/images/parameo-mood_production-01.jpg",
    imageAlt: "parameo production",
  },
  {
    image: "/images/parameo-mood_production-02.jpg",
    imageAlt: "parameo production",
  },
  {
    image: "/images/parameo-mood_production-03.jpg",
    imageAlt: "parameo production",
  },
  {
    image: "/images/parameo-mood_production-04.jpg",
    imageAlt: "parameo production",
  },
  {
    image: "/images/parameo-mood_production-05.jpg",
    imageAlt: "parameo production",
  },
];

const ConfiguratorProductsPage = () => {
  const loadAllProducts = useProductStore((state) => state.loadAllProducts);
  const products = useProductStore((state) => state.allProducts);

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <>
      <HeroSection
        title="Open Production Configurator"
        subtitle="customize and build your products with ease"
        heroImage="/images/parameo-hero-img_configurator.jpg"
        heroImageAlt="carpenter working on a laptop"
      />
      {!products?.length ? (
        <div className="w-full h-96 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="Individual products for individual needs"
          description="open parametric product designs"
          autoplayImages
          cardsData={
            products &&
            products?.map((product) => ({
              title: product?.title,
              href: `/configurator/product/${product.id}`,
              subtitle: product?.machine_type,
              description: product?.description || "No description available",
              licence: product?.subtitle || "licence type",
              cardImages: product?.pictures,
              author: {
                name: product?.designer_name,
                href: "#",
                authorImage: product?.designer_image_file,
              },
            }))
          }
          className="py-5 md:py-10"
        />
      )}

      <ImageSlider items={images} />
    </>
  );
};

export default ConfiguratorProductsPage;
