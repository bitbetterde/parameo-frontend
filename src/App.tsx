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
  // ImprintPage,
  // PrivacyPage,
} from "@pages";
import type React from "react";
import { Route, Switch, useLocation } from "wouter";
import { useNotificationStore } from "@stores";

const footerMenu = [
  { name: "Home", href: "/" },
  { name: "Configurator", href: "/configurator/products" },
  { name: "About", href: "/about" },
  // { name: "Imprint", href: "/imprint" },
  // { name: "Privacy", href: "/privacy" },
];

const footerSocial = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/regenholz.de",
    alt: "Instagram",
    type: "instagram" as const,
  },
  {
    name: "GitLab",
    href: "https://gitlab.regenholz.de/",
    alt: "GitLab",
    type: "gitlab" as const,
  },
];

const logos = [
  {
    href: "https://www.ifbhh.de/presse/meldung/updatehamburg-2022-1-5-millionen-euro-fuer-soziale-innovationen",
    alt: "IFB-Hamburg",
    type: "ifbhamburg" as const,
  },
  {
    href: "https://regenholz.de/",
    alt: "regenholz",
    type: "regenholz" as const,
  },
  {
    href: "https://www.freecad.org/",
    alt: "FreeCad",
    type: "freecad" as const,
  },
  {
    href: "https://www.bitbetter.de/",
    alt: "bitbetter",
    type: "bitbetter" as const,
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Configurator", href: "/configurator/products" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

const App: React.FC = () => {
  const notificationStore = useNotificationStore();
  const [, setLocation] = useLocation();

  return (
    <>
      <ScrollToTop />
      <NavBar
        navigation={navigation}
        // buttonLinkTarget="https://www.buymeacoffee.com/parameo"
        // buttonLinkCaption="BUY ME A COFFEE"
        buttonLinkTarget="https://forms.gle/KDoZBCmJRBaCakXx8"
        buttonLinkRightIcon="ArrowRightIcon"
        buttonLinkCaption="FEEDBACK"
        buttonLinkVariant="primary"
      />
      <Notification
        show={notificationStore.showNotification}
        onClickClose={() => {
          notificationStore.closeNotification();
        }}
        title={notificationStore.notificationData?.title}
        text={notificationStore.notificationData?.text}
        variant={notificationStore.notificationData?.variant}
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
            description="parameo is an open tool for customizing parametric product designs, generating individual production data for CNC machines, calculating impact values and providing a 'build or buy' option for local making with material and manufacturing data for self-production as well as contacts to request local manufacturing capacities. The project was initiated by 'regenholz' and funded by ‘ProfiImpuls‘ from the Hamburg Authority for Economy and Innovation."
          />
        </Route>
        {/*<Route path="/imprint">*/}
        {/*  <ImprintPage*/}
        {/*    title="Imprint"*/}
        {/*    subtitle="Felis eget velit"*/}
        {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Morbi tristique senectus et netus et malesuada."*/}
        {/*  />*/}
        {/*</Route>*/}
        {/*<Route path="/privacy">*/}
        {/*  <PrivacyPage*/}
        {/*    title="Privacy Notice"*/}
        {/*    subtitle="Lorem ipsum dolor sit amet"*/}
        {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."*/}
        {/*  />*/}
        {/*</Route>*/}
        <Route>
          <HomePage />
        </Route>
      </Switch>
      <LogoGrid title={"Supported by"} logos={logos} />
      <Footer
        menu={footerMenu}
        links={footerSocial}
        copyright={"2023 beta stage by regenholz."}
      />
    </>
  );
};

export default App;
