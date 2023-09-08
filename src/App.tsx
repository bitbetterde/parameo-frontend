import {
  NavBar,
  LogoGrid,
  Footer,
  Notification,
  ScrollToTop,
} from "@components";
import type { INotification } from "@interfaces";
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
import type React from "react";
import { useState } from "react";
import { Switch, Route } from "wouter";
import type { IGenerateFormatsResultData } from "@services";
import { IProduct } from "@interfaces/IProduct";

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

const App: React.FC = () => {
  const [notificationData, setNotificationData] = useState<INotification>();
  const [showNotification, setShowNotification] = useState(false);
  const [resultData, setResultData] =
    useState<IGenerateFormatsResultData | null>(null);
  const [configuredProduct, setConfiguredProduct] = useState<IProduct | null>(
    null
  );

  return (
    <>
      <ScrollToTop />
      <NavBar
        buttonLinkTarget="#"
        buttonLinkCaption="TRY IT"
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
        <Route path="/configurator/product/:productId">
          {(params) => (
            <ConfiguratorParametersPage
              productId={Number(params.productId)}
              setResultData={(data) => {
                setResultData(data);
              }}
              setConfiguredProduct={(product) => {
                setConfiguredProduct(product);
              }}
            />
          )}
        </Route>
        <Route path="/configurator/products">
          <ConfiguratorProductsPage />
        </Route>
        <Route path="/configurator/result/:sessionId?">
          {(params) => (
            <ConfiguratorResultPage
              sessionId={params.sessionId}
              title={configuredProduct?.title || "Default Desk"}
              subtitle={configuredProduct?.subtitle || "Default Subtitle"}
              description={
                configuredProduct?.description || "Default Description"
              }
              dxfFileUrl={resultData?.dxf_file_url}
              gcodeFileUrl={resultData?.gcode_file_url}
              allFilesUrl={resultData?.all_files_zip_url}
              co2Emissions={resultData?.co2_emissions}
              materialPrice={resultData?.material_price}
              machineTime={resultData?.machine_time}
              images={configuredProduct?.pictures}
            />
          )}
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
