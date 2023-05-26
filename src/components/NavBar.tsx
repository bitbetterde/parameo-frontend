import { ReactComponent as ParameoLogo } from "@assets/logos/parameo-icon.svg";
import { ButtonLink } from "@components";
import { Link } from "wouter";

interface Props {
  className?: string;
  buttonLinkTarget: string;
  buttonLinkCaption: string;
  buttonLinkVariant?: string;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Configurator", href: "#" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "#" },
];

const NavBar: React.FC<Props> = ({
  className,
  buttonLinkTarget,
  buttonLinkCaption,
  buttonLinkVariant,
}) => {
  return (
    <div className={`relative bg-white ${className || ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">{import.meta.env.VITE_APP_TITLE}</span>
            <ParameoLogo className="h-8 w-auto sm:h-10" />
          </Link>
        </div>
        <div className="hidden space-x-10 md:flex">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <ButtonLink
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap px-4 py-2"
            target={buttonLinkTarget}
            caption={buttonLinkCaption}
            variant={buttonLinkVariant}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
