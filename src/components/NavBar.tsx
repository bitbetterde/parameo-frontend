import { ReactComponent as ParameoLogo } from "@assets/logos/parameo-icon.svg";
import { ButtonLink } from "@components";

interface Props {
  className?: string;
  buttonLinkTarget?: string;
  buttonLinkCaption: string;
  buttonLinkVariant?: string;
}

const navigation = [
  { name: "Home", href: "#" },
  { name: "Configurator", href: "#" },
  { name: "FAQ", href: "#" },
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
          <a href="#">
            <span className="sr-only">{import.meta.env.VITE_APP_TITLE}</span>
            <ParameoLogo className="h-8 w-auto sm:h-10" />
          </a>
        </div>
        <div className="hidden space-x-10 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
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
