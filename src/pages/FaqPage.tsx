import { HeroSection, ImageSlider } from "@components";

const images = [
  { image: "images/forrest.jpg", imageAlt: "Forrest photo" },
  {
    image: "https://picsum.photos/800/500?random=2",
    imageAlt: "Photo from Picsum",
  },
  {
    image: "https://picsum.photos/1200/300?random=3",
    imageAlt: "Photo from Picsum",
  },
  {
    image: "https://picsum.photos/600/500?random=4",
    imageAlt: "Photo from Picsum",
  },
  {
    image: "https://picsum.photos/800/1200?random=5",
    imageAlt: "Photo from Picsum",
  },
];

const FaqPage = () => {
  return (
    <>
      <HeroSection
        title="From bits to atoms – learn more about parameo"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        heroImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
        heroImageAlt="People working on laptops"
      />
      <ImageSlider items={images} />
    </>
  );
};

export default FaqPage;
