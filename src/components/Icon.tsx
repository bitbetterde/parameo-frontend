import React from "react";
import * as SolidHero24 from "@heroicons/react/24/solid";
import * as SolidHero20 from "@heroicons/react/20/solid";
import * as OutlineHero24 from "@heroicons/react/24/outline";

interface Props {
  name: string;
  size?: 24 | 20;
  className?: string;
  variant?: "solid" | "outline";
}

const Icon: React.FC<Props> = ({ name, size, className = "", variant }) => {
  let icons;
  if (variant === "solid") {
    if (size === 24) {
      ({ ...icons } = SolidHero24);
    } else {
      ({ ...icons } = SolidHero20);
    }
  } else {
    ({ ...icons } = OutlineHero24);
  }
  // @ts-ignore
  const Comp = icons[name];
  return Comp ? <Comp className={className} /> : null;
};

export default Icon;
