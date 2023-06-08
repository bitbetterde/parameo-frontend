import { NavBar, LogoGrid, Footer } from "@components";
import { HomePage, FaqPage, ConfiguratorPage } from "@pages";
import { Switch, Route } from "wouter";

const footerMenu = [
  { name: "Home", href: "/" },
  { name: "Configurator", href: "/configurator" },
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
        buttonLinkVariant={"dark" as const}
      />
      <Switch>
        <Route path="/configurator">
          <ConfiguratorPage />
        </Route>
        <Route path="/faq/:faqitem?">
          {(params) => <FaqPage itemFromPath={params.faqitem} />}
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
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
