import GitLabLogo from "@assets/logos/gitlab.svg";
import InstagramLogo from "@assets/logos/instagram.svg";
import TwitterLogo from "@assets/logos/twitter.svg";
import GitHubLogo from "@assets/logos/github.svg";
import DribbleLogo from "@assets/logos/dribble.svg";
import type { IMenuItem, ISocialMediaItem } from "@interfaces";
import type React from "react";
import { Link } from "wouter";

interface Props {
  className?: string;
  menu: Array<IMenuItem>;
  links: Array<ISocialMediaItem>;
  copyright: string;
}

const socialMediaIconMapping = {
  instagram: InstagramLogo,
  twitter: TwitterLogo,
  github: GitHubLogo,
  gitlab: GitLabLogo,
  dribble: DribbleLogo,
};

const Footer: React.FC<Props> = ({ className, menu, links, copyright }) => {
  return (
    <footer className={`bg-white ${className || ""}`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <HorizontalMenu menu={menu} />
        <SocialMedia links={links} />
        <p className="mt-8 text-center text-base font-normal text-gray-400">
          &copy; {copyright}
        </p>
      </div>
    </footer>
  );
};

interface HorizontalMenuProps {
  menu: IMenuItem[];
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ menu }) => {
  return (
    <nav
      className="-mb-6 flex justify-center gap-x-12 flex-wrap"
      aria-label="Footer"
    >
      {menu?.map((item) => (
        <ul key={item.name} className="pb-6">
          <li>
            <Link
              href={item.href}
              className="text-base font-normal text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </Link>
          </li>
        </ul>
      ))}
    </nav>
  );
};

interface SocialMediaProps {
  links: ISocialMediaItem[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ links }) => {
  return (
    <ul className="mt-10 flex justify-center space-x-10">
      {links?.map((item, i) => (
        <li key={i}>
          <Link
            href={item.href}
            key={item.name}
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <img
              className="w-5 h-5"
              alt={item.alt}
              src={socialMediaIconMapping[item.type]}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
