import { NavBar, FeatureSection, Avatar } from "@components";

const people = [
  {
    name: "Aware consumers & makers",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    imageAlt: "",
  },
  {
    name: "Distributed designers",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    imageAlt: "",
  },
  {
    name: "Local manufacturers",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    imageAlt: "",
  },
];

const features = [
  {
    name: "CO2 footprint",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "GlobeAltIcon",
  },
  {
    name: "Material price",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "BoltIcon",
  },
  {
    name: "Bill of materials",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: "ScaleIcon",
  },
  {
    name: "DYI or BUY",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: "ChatBubbleBottomCenterTextIcon",
  },
];

const App = () => {
  return (
    <>
      <NavBar />
      <FeatureSection
        title="Leave the math to parameo"
        subtitle="automagic Features"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        features={features}
      />
      <Avatar people={people} />
    </>
  );
};

export default App;
