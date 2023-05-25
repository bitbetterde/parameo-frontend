import {
  NavBar,
  FeatureSection,
  Avatar,
  HeroSection,
  FaqSection,
  LogoGrid,
  CardsSlider,
  ImageSlider,
  Footer,
} from "@components";

const heroButtons = [
  { caption: "Try it!", target: "#", variant: "light" as const },
  { caption: "FAQ", target: "#", variant: "transparent" as const },
];

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

const FAQdata = [
  {
    title: "FABULASER mini",
    href: "#",
    teaser:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: "Machinery",
    callToAction: "Read full entry",
  },
  {
    title: "How to calculate material costs?",
    href: "#",
    teaser:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    category: "Costs",
    callToAction: "Read full entry",
  },
  {
    title: "...",
    href: "#",
    teaser:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    category: "Manufacturing",
    callToAction: "Read full entry",
  },
  {
    title: "How can I help develop new features?",
    href: "#",
    teaser:
      "Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.",
    category: "Code",
    callToAction: "Read full entry",
  },
];

const cards = [
  {
    title: "Multibox",
    href: "#",
    category: { name: "CNC", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    licence: "licence type",
    cardImage:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "regenholz",
      href: "#",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Standdesk",
    href: "#",
    category: { name: "CNC", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    licence: "licence type",
    cardImage:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "regenholz",
      href: "#",
      authorImage:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Picture Frame",
    href: "#",
    category: { name: "Lasercutter", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    licence: "licence type",
    cardImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Daniela Metz",
      href: "#",
      authorImage:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const FAQCards = [
  {
    title: "Maslow CNC",
    href: "#",
    category: { name: "CNC", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    licence: "OSH - licence type?",
    cardImage: "images/maslow.jpg",
    author: {
      name: "Maslow",
      href: "#",
      authorImage: "",
    },
  },
  {
    title: "FABULASER mini",
    href: "#",
    category: { name: "Lasercutter", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    licence: "OSH - licence type?",
    cardImage: "images/fabulaser-mini.jpg",
    author: {
      name: "INMACHINES",
      href: "#",
      authorImage: "",
    },
  },
  {
    title: "More machine types",
    href: "#",
    category: { name: "Lasercutter", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    licence: "OSH - licence type?",
    cardImage: "images/other-machines.jpg",
    author: {
      name: "Manufacterer",
      href: "#",
      authorImage: "",
    },
  },
];

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

const footerMenu = [
  { name: "Home", href: "#" },
  { name: "Configurator", href: "#" },
  { name: "About", href: "#" },
  { name: "Imprint", href: "#" },
  { name: "Privacy", href: "#" },
];

const footerSocial = [
  {
    name: "Instagram",
    href: "#",
    alt: "Instagram",
    type: "instagram" as const,
  },
  {
    name: "Twitter",
    href: "#",
    alt: "Twitter",
    type: "twitter" as const,
  },
  {
    name: "GitHub",
    href: "#",
    alt: "GitHub",
    type: "github" as const,
  },
  {
    name: "GitLab",
    href: "#",
    alt: "GitLab",
    type: "gitlab" as const,
  },
  {
    name: "Dribble",
    href: "#",
    alt: "Dribble",
    type: "dribble" as const,
  },
];

const logos = [
  {
    href: "#",
    alt: "IFB-Hamburg",
    type: "ifbhamburg" as const,
  },
  {
    href: "#",
    alt: "regenholz",
    type: "regenholz" as const,
  },
  {
    href: "#",
    alt: "InMachines",
    type: "inmachines" as const,
  },
  {
    href: "#",
    alt: "bitbetter",
    type: "bitbetter" as const,
  },
  {
    href: "#",
    alt: "FreeCad",
    type: "freecad" as const,
  },
  {
    href: "#",
    alt: "Statamic",
    type: "statamic" as const,
  },
];

const App = () => {
  return (
    <>
      <NavBar
        buttonLinkTarget="#"
        buttonLinkCaption="CTA"
        buttonLinkVariant="dark"
      />
      <HeroSection
        title="Customize, calculate and manufacture with ease"
        subtitle="parameo is an open tool for customizing parametric product designs, calculating costs and emissions and generating individual production data for CNC machines."
        heroImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
        heroImageAlt="People working on laptops"
        buttons={heroButtons}
      />
      <FeatureSection
        title="Leave the math to parameo"
        subtitle="automagic Features"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        features={features}
      />
      <Avatar people={people} />
      <CardsSlider
        title="Customize designs"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
        cardsData={cards}
      />
      <ImageSlider items={images} />
      <FaqSection
        title="Learn more and get involved – it's open source"
        data={FAQdata}
      />
      <CardsSlider
        title="Featured machinery"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
        cardsData={FAQCards}
      />
      <LogoGrid title="Supported by" logos={logos} />
      <Footer
        menu={footerMenu}
        links={footerSocial}
        copyright="2023 regenholz Gbr. All rights reserved."
      />
    </>
  );
};

export default App;
