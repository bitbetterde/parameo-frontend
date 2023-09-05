import BitBetterLogo from "@assets/logos/bitbetter.svg";
import FreeCadLogo from "@assets/logos/freecad.svg";
import IFBLogo from "@assets/logos/ifb-hamburg.svg";
import InMachinesLogo from "@assets/logos/inmachines.svg";
import RegenholzLogo from "@assets/logos/regenholz.svg";
import StatamicLogo from "@assets/logos/statamic.svg";
import { ILogo } from "@interfaces";
import type React from "react";

interface Props {
  className?: string;
  title: string;
  logos: Array<ILogo>;
}

const logoMapping = {
  bitbetter: BitBetterLogo,
  freecad: FreeCadLogo,
  statamic: StatamicLogo,
  inmachines: InMachinesLogo,
  regenholz: RegenholzLogo,
  ifbhamburg: IFBLogo,
};

const LogoGrid: React.FC<Props> = ({ className, title, logos }) => {
  return (
    <div className={`bg-white py-12 sm:py-16 ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center pb-8">
          <h2 className="text-base font-semibold text-gray-600 uppercase">
            {title}
          </h2>
        </div>
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 px-6">
          {logos?.map((logo, i) => (
            <div
              className="bg-gray-400/5 p-8 sm:p-10 flex justify-center items-center"
              key={i}
            >
              <Logo
                src={logoMapping[logo.type]}
                alt={logo.alt}
                href={logo.href}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface LogoItemProps {
  className?: string;
  src: string;
  alt?: string;
  href?: string;
}

export const Logo: React.FC<LogoItemProps> = ({
  className,
  src,
  alt,
  href,
}) => {
  return (
    <div className={`h-8 flex justify-center items-center ${className || ""}`}>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <img className="max-h-12 w-full object-contain" src={src} alt={alt} />
        </a>
      ) : (
        <img className="max-h-12 w-full object-contain" src={src} alt={alt} />
      )}
    </div>
  );
};

export default LogoGrid;
