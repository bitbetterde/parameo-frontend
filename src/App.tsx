import { useState } from "react";
import { NavBar, LogoGrid, Footer, Notification } from "@components";
import { HomePage, FaqPage, ConfiguratorPage } from "@pages";
import { Switch, Route } from "wouter";
import { INotification } from "@interfaces/INotification";

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
  const [notificationData, setNotificationData] = useState<INotification>();

  return (
    <>
      <NavBar
        buttonLinkTarget="#"
        buttonLinkCaption="CTA"
        buttonLinkVariant={"dark" as const}
      />
      <Notification
        show={Boolean(notificationData)}
        onClickClose={() => {
          setNotificationData(undefined);
        }}
        title={notificationData && notificationData.title}
        text={notificationData && notificationData.text}
        variant={notificationData && notificationData.variant}
      />
      <Switch>
        <Route path="/configurator">
          <ConfiguratorPage />
        </Route>
        <Route path="/faq/:faqitem?">
          {(params) => (
            <FaqPage
              itemFromPath={params.faqitem}
              onClickLinkIcon={() => {
                setNotificationData({
                  title: "Link copied to clipboard",
                  text: "Lorem ipsum",
                  variant: "success",
                });
              }}
            />
          )}
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
