import { useState } from "react";
import {
  NavBar,
  LogoGrid,
  Footer,
  Notification,
  ScrollToTop,
} from "@components";
import {
  HomePage,
  FaqPage,
  ConfiguratorProductsPage,
  ConfiguratorParametersPage,
  AboutPage,
  ConfiguratorResultPage,
  ImprintPage,
  PrivacyPage,
} from "@pages";
import { Switch, Route } from "wouter";
import { INotification } from "@interfaces/INotification";

const footerMenu = [
  { name: "Home", href: "/" },
  { name: "Configurator", href: "/configurator/products" },
  { name: "About", href: "/about" },
  { name: "Imprint", href: "/imprint" },
  { name: "Privacy", href: "/privacy" },
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
  const [notificationData, setNotificationData] = useState<INotification>();
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <ScrollToTop />
      <NavBar
        buttonLinkTarget="#"
        buttonLinkCaption="CTA"
        buttonLinkVariant={"primary" as const}
      />
      <Notification
        show={showNotification}
        onClickClose={() => {
          setShowNotification(false);
          setTimeout(() => {
            setNotificationData(undefined);
          }, 300);
        }}
        title={notificationData && notificationData.title}
        text={notificationData && notificationData.text}
        variant={notificationData && notificationData.variant}
      />
      <Switch>
        <Route path="/configurator/parameters">
          <ConfiguratorParametersPage
            title="Stand desk"
            subtitle="Design"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
          />
        </Route>
        <Route path="/configurator/products">
          <ConfiguratorProductsPage />
        </Route>
        <Route path="/configurator/result">
          <ConfiguratorResultPage
            title="Ollies desk"
            subtitle="Stand desk"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
          />
        </Route>
        <Route path="/faq/:faqitem?">
          {(params) => (
            <FaqPage
              itemFromPath={params.faqitem}
              title="Frequently Asked Questions"
              subtitle="FAQ"
              onClickLinkIcon={(id) => {
                setShowNotification(true);
                id &&
                  navigator.clipboard.writeText(
                    window.location.origin + "/faq/" + id
                  );
                setNotificationData({
                  title: "Link copied to clipboard",
                  variant: "success",
                });
              }}
            />
          )}
        </Route>
        <Route path="/about">
          <AboutPage
            title="About parameo"
            subtitle="Project Background"
            description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."
          />
        </Route>
        <Route path="/imprint">
          <ImprintPage
            title="Imprint"
            subtitle="Felis eget velit"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Morbi tristique senectus et netus et malesuada."
          />
        </Route>
        <Route path="/privacy">
          <PrivacyPage
            title="Privacy Notice"
            subtitle="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
      <LogoGrid title={"Supported by"} logos={logos} />
      <Footer
        menu={footerMenu}
        links={footerSocial}
        copyright={"2023 regenholz Gbr. All rights reserved."}
      />
    </>
  );
};

export default App;
