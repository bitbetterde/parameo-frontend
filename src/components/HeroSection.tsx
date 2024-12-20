import { ButtonLink } from "@components";
import type { IButton } from "@interfaces";
import type React from "react";

interface Props {
  className?: string;
  title?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  buttons?: Array<IButton>;
}

const HeroSection: React.FC<Props> = ({
  className,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  buttons,
}) => {
  return (
    <div className={`pb-6 md:pb-12 relative ${className || ""}`}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={heroImage}
              alt={heroImageAlt}
            />
            <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
          </div>
          <div className="relative px-6 py-16 sm:py-24 lg:px-44 lg:py-32">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">{title}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
              {subtitle}
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                {buttons &&
                  buttons.map((button, i) => (
                    <ButtonLink
                      key={i}
                      className="flex items-center justify-center px-4 py-3 sm:px-[55px]"
                      target={button.target}
                      variant={button.variant}
                    >
                      {button.children}
                    </ButtonLink>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
