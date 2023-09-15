import {
  Footer,
  LogoGrid,
  NavBar,
  Notification,
  ScrollToTop,
} from "@components";
import {
  AboutPage,
  ConfiguratorParametersPage,
  ConfiguratorProductsPage,
  ConfiguratorResultPage,
  FaqPage,
  HomePage,
  ImprintPage,
  PrivacyPage,
} from "@pages";
import type React from "react";
import { Route, Switch, useLocation } from "wouter";
import { useNotificationStore } from "@stores";

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
    alt: "FreeCad",
    type: "freecad" as const,
  },
  {
    href: "#",
    alt: "bitbetter",
    type: "bitbetter" as const,
  },
];

const App: React.FC = () => {
  const notificationStore = useNotificationStore();
  const [, setLocation] = useLocation();

  return (
    <>
      <ScrollToTop />
      <NavBar
        buttonLinkTarget="#"
        buttonLinkCaption="TRY IT"
        buttonLinkVariant={"primary" as const}
      />
      <Notification
        show={notificationStore.showNotification}
        onClickClose={() => {
          notificationStore.closeNotification();
        }}
        title={notificationStore?.notificationData?.title}
        text={notificationStore?.notificationData?.text}
        variant={notificationStore?.notificationData?.variant}
      />
      <Switch>
        <Route path="/configurator/product/:productId">
          {(params) => {
            if (isNaN(Number(params.productId))) {
              setLocation("/");
              notificationStore.setNotificationData({
                title: "Error!",
                variant: "error",
                text: "Product doesn't exist!",
              });
            } else {
              return (
                <ConfiguratorParametersPage
                  productId={Number(params.productId)}
                />
              );
            }
          }}
        </Route>
        <Route path="/configurator/session/:sessionId">
          {(params) => (
            <ConfiguratorParametersPage sessionId={params.sessionId} />
          )}
        </Route>
        <Route path="/configurator/products">
          <ConfiguratorProductsPage />
        </Route>
        <Route path="/configurator/result/:sessionId">
          {(params) => <ConfiguratorResultPage sessionId={params.sessionId} />}
        </Route>
        <Route path="/faq/:faqitem?">
          {(params) => (
            <FaqPage
              itemFromPath={params.faqitem}
              title="Frequently Asked Questions"
              subtitle="FAQ"
              onClickLinkIcon={(id) => {
                id &&
                  navigator.clipboard.writeText(
                    window.location.origin + "/faq/" + id
                  );
                notificationStore.setNotificationData({
                  title: "Link copied to clipboard",
                  variant: "success",
                });
              }}
            />
          )}
        </Route>
        <Route path="/about">
          <AboutPage
            title="Parametric Build Assistant"
            subtitle="About"
            description="Parameo is an open online tool for the configuration of parametric product designs from sheet goods, for the generation of production data for CNC machines as well as the calculation of material costs and emissions."
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
