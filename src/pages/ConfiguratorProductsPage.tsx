import { CardSlider, HeroSection, ImageSlider, Spinner } from "@components";
import type { IProduct } from "@interfaces/IProduct";
import { productService } from "@services";
import { useEffect, useState } from "react";

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
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    productService.getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <HeroSection
        title="Configurator headline here ..."
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        heroImage="/images/parameo-hero-img_configurator.jpg"
        heroImageAlt="carpenter working on a laptop"
      />
      {!products ? (
        <div className="w-full h-96 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <CardSlider
          title="Explore & customize parameo products"
          subtitle="Configurator"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
          cardsData={
            products &&
            products?.map((product) => ({
              title: product?.title,
              href: `/configurator/product/${product.id}`,
              subtitle: product?.machine_type,
              description: product?.description || "No description available",
              licence: "licence type",
              cardImage: product?.pictures?.[0]?.image_url,
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
