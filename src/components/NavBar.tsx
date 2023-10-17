import { ReactComponent as ParameoLogo } from "@assets/logos/parameo-icon.svg";
import { ButtonLink } from "@components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import type React from "react";
import { useState } from "react";
import { Link } from "wouter";

interface Props {
  className?: string;
  buttonLinkTarget?: string;
  buttonLinkCaption?: string;
  buttonLinkVariant?: "primary" | "white" | "transparent";
  buttonLinkIcon?: string;
  buttonLinkRightIcon?: string;
  navigation: { name: string; href: string }[];
}

const NavBar: React.FC<Props> = ({
  navigation,
  className,
  buttonLinkTarget,
  buttonLinkCaption,
  buttonLinkVariant,
  buttonLinkRightIcon,
  buttonLinkIcon,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`relative bg-white ${className || ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">{import.meta.env.VITE_APP_TITLE}</span>
            <ParameoLogo className="h-8 w-auto sm:h-10 text-indigo-600" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-10">
          {navigation?.map((item) => (
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
          {buttonLinkTarget && buttonLinkCaption && (
            <ButtonLink
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap px-4 py-2"
              target={buttonLinkTarget}
              variant={buttonLinkVariant}
              icon={buttonLinkIcon}
              iconRight={buttonLinkRightIcon}
              newTab
            >
              {buttonLinkCaption}
            </ButtonLink>
          )}
        </div>
        <div className="md:hidden flex items-center -mr-2">
          <button
            onClick={handleMobileMenuToggle}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        {navigation?.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="block px-6 py-[22px] rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            onClick={handleMobileMenuToggle}
          >
            {item.name}
          </Link>
        ))}
        {buttonLinkTarget && buttonLinkCaption && (
          <div className="py-6 border-t border-gray-200">
            <div className="flex items-center px-5">
              <ButtonLink
                className="mx-auto md:ml-auto inline-flex items-center justify-center w-full py-[9px]"
                target={buttonLinkTarget}
                variant={buttonLinkVariant}
                icon={buttonLinkIcon}
                iconRight={buttonLinkRightIcon}
                newTab
              >
                {buttonLinkCaption}
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
